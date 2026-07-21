(() => {
  "use strict";

  const data = window.TIMMYTEXT_DATA;
  const log = document.getElementById("timmytextLog");
  const form = document.getElementById("timmytextForm");
  const input = document.getElementById("timmytextInput");
  const restart = document.getElementById("timmytextRestart");
  if (!data || !log || !form || !input) return;

  let game = null;
  let mode = "menu";

  const clone = value => JSON.parse(JSON.stringify(value));
  const hasFlag = flag => Boolean(game.flags[flag]);
  const hasItem = item => game.inventory.includes(item);
  const addItem = item => { if (!hasItem(item)) game.inventory.push(item); };
  const removeItem = item => { game.inventory = game.inventory.filter(x => x !== item); };

  function print(text = "") {
    const line = document.createElement("div");
    line.className = "terminal-output";
    line.textContent = String(text);
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
  }

  function printCommand(text) {
    const line = document.createElement("div");
    line.className = "terminal-command";
    line.textContent = `> ${text}`;
    log.appendChild(line);
  }

  function menu() {
    game = null;
    mode = "menu";
    log.textContent = "";
    print("========================================");
    print("TIMMYTEXT");
    print("========================================\n");
    print("A list of fun little adventures for any daring hero.\n\nChoose wisely — or don't.\n");
    print("Choose a Story\n");
    data.stories.forEach((story, i) => print(`${i + 1}. ${story.title}`));
    print("\nType a number to begin.");
    input.placeholder = "Choose 1–5";
    input.focus();
  }

  function start(index) {
    const story = data.stories[index];
    if (!story) return print("Please choose a valid option.");
    game = { story: clone(story), room: story.start_room, inventory: [], flags: {}, moves: 0, looks: 0, liminal: 0, running: true, pending: null };
    mode = "game";
    log.textContent = "";
    print("========================================");
    print("TIMMYTEXT");
    print("========================================\n");
    print(`${game.story.title}\n\nType 'help' or 'actions' at any time to see everything you can do.`);
    showRoom();
    input.placeholder = "Type a command…";
  }

  function showRoom() {
    const room = game.story.rooms[game.room];
    let out = `\n========================================\n${game.room}\n========================================\n`;
    if (room.art) out += `${room.art.trim()}\n\n`;
    out += room.description;
    if (room.items.length) out += `\n\nYou see:\n${room.items.map(x => `- ${x}`).join("\n")}`;
    const destinations = !game.story.liminal;
    out += `\n\nExits:\n${Object.entries(room.exits).map(([dir, dest]) => `- ${dir}${destinations ? ` (${dest})` : ""}`).join("\n")}`;
    print(out);
  }

  function ending(key = "good") {
    print(`\n${game.story.endings?.[key] || "========================================\n\nTHE END\n\n========================================"}`);
    game.running = false;
    print("\nType restart to return to the story menu.");
  }

  function move(direction) {
    const room = game.story.rooms[game.room];
    if (!room.exits[direction]) return print("\nYou can't go that way.");
    if (room.locked_exits?.[direction]) return print(`\n${room.locked_exits[direction].message}`);
    let destination = room.exits[direction];
    const next = game.story.rooms[destination];
    const needed = next.requires ? (Array.isArray(next.requires) ? next.requires : [next.requires]) : [];
    const missing = needed.filter(x => !hasItem(x));
    if (missing.length) return print(`\n${next.requires_message || (needed.length === 1 ? "It is too dark to continue.\nYou should probably find a flashlight." : `You can't leave yet. You still need: ${missing.join(", ")}.`)}`);
    if (next.requires_flag && !hasFlag(next.requires_flag)) return print(`\n${next.requires_flag_message || "Something stops you."}`);
    if (game.story.liminal && game.story.liminal.rooms.includes(game.room) && Math.random() * 100 < game.story.liminal.chance) {
      const choices = game.story.liminal.rooms.filter(x => x !== destination);
      if (choices.length) {
        destination = choices[Math.floor(Math.random() * choices.length)];
        const messages = ["The hallway seems longer than before.", "For a moment, the walls breathe.", "You are certain this is not where that door led.", "The house rearranges itself behind you."];
        print(`\n${messages[Math.floor(Math.random() * messages.length)]}`);
        game.liminal++;
      }
    }
    game.room = destination;
    game.moves++;
    showRoom();
    const entered = game.story.rooms[game.room];
    const event = entered.on_first_enter;
    if (event) {
      const flag = event.flag || `entered_${game.room}`;
      if (!hasFlag(flag)) {
        game.flags[flag] = true;
        print(`\n${event.message}`);
        if (event.remove_exit) delete entered.exits[event.remove_exit];
        if (event.ending) return ending(event.ending);
      }
    }
    if (game.room === (game.story.ending_room || "Escape")) ending(game.story.ending_room_key || "good");
  }

  function take(target) {
    if (!target) return print("\nTake what?");
    const room = game.story.rooms[game.room];
    const item = room.items.find(x => x.toLowerCase() === target.toLowerCase());
    if (!item) return print("\nYou don't see that here.");
    room.items = room.items.filter(x => x !== item); addItem(item);
    print(`\nYou picked up the ${item}.`);
    const action = game.story.on_take?.[item]?.[game.room];
    if (action) {
      if (action.flag) game.flags[action.flag] = true;
      print(`\n${action.message}`);
      if (action.add_exit) room.exits[action.add_exit[0]] = action.add_exit[1];
    }
  }

  function use(target) {
    if (!target) return print("\nUse what?");
    const parts = target.split(/\s+on\s+/i), wanted = parts[0].trim(), usedOn = (parts[1] || "").trim().toLowerCase();
    const item = game.inventory.find(x => x.toLowerCase() === wanted.toLowerCase() || x.toLowerCase().endsWith(` ${wanted.toLowerCase()}`));
    const room = game.story.rooms[game.room];
    if (!item) {
      const roomAction = game.story.room_uses?.[game.room]?.[target.toLowerCase()];
      if (!roomAction) return print("\nYou don't have that.");
      if (roomAction.requires_flag && !hasFlag(roomAction.requires_flag)) return print(`\n${roomAction.missing_message || "Nothing happens."}`);
      print(`\n${roomAction.message}`); if (roomAction.ending) ending(roomAction.ending); return;
    }
    let action = game.story.uses?.[item]?.[game.room];
    if (action) {
      action = clone(action);
      if (action.confirm_if_missing_flag && hasFlag(action.confirm_if_missing_flag)) {
        action.confirm = false; action.flag = action.safe_flag || action.flag; action.message = action.safe_message || action.message; delete action.ending;
      }
      if (action.requires_target && usedOn !== action.requires_target.toLowerCase()) return print(`\n${action.wrong_target_message || "That doesn't work here."}`);
      if (action.requires_item && !hasItem(action.requires_item)) return print(`\n${action.missing_item_message || "You need something else first."}`);
      if (action.requires_flag && !hasFlag(action.requires_flag)) return print(`\n${action.missing_message || "You need to do something else first."}`);
      if (action.flag && hasFlag(action.flag)) return print(`\n${action.already_message || "Nothing happens."}`);
      if (action.confirm) { print(`\n${action.confirm_message || "Are you sure?"}`); game.pending = { type: "use", action }; return; }
      resolveAction(action, room); return;
    }
    if (item === "Small Key" && game.room === "Crawlspace") {
      if (hasFlag("box_opened")) return print("\nThe box is already open.");
      game.flags.box_opened = true; room.items = room.items.filter(x => x !== "Wooden Box"); if (!room.items.includes("Rusty Lever")) room.items.push("Rusty Lever");
      return print("\nThe wooden box clicks open.\nInside is a Rusty Lever.");
    }
    if (item === "Brass Control Knob" && game.room === "Lantern Room") return light("lantern");
    if (item === "Flashlight") return print("\nYou switch on the flashlight.\nThe beam cuts through the darkness.");
    print("\nNothing happens.");
  }

  function resolveAction(action, room) {
    if (action.flag) game.flags[action.flag] = true;
    if (action.unlock && room.locked_exits) delete room.locked_exits[action.unlock];
    if (action.give_item && !room.items.includes(action.give_item)) room.items.push(action.give_item);
    print(`\n${action.message}`); if (action.ending) ending(action.ending);
  }

  function search(target) {
    if (!target) return print("\nSearch what?");
    const room = game.story.rooms[game.room], action = game.story.searches?.[game.room]?.[target.toLowerCase()];
    if (action) {
      if (action.requires_flag && !hasFlag(action.requires_flag)) return print("\nYou don't discover anything unusual.");
      if (action.flag && hasFlag(action.flag)) return print(`\n${action.repeat_message || "There's nothing more to find."}`);
      if (action.flag) game.flags[action.flag] = true;
      if (action.add_exit) room.exits[action.add_exit[0]] = action.add_exit[1];
      if (action.give_item && !room.items.includes(action.give_item)) room.items.push(action.give_item);
      return print(`\n${action.message}`);
    }
    if (game.room === "Bedroom" && target.toLowerCase() === "rug") {
      if (hasFlag("crawlspace_found")) return print("\nThe crawlspace is already open.");
      game.flags.crawlspace_found = true; room.exits.down = "Crawlspace";
      return print("\nYou pull back the rug.\n\nCold air rises from below.\n\nA narrow crawlspace has been revealed.");
    }
    print("\nYou don't discover anything unusual.");
  }

  function read(target) {
    if (!target) return print("\nRead what?");
    const room = game.story.rooms[game.room];
    const item = [...game.inventory, ...room.items].find(x => x.toLowerCase() === target.toLowerCase());
    if (!item) return print("\nYou don't see that here.");
    print(game.story.readables?.[item] ? `\n${game.story.readables[item]}` : "\nThere's nothing to read.");
  }

  function light() {
    if (!game.story.lightable_room || game.room !== game.story.lightable_room) return print("\nThere's nothing here to light.");
    const action = game.story.light_ending || {}, item = action.requires_item;
    if (item && hasItem(item)) { removeItem(item); game.flags.light_lit = true; print(`\n${action.success_message || "It works."}`); return ending(action.success_ending || "good"); }
    print(`\n${action.missing_item_message || "It doesn't work. Something important is missing."}\n\nAre you sure?`);
    game.pending = { type: "light" };
  }

  function hint() {
    const entries = game.story.hints?.[game.room];
    if (!entries) return print(`\n${game.story.default_hint || "Try exploring — look around, search something, or head toward an exit you haven't tried."}`);
    if (typeof entries === "string") return print(`\n${entries}`);
    const found = entries.find(x => !(x.unless_flag && hasFlag(x.unless_flag)) && !(x.unless_item && hasItem(x.unless_item)));
    if (found) print(`\n${found.text}`);
  }

  function process(raw) {
    const command = raw.toLowerCase().trim();
    if (!command) return;
    if (command === "restart") return menu();
    if (mode === "menu") return /^[1-5]$/.test(command) ? start(Number(command) - 1) : print("Please choose a number from 1 to 5.");
    if (!game.running) return print("Type restart to return to the story menu.");
    if (game.pending) {
      const pending = game.pending; game.pending = null;
      if (!["yes", "y"].includes(command)) return print("\nYou step back.\n\nNothing happens.");
      if (pending.type === "use") return resolveAction(pending.action, game.story.rooms[game.room]);
      const action = game.story.light_ending || {}; print(`\n${action.fail_message || "Something goes badly wrong."}`); return ending(action.fail_ending || "bad");
    }
    const aliases = { n:"north",s:"south",e:"east",w:"west",u:"up",d:"down",i:"inventory",inv:"inventory",l:"look",x:"look",examine:"look",grab:"take",get:"take" };
    const words = command.split(/\s+/); const verb = aliases[words[0]] || words[0], target = words.slice(1).join(" ");
    if (["north","south","east","west","up","down"].includes(verb)) return move(verb);
    if (verb === "look") { showRoom(); game.looks++; const egg = game.story.look_easter_egg; if (egg && game.looks === egg.after) print(`\n${egg.message}`); return; }
    if (verb === "inventory") return print(game.inventory.length ? `\nInventory\n----------------\n${game.inventory.map(x=>`- ${x}`).join("\n")}` : "\nYour inventory is empty.");
    if (verb === "take") return take(target);
    if (verb === "use") return use(target);
    if (verb === "search") return search(target);
    if (verb === "read") return read(target);
    if (verb === "light") return light(target);
    if (verb === "listen") return print(`\n${game.story.listens?.[game.room] || "You don't hear anything unusual."}`);
    if (verb === "turn") {
      if (!target.includes("radio")) return print("\nNothing happens.");
      const action = game.story.turns?.[game.room]?.radio;
      if (!action) return print("\nThere's nothing here to turn on.");
      if (action.flag && hasFlag(action.flag)) return print(`\n${action.repeat_message || "It's already on."}`);
      if (action.flag) game.flags[action.flag] = true;
      return print(`\n${action.message}`);
    }
    if (verb === "pull") {
      const room = game.story.rooms[game.room];
      if (target !== "lever") return print("\nNothing happens.");
      if (!room.items.includes("Rusty Lever")) return print("\nYou don't see a lever here.");
      if (game.room !== "Crawlspace") return print("\nNothing happens.");
      room.exits.east = "Escape"; room.items = room.items.filter(x => x !== "Rusty Lever"); game.flags.lever_pulled = true;
      return print("\nYou pull the rusty lever.\n\nStone grinds against stone...\n\nA hidden tunnel slowly opens to the east.");
    }
    if (verb === "hint") return hint();
    if (["help","actions","moves"].includes(verb)) return print("\nAvailable Actions\n\nMovement\n--------\nnorth south east west\nup down\n\nActions\n-------\nlook\nsearch TARGET\ntake ITEM\nuse ITEM\npull ITEM\nread ITEM\nlight TARGET\nlisten\nturn on TARGET\n\nOther\n-----\ninventory\nactions / moves / help\nhint\ncredits\nwalkthrough\nquit");
    if (verb === "walkthrough") return print(`\n${game.story.walkthrough_text || data.walkthroughs[game.story.menu_key] || "No walkthrough available."}`);
    if (verb === "credits" || command === "who brought me here") return print(`\n====================================\n\n${game.story.title.toUpperCase()}\n\nBuilt By\n\nTaylor DeLong\n\nUsing\n\nTimmyText Engine\n\nVersion 1.0.0\n\n©2026\n\n====================================`);
    if (command === "doku doku") return print("\n...\n\nMade for my son,\n\nRiver.\n\nDoku.\n\nI love you, bud.\n\n— Dad");
    if (verb === "dance") return print("\nYou dance awkwardly.\nNothing here is impressed.");
    if (verb === "jump") return print("\nYou jump.\nNothing changes.");
    if (verb === "leave") return print("\nYou try to remember the way back.\n\nYou can't.");
    if (verb === "xyzzy") return print("\nNothing happens.\n\n...or did it?");
    if (verb === "pray") return print("\nYou pray to whatever might be listening.\n\nNothing answers.");
    if (verb === "quit") { game.running = false; return print("\nThanks for playing!\n\nType restart to return to the story menu."); }
    print("\nI don't understand that command.");
  }

  form.addEventListener("submit", event => { event.preventDefault(); const value = input.value; if (!value.trim()) return; printCommand(value); input.value = ""; process(value); log.scrollTop = log.scrollHeight; });
  restart.addEventListener("click", menu);
  menu();
})();
