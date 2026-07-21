window.TIMMYTEXT_DATA = {
  "stories": [
    {
      "title": "The Liminal House",
      "start_room": "Front Yard",
      "ending_room": "Escape",
      "endings": {
        "good": "========================================\n\nYou crawl into the morning air.\n\nThe sunlight burns your eyes.\n\nYou turn around.\n\n...\n\nThere is no house.\n\nOnly an empty field.\n\n...\n\nWas there ever?\n\nGOOD ENDING\n\nBuilt with TIMMYTEXT\n\nCreated by Taylor DeLong\n"
      },
      "walkthrough_text": "========================================\nTHE LIMINAL HOUSE\nOFFICIAL WALKTHROUGH\n========================================\n\n1. Go EAST.\n\n2. Take Brass Key.\n\n3. Return WEST.\n\n4. Go NORTH.\n\n5. Use Brass Key.\n\n6. Go NORTH into the Living Room.\n\n7. Go EAST.\n\n8. Take Flashlight.\n\n9. Return WEST.\n\n10. Go NORTH into the Hallway.\n\n11. Go EAST into the Bedroom.\n\n12. SEARCH NIGHTSTAND.\n\n13. Take Screwdriver.\n\n14. Return WEST.\n\n15. Go WEST into the Bathroom.\n\n16. USE SCREWDRIVER.\n\n17. Take Small Key.\n\n18. Return EAST.\n\n19. Go EAST into the Bedroom.\n\n20. SEARCH RUG.\n\n21. Go DOWN.\n\n22. USE FLASHLIGHT.\n\n23. USE SMALL KEY.\n\n24. PULL LEVER.\n\n25. Go EAST.\n\n========================================\n\nGOOD ENDING\n\n========================================\n\nA note on the house itself:\n\nEvery move you make in Living Room, Kitchen, Hallway,\nBathroom, or Bedroom has a 10% chance of quietly dropping\nyou in a different one of those rooms instead of where you\nmeant to go. It's not a bug — it's the house. If a move\nseems to have gone somewhere strange, that's why.\n\n========================================\n\nHidden Commands\n\ncredits\n\nwho brought me here\n\ndance\n\njump\n\nleave\n\nxyzzy\n\npray\n\nlook\n(7 times)\n\nwalkthrough\n\n========================================\n\nBuilt By\n\nTaylor DeLong\n\nUsing\n\nTIMMYTEXT Engine\n\nVersion 1.0.0\n\n©2026\n\n========================================\n",
      "liminal": {
        "chance": 10,
        "rooms": [
          "Living Room",
          "Kitchen",
          "Hallway",
          "Bathroom",
          "Bedroom"
        ]
      },
      "rooms": {
        "Front Yard": {
          "art": "\n                    .\n                 _.-'-._\n              .-'       '-.\n        .-''''-.        (   )\n       /  _  _   \\        '-'\n      |  | || |   |\n      |  |_||_|   |\n      |    __      |\n      |   |  |     |\n      '---'--'-----'\n   ----+----+----+----+----\n",
          "description": "You stand before an old white house.\nThe lawn has been forgotten for years.\nThe front door is locked.",
          "exits": {
            "north": "Porch",
            "east": "Backyard"
          },
          "items": []
        },
        "Backyard": {
          "art": "\n      ,---------.\n     /  ________ \\\n    |  |________| |\n    |______________|\n    ' `  ' `  ' `  '\n          *\n",
          "description": "Tall weeds surround a rusted shed.\nSomething glints beneath the grass.",
          "exits": {
            "west": "Front Yard"
          },
          "items": [
            "Brass Key"
          ]
        },
        "Porch": {
          "art": "\n     ___________\n    |  _______  |\n    | |       | |\n    | |   O   | |\n    | |_______| |\n    |___________|\n",
          "description": "The porch groans beneath your feet.\nAn old wooden door blocks your way.",
          "exits": {
            "south": "Front Yard",
            "north": "Living Room"
          },
          "locked_exits": {
            "north": {
              "item": "Brass Key",
              "message": "The front door is locked."
            }
          },
          "items": []
        },
        "Living Room": {
          "art": "\n       .------.                 ___\n      ( ~~~~~~ )               | ^ |\n       '------'                |^^^|\n          .------.             |___|\n         ( ~~~~~~ )        ===========\n          '------'        [___________]\n   .  .  .  .  .  .  .  .  .  .  .  .  .\n",
          "description": "Dust hangs in the still air.\nFurniture sleeps beneath white sheets.",
          "exits": {
            "south": "Porch",
            "east": "Kitchen",
            "north": "Hallway"
          },
          "items": []
        },
        "Kitchen": {
          "art": "\n    ____________\n   |            |\n   |    ----    |\n   |   | O  |   |\n   |___|____|___|\n       |    |\n       '----'\n",
          "description": "Everything looks untouched.\nA flashlight rests on the table.",
          "exits": {
            "west": "Living Room"
          },
          "items": [
            "Flashlight"
          ]
        },
        "Hallway": {
          "art": "\n    []   |    []   |    []   |    []\n    |    |    |    |    |    |    |\n    |    |    |    |    |    |    |\n   -+----+----+----+----+----+----+-\n    ================================\n",
          "description": "The hallway stretches farther than it should.\nSeveral doors disappear into darkness.",
          "exits": {
            "south": "Living Room",
            "west": "Bathroom",
            "east": "Bedroom"
          },
          "items": []
        },
        "Bathroom": {
          "art": "\n     .------------------.\n    /   X          X     \\\n   |      \\  /\\  /        |\n   |       \\/  \\/          |\n   |    ______________     |\n   |   [  o    o    o ]    |\n   |   |______________|    |\n   |    ________________   |\n   |   |                |  |\n   |   |________________|  |\n    \\______________________/\n    .   .   .   .   .   .   .\n",
          "description": "The mirror has long since cracked.\nThe sink's drain is rusted shut, jammed on something.",
          "exits": {
            "east": "Hallway"
          },
          "items": []
        },
        "Bedroom": {
          "art": "\n     ____________\n    |  ________  |\n    | |________| |\n    |____________|\n     ; ; ; ; ; ; ;\n     ` ` ` ` ` ` `\n",
          "description": "A neatly made bed sits untouched.\nA faded rug covers most of the floor.\nBeside it, a nightstand sits with its drawer hanging half open.",
          "exits": {
            "west": "Hallway"
          },
          "items": []
        },
        "Crawlspace": {
          "art": "\n   ////////////////\n  //              //\n //    [__]       //\n//_________________//\n",
          "description": "A narrow crawlspace disappears beneath the house.\nWithout a light you can't see more than a few feet.",
          "exits": {
            "up": "Bedroom"
          },
          "items": [
            "Wooden Box"
          ],
          "requires": "Flashlight",
          "pull": {
            "lever": {
              "message": "Stone grinds against stone.\nA hidden tunnel slowly opens.",
              "unlock_exit": "east",
              "destination": "Escape"
            }
          }
        },
        "Escape": {
          "art": "\n              .\n           .     .\n      .-'''''''''-.\n     (             )\n      '-...........-'\n           '     '\n              '\n",
          "description": "Cold morning air pours through the opening.\nFreedom waits only a few steps away.",
          "exits": {},
          "items": []
        }
      },
      "uses": {
        "Brass Key": {
          "Porch": {
            "unlock": "north",
            "flag": "porch_unlocked",
            "already_message": "The door's already unlocked.",
            "message": "The old lock clicks open."
          }
        },
        "Flashlight": {
          "Crawlspace": {
            "message": "The flashlight cuts through the darkness."
          }
        },
        "Screwdriver": {
          "Bathroom": {
            "flag": "sink_pried_open",
            "already_message": "The drain is already pried open. There's nothing else in there.",
            "give_item": "Small Key",
            "message": "You wedge the screwdriver under the drain cover and pry.\n\nIt pops loose.\n\nA small key clatters into the sink basin."
          }
        }
      },
      "searches": {
        "Bedroom": {
          "nightstand": {
            "flag": "nightstand_searched",
            "repeat_message": "The drawer is already empty.",
            "give_item": "Screwdriver",
            "message": "You pull the drawer the rest of the way open.\n\nInside, a screwdriver."
          }
        }
      },
      "default_hint": "Look around. Something in this house usually wants to be searched, used, or picked up.",
      "hints": {
        "Front Yard": "The front door won't budge without a key. Something in the backyard might help.",
        "Backyard": [
          {
            "unless_item": "Brass Key",
            "text": "That glint in the grass is worth taking a closer look at."
          },
          {
            "text": "You've already found what's out here."
          }
        ],
        "Porch": [
          {
            "unless_item": "Brass Key",
            "text": "You'll need to find something to unlock this door first."
          },
          {
            "unless_flag": "porch_unlocked",
            "text": "Try using what you're carrying on the door."
          },
          {
            "text": "The door's already open — head on through."
          }
        ],
        "Living Room": "There's a kitchen and a hallway branching off from here — worth checking both.",
        "Kitchen": [
          {
            "unless_item": "Flashlight",
            "text": "That flashlight on the table might matter somewhere dark."
          },
          {
            "text": "You've already got what this room has to offer."
          }
        ],
        "Hallway": "More than one door leads off this hallway. Try them all.",
        "Bathroom": [
          {
            "unless_flag": "sink_pried_open",
            "text": "That drain looks jammed shut. You'd need some kind of tool to pry it open."
          },
          {
            "unless_item": "Small Key",
            "text": "Something fell loose when the drain popped — worth picking up."
          },
          {
            "text": "There's nothing left for you here."
          }
        ],
        "Bedroom": [
          {
            "unless_flag": "nightstand_searched",
            "text": "That nightstand drawer is hanging open — might be worth a look."
          },
          {
            "unless_flag": "crawlspace_found",
            "text": "That rug on the floor looks like it's covering something."
          },
          {
            "text": "Whatever's below the rug is waiting for you."
          }
        ],
        "Crawlspace": [
          {
            "unless_flag": "box_opened",
            "text": "That wooden box looks locked. You might have picked up something that fits."
          },
          {
            "unless_flag": "lever_pulled",
            "text": "There's a lever in here now — might be worth pulling."
          },
          {
            "text": "The way out is open now. Head east."
          }
        ]
      },
      "menu_key": "1"
    },
    {
      "title": "The Lighthouse",
      "start_room": "Shore",
      "ambient_messages": [
        "Wind howls against the tower.",
        "Rain taps steadily on glass somewhere above you.",
        "The structure creaks under the storm's weight.",
        "You feel very small out here.",
        "Somewhere below, waves crash against the rocks.",
        "The silence between gusts feels heavier than the storm itself.",
        "You wonder how long he was really up here alone."
      ],
      "look_easter_egg": "You keep watching the storm.\n\nIt doesn't watch back.\n\nThat's almost worse.",
      "lightable_room": "Lantern Room",
      "light_ending": {
        "requires_item": "Brass Control Knob",
        "success_message": "The Brass Control Knob fits perfectly.\n\nThe lantern flares to life.",
        "success_ending": "good",
        "missing_item_message": "The lantern has no way to regulate the flame.",
        "fail_message": "The lantern erupts.\n\nGlass explodes outward.\n\nFire races through the room.\n\nYou're thrown backward.\n\nThe rotten railing gives way beneath you.\n\n...\n\nDarkness.",
        "fail_ending": "bad"
      },
      "endings": {
        "good": "========================================\n\nA huge beam sweeps out across the black water.\n\nMinutes pass.\n\n...\n\nFar offshore, a distant ship changes course.\n\nThe storm slowly begins to clear.\n\n...\n\nYou are not alone anymore.\n\nGOOD ENDING\n\nBuilt with TIMMYTEXT\n\nCreated by Taylor DeLong\n",
        "bad": "========================================\n\nBAD ENDING\n\nBuilt with TIMMYTEXT\n\nCreated by Taylor DeLong\n"
      },
      "walkthrough_text": "========================================\nTHE LIGHTHOUSE\nOFFICIAL WALKTHROUGH\n========================================\n\n1. Go NORTH.\n\n2. Go UP into the Supply Room.\n\n3. Take Flashlight.\n\n4. Go UP into the Boiler Room.\n\n5. Take Iron Key.\n\n6. USE IRON KEY.\n\n7. Go UP into the Observation Room.\n\n8. Go UP into the Sleeping Quarters.\n\n9. Take Keeper Journal. (optional)\n\n10. READ KEEPER JOURNAL. (optional)\n\n11. Go UP into Maintenance.\n\n12. Go UP into the Counterweight Room.\n(requires the Flashlight)\n\n13. Go UP into the Upper Stairwell.\n\n14. Take Screwdriver from Maintenance.\n\n15. USE SCREWDRIVER in the Counterweight Room.\nThe counterweight drops a key to the Entrance below.\n\n16. Go DOWN to the Entrance and SEARCH FLOOR.\n\n17. Take Lantern Key.\n\n18. Return to the Upper Stairwell and USE LANTERN KEY.\n\n19. Go UP into the Lantern Room.\nThe door shuts behind you. There is no going back down.\n\n20. SEARCH SKELETON.\n\n21. Take Brass Control Knob.\n\n22. LIGHT LANTERN.\n\n========================================\n\nGOOD ENDING\n\n========================================\n\nBAD ENDING\n\nSkip step 15 and LIGHT LANTERN without the\nBrass Control Knob, then answer YES when asked\nif you're sure.\n\n========================================\n\nSecrets\n\nsearch radio   (Entrance)\n\nsearch coat    (Entrance)\n\nsearch bench   (Observation Room)\n\n========================================\n\nHidden Commands\n\ncredits\n\nwho brought me here\n\ndance\n\njump\n\nleave\n\nxyzzy\n\npray\n\nlook\n(7 times)\n\nwalkthrough\n\n========================================\n\nBuilt By\n\nTaylor DeLong\n\nUsing\n\nTIMMYTEXT Engine\n\nVersion 1.0.0\n\n©2026\n\n========================================\n",
      "rooms": {
        "Shore": {
          "art": "\n                    _\n                   | |\n                  /| |\\\n                 /_| |_\\\n                   | |\n        ~~~~~~~~~~[   ]~~~~~~~~~\n       ~~~~   /\\/\\     /\\/\\   ~~~\n      ~~~~~~~/    \\___/    \\~~~~~\n",
          "description": "The remains of your tiny sailboat are scattered across the rocks.\nRain crashes against the island.\nThe lighthouse looms overhead.\nIts light has gone dark.",
          "exits": {
            "north": "Entrance"
          },
          "items": []
        },
        "Entrance": {
          "art": "\n        ___________\n       |  .-----.  |\n       | |   O   | |\n       | |_______| |\n       |  |  |  |  |\n       |__|__|__|__|\n",
          "description": "The heavy wooden door creaks shut behind you.\nA spiral staircase disappears upward.\nAn old coat hangs by the door.\nA dead radio sits on a shelf, hissing with static.",
          "exits": {
            "south": "Shore",
            "up": "Supply Room"
          },
          "items": []
        },
        "Supply Room": {
          "art": "\n    ___________________\n   |[][][][]|[][][][][]|\n   |[][][][]|[][][][][]|\n   |________|__________|\n       /\n      o==\\\n",
          "description": "Dusty shelves line the walls.\nA flashlight rests beside an empty lantern fuel can.",
          "exits": {
            "down": "Entrance",
            "up": "Boiler Room"
          },
          "items": [
            "Flashlight"
          ]
        },
        "Boiler Room": {
          "art": "\n      ___    ___\n     (   )--(   )\n      ~~~~~~~~~~\n     .----------.\n     |  #    #  |\n     |__________|\n      |========|\n",
          "description": "Steam hisses through rusted pipes.\nA rusted Iron Key hangs from a hook beside a massive iron\ndoor blocking the stairs above.",
          "exits": {
            "down": "Supply Room",
            "up": "Observation Room"
          },
          "locked_exits": {
            "up": {
              "message": "The iron door is locked tight."
            }
          },
          "items": [
            "Iron Key"
          ]
        },
        "Observation Room": {
          "art": "\n    .--------------.\n   /| ' . ' . ' . '|\\\n  / |----------------|\n  | | ' . ' . ' . '|  |\n  |_|________________|_|\n        [_______]\n",
          "description": "Rain pounds against tall windows.\nYou can barely make out your wrecked boat below.\nAn old wooden bench sits beneath the glass.",
          "exits": {
            "down": "Boiler Room",
            "up": "Sleeping Quarters"
          },
          "items": []
        },
        "Sleeping Quarters": {
          "art": "\n     ______________\n    /  ___________ \\\n   |  |___________| |\n   |__________________|\n    []  []      /---/\n                |___|\n",
          "description": "A tiny bed sits neatly made.\nA journal rests on a small desk.\nThe stairs continue upward.",
          "exits": {
            "down": "Observation Room",
            "up": "Maintenance"
          },
          "items": [
            "Keeper Journal"
          ]
        },
        "Maintenance": {
          "art": "\n      T    T    T\n      |    |    |\n   .--+----+----+--.\n   |  o        o   |\n   |________________|\n      \\  \\  \\\n",
          "description": "Rusted tools hang from the walls.\nThe lighthouse groans with every gust of wind.",
          "exits": {
            "down": "Sleeping Quarters",
            "up": "Counterweight Room"
          },
          "items": [
            "Screwdriver"
          ]
        },
        "Counterweight Room": {
          "art": "\n     o        o\n     |        |\n     |        |\n    [#]      [#]\n     |        |\n   .-+--------+-.\n   |____________|\n",
          "description": "Massive chains disappear into darkness overhead.\nA giant counterweight hangs silently beside the stairs.\nA thick rope is bolted around its release mechanism.",
          "exits": {
            "down": "Maintenance",
            "up": "Upper Stairwell"
          },
          "requires": "Flashlight",
          "items": []
        },
        "Upper Stairwell": {
          "art": "\n         .----.\n        _|    |_\n       |__|  |__|\n      |__|    |__|\n     |__|      |__|\n    |__|        |__|\n",
          "description": "The staircase narrows.\nA heavy iron door waits at the very top.\nA small keyhole is set beneath its rusted handle.",
          "exits": {
            "down": "Counterweight Room",
            "up": "Lantern Room"
          },
          "locked_exits": {
            "up": {
              "message": "The upper iron door is locked. Its keyhole is small and clean, as if someone expected you to return."
            }
          },
          "items": []
        },
        "Lantern Room": {
          "art": "\n          .-'-.\n        .'     '.\n       /  .-----.  \\\n      |  |   *   |  |\n       \\  '-----'  /\n        '.       .'\n      .---'-------'---.\n      |     :   :     |\n      |____/ \\_/ \\_____|\n",
          "description": "The enormous lantern sits dark.\nA skeleton slumps against the mechanism, one hand still\nresting on it.",
          "exits": {
            "down": "Upper Stairwell"
          },
          "on_first_enter": {
            "flag": "lantern_door_slammed",
            "message": "The moment your weight settles on the floorboards...\n\nThe iron door slams shut behind you.\n\nYou throw your shoulder against it.\n\nIt doesn't budge.\n\nOld hinges. Warped wood. Just age, and rust, and time.\n\nWhatever happens now, it happens up here.",
            "remove_exit": "down"
          },
          "items": []
        }
      },
      "uses": {
        "Iron Key": {
          "Boiler Room": {
            "unlock": "up",
            "flag": "boiler_door_unlocked",
            "already_message": "The door's already unlocked.",
            "message": "The iron door unlocks with a loud metallic click."
          }
        },
        "Screwdriver": {
          "Counterweight Room": {
            "flag": "counterweight_released",
            "already_message": "The release bolt is already gone. The empty chain sways overhead.",
            "message": "You work the screwdriver against the rusted release bolt.\n\nFor a moment, nothing happens.\n\nThen the rope snaps free.\n\nThe counterweight drops somewhere deep inside the tower.\n\nA second later, far below, you hear a sharp metallic clink from the Entrance."
          }
        },
        "Lantern Key": {
          "Upper Stairwell": {
            "unlock": "up",
            "flag": "upper_door_unlocked",
            "already_message": "The upper iron door is already unlocked.",
            "message": "The little key turns. The upper iron door groans open."
          }
        }
      },
      "readables": {
        "Keeper Journal": "The handwriting grows shakier with each entry.\n\n\"Supply boat never came this month.\"\n\n\"Radio's dead. Been dead a week.\"\n\n\"Storm's getting worse, not better.\"\n\n\"I don't think I'm getting off this rock.\"\n\nThe last entry trails off mid-sentence."
      },
      "searches": {
        "Lantern Room": {
          "skeleton": {
            "flag": "skeleton_searched",
            "repeat_message": "There's nothing more to find.",
            "give_item": "Brass Control Knob",
            "message": "You kneel beside the skeleton.\n\nA tarnished Brass Control Knob rests in its palm.\n\nA folded note is tucked into its coat.\n\n========================================\n\nFINAL NOTE\n\nThe door shut behind me.\n\nI tried for days.\n\nI couldn't break it.\n\nI thought about jumping.\n\nI couldn't do it.\n\nIf someone finds this...\n\nPlease keep the light burning.\n\n========================================"
          }
        },
        "Entrance": {
          "floor": {
            "requires_flag": "counterweight_released",
            "flag": "lantern_key_found",
            "repeat_message": "Only rainwater and grit remain on the floor.",
            "give_item": "Lantern Key",
            "message": "Near the foot of the stairs, half-hidden in a puddle,\nyou find a small Lantern Key.\n\nIt must have fallen through the tower when the counterweight dropped."
          },
          "radio": {
            "flag": "radio_checked",
            "repeat_message": "Still just static.",
            "message": "You turn the dial.\n\nStatic hisses through a busted speaker.\n\nNobody is coming."
          },
          "coat": {
            "flag": "coat_checked",
            "repeat_message": "There's nothing else in the pockets.",
            "message": "You check the pockets of the old coat.\n\nA stopped pocket watch. Frozen at 3:47.\n\nYou put it back."
          },
          "coats": {
            "flag": "coat_checked",
            "repeat_message": "There's nothing else in the pockets.",
            "message": "You check the pockets of the old coat.\n\nA stopped pocket watch. Frozen at 3:47.\n\nYou put it back."
          }
        },
        "Observation Room": {
          "bench": {
            "flag": "bench_checked",
            "repeat_message": "Nothing else down there.",
            "message": "Carved into the underside of the bench:\n\n\"T.D. was here.\"\n\nYou have no idea who that is."
          }
        }
      },
      "default_hint": "Keep climbing. Everything you need is somewhere on the way up.",
      "hints": {
        "Shore": "The lighthouse is the only way forward from here.",
        "Entrance": "There's nowhere to go from here but up.",
        "Supply Room": [
          {
            "unless_item": "Flashlight",
            "text": "That flashlight might matter somewhere darker ahead."
          },
          {
            "text": "Nothing left for you here — keep going up."
          }
        ],
        "Boiler Room": [
          {
            "unless_item": "Iron Key",
            "text": "There's a key hanging right there. Might be worth grabbing before you deal with that door."
          },
          {
            "unless_flag": "boiler_door_unlocked",
            "text": "Try using what you're carrying on that door."
          },
          {
            "text": "Nothing left for you here — keep going up."
          }
        ],
        "Observation Room": "Nothing more to do here but continue up.",
        "Sleeping Quarters": [
          {
            "unless_item": "Keeper Journal",
            "text": "That journal on the desk might be worth taking — and reading."
          },
          {
            "text": "Keep climbing."
          }
        ],
        "Maintenance": "Just a passage through. Keep going up.",
        "Counterweight Room": [
          {
            "unless_item": "Flashlight",
            "text": "It's too dark to go any further without a light."
          },
          {
            "unless_item": "Screwdriver",
            "text": "The release bolt holding that rope looks like it needs a screwdriver. There were tools one floor down."
          },
          {
            "unless_flag": "counterweight_released",
            "text": "Try using the screwdriver on the release bolt."
          },
          {
            "text": "You heard something fall to the Entrance. Go back down and search the floor."
          }
        ],
        "Upper Stairwell": [
          {
            "unless_item": "Lantern Key",
            "text": "The upper door needs a small key. The counterweight may have dropped one below."
          },
          {
            "unless_flag": "upper_door_unlocked",
            "text": "Try using the Lantern Key on the upper door."
          },
          {
            "text": "Almost to the top."
          }
        ],
        "Lantern Room": [
          {
            "unless_flag": "skeleton_searched",
            "text": "That skeleton might be holding onto something useful."
          },
          {
            "unless_item": "Brass Control Knob",
            "text": "You found something back there — did you actually pick it up?"
          },
          {
            "text": "The lantern needs that knob to work. Try lighting it."
          }
        ]
      },
      "menu_key": "2"
    },
    {
      "title": "The Mold House",
      "start_room": "Upstairs Bedroom",
      "lightable_room": null,
      "ambient_messages": [
        "The smell of mold is stronger than it was a minute ago.",
        "Something downstairs shifts its weight.",
        "Water drips somewhere behind the walls.",
        "Your footsteps sound too loud.",
        "The walls are soft and dark where the damp has spread."
      ],
      "look_easter_egg": "You keep staring at nothing in particular.\n\nDownstairs, it goes quiet, like it's staring back.",
      "ending_room": "Outside",
      "endings": {
        "good": "========================================\n\nThe door swings open.\n\nCold, clean air hits you first.\n\nThe house is silent behind you.\n\nYou don't look back.\n\nGOOD ENDING\n\nBuilt with TIMMYTEXT\n\nCreated by Taylor DeLong\n",
        "bad": "========================================\n\nThe radio crackles alive.\n\nA voice beneath the static says your name.\n\nThe footsteps on the stairs stop.\n\nThey are already behind you.\n\n...\n\nCAUGHT\n\nBuilt with TIMMYTEXT\n\nCreated by Taylor DeLong\n",
        "caught": "========================================\n\nYou don't even get the door open.\n\nYou never hear it move.\n\nYou just stop being able to.\n\n...\n\nCAUGHT\n\nBuilt with TIMMYTEXT\n\nCreated by Taylor DeLong\n",
        "dream": "========================================\n\nYou lie back down.\n\nThe smell of mold is gone.\n\nMorning light reaches through the curtains.\n\nFor one second, you hear something downstairs breathing.\n\nThen you wake up.\n\nSECRET ENDING 1 — BAD DREAM\n\nBuilt with TIMMYTEXT\n\nCreated by Taylor DeLong\n"
      },
      "walkthrough_text": "========================================\nTHE MOLD HOUSE\nOFFICIAL WALKTHROUGH\n========================================\n\n1. SEARCH BED and take Key Shaped Stick. (optional trap item)\n\n2. Take Tapestry, then SEARCH CLOSET.\nTake Dream Note and READ DREAM NOTE. (secret route)\n\n3. Go DOWN twice to the Living Room.\n\n4. Go SOUTH to the Kitchen. SEARCH DRAWER and take Radio Knob.\n\n5. Return NORTH, then go WEST to the Bathroom. SEARCH CABINET.\nTake Small Magnet.\n\n6. Go NORTH to the Laundry Room. SEARCH HAMPER and take String.\n\n7. Return SOUTH to the Bathroom.\n\n8. USE STRING ON MAGNET.\n\n9. USE MAGNET ON TOILET. Take House Key.\n\n10. Return EAST to the Living Room. USE HOUSE KEY.\n\n11. USE RADIO KNOB ON RADIO.\n\n12. Go NORTH.\n\n========================================\n\nGOOD ENDING\n\n========================================\n\nSECRET ENDING 1\n\nTake the Tapestry, SEARCH CLOSET, take and READ DREAM NOTE,\nthen USE BED in the Upstairs Bedroom.\n\n========================================\n\nTRAPS\n\nUSE KEY SHAPED STICK in the Living Room: caught.\n\nUSE RADIO KNOB ON RADIO before unlocking the front door, then\nanswer YES: caught. Once the door is unlocked, the radio is\nsafe — and required for escape.\n\nNever go EAST from the Living Room.\n\n========================================\n\nSecrets\n\nsearch closet   (after taking the tapestry)\n\nlisten          (Living Room)\n\n========================================\n\nHidden Commands\n\ncredits\n\nwho brought me here\n\ndance\n\njump\n\nleave\n\nxyzzy\n\npray\n\nlook\n(7 times)\n\nwalkthrough\n\n========================================\n\nBuilt By\n\nTaylor DeLong\n\nUsing\n\nTIMMYTEXT Engine\n\nVersion 1.0.0\n\n©2026\n========================================\n",
      "rooms": {
        "Upstairs Bedroom": {
          "art": "\n      .   ,,,   .\n    ,,,  ,;;;,  ,,,\n   ;;;;;;;;;;;;;;;;\n      ___..|..___\n     /______|______\\\n     |_____________|\n",
          "description": "You wake on a bare mattress. The room smells of mold, thick enough to taste.\nYou don't remember getting here. A heavy tapestry sags across one wall.\n\nSomething moves downstairs.",
          "exits": {
            "down": "Upstairs Landing"
          },
          "items": [
            "Tapestry"
          ]
        },
        "Upstairs Landing": {
          "art": "\n    ______________\n   |##############|\n   |####|~~~~~|###|\n   |____|~~~~~|###|\n   |________######|\n          .  .  .\n",
          "description": "A short landing at the top of the stairs. The steps down fade into the dark.",
          "exits": {
            "up": "Upstairs Bedroom",
            "down": "Living Room"
          },
          "items": []
        },
        "Living Room": {
          "art": "\n     ||          .   .   .          ||\n     ||        .---+-+-+---.        ||\n     ||        |    ___    |        ||\n     ||        |   |___|   |        ||\n     ||        '-----------'        ||\n   ==||=============================||==\n",
          "description": "Water stains bloom across the ceiling. A locked front door waits north.\nA dead radio sits on a side table. The kitchen is south; a bathroom is west of the stairs.\nAn open doorway to the east smells much worse.",
          "exits": {
            "up": "Upstairs Landing",
            "south": "Kitchen",
            "west": "Bathroom",
            "east": "Downstairs Bedroom",
            "north": "Outside"
          },
          "locked_exits": {
            "north": {
              "message": "The front door is locked."
            }
          },
          "items": []
        },
        "Kitchen": {
          "art": "\n     ___________________\n    |_[]_|_[]_|_[]_|_[]_|\n    |                   |\n    |___________________|\n",
          "description": "Mold climbs the cabinets in dark patches. A single drawer hangs half open.",
          "exits": {
            "north": "Living Room"
          },
          "items": []
        },
        "Bathroom": {
          "art": "\n       .------------------.\n      |    .--------.      |\n      |    |  X   X |      |\n      |    '--------'      |\n      |     __________     |\n      |    [   o    o]     |\n      |    |__________|    |\n      |              ___   |\n      |             ( ~~ )  |\n      |             |____|  |\n      |______________________|\n",
          "description": "A cracked mirror hangs above a stained sink, a medicine cabinet built into the wall beside it.\nThe toilet bowl is full of black water.\nA door north leads to a narrow laundry room.",
          "exits": {
            "east": "Living Room",
            "north": "Laundry Room"
          },
          "items": []
        },
        "Laundry Room": {
          "art": "\n       .------------.\n       |  [____]    |\n       |  /____\\    |\n       |  HAMPER    |\n       '------------'\n",
          "description": "A washer sits unplugged beside a stained hamper. The air is warm here, though nothing is running.",
          "exits": {
            "south": "Bathroom"
          },
          "items": []
        },
        "Downstairs Bedroom": {
          "art": "\n   ________________\n  |                |\n  |                |\n  |          .--.  |\n  |         ( ()  ) |\n  |________________|\n",
          "description": "The smell is overwhelming. Something is curled in the far corner.\n\nIt isn't a person.",
          "exits": {
            "west": "Living Room"
          },
          "on_first_enter": {
            "flag": "caught",
            "message": "It uncurls before you've even finished the doorway.\n\nIt was never downstairs.\n\nIt was always right here.",
            "ending": "caught"
          },
          "items": []
        },
        "Outside": {
          "art": "\n              *\n        *           *\n                          *\n      *      .   .\n          .-'''''-.\n         (         )\n      *   '-.....-'   *\n",
          "requires_flag": "radio_on",
          "requires_flag_message": "You reach for the unlocked door, then stop.\n\nOpening it in silence will let it hear you. Turn on the radio first.",
          "description": "Cold air. Open sky. You made it out.",
          "exits": {},
          "items": []
        }
      },
      "uses": {
        "Key Shaped Stick": {
          "Living Room": {
            "message": "You jam the carved stick into the lock.\n\nIt splinters immediately.\n\nSomething is on the stairs behind you.",
            "ending": "bad"
          }
        },
        "Radio Knob": {
          "Living Room": {
            "requires_target": "radio",
            "confirm": true,
            "confirm_if_missing_flag": "front_door_unlocked",
            "confirm_message": "You have no escape. Really use the radio?\n\nAre you sure?",
            "message": "You fit the knob onto the radio and turn it.\n\nStatic swells into a voice beneath the music.\n\nIt says your name.",
            "ending": "bad",
            "safe_flag": "radio_on",
            "safe_message": "You fit the knob onto the radio and turn it.\n\nStatic, then a burst of tinny music fills the room.\n\nIt should cover the sound of the front door opening."
          }
        },
        "String": {
          "Bathroom": {
            "requires_target": "magnet",
            "requires_item": "Small Magnet",
            "flag": "magnet_tied",
            "already_message": "The string is already tied around the magnet.",
            "missing_item_message": "You need a magnet first.",
            "wrong_target_message": "The string needs to be tied to the magnet.",
            "message": "You knot the String around the Small Magnet. It should reach into the toilet drain."
          }
        },
        "Small Magnet": {
          "Bathroom": {
            "requires_target": "toilet",
            "requires_flag": "magnet_tied",
            "flag": "key_fished",
            "already_message": "The drain is empty now.",
            "give_item": "House Key",
            "wrong_target_message": "The magnet needs to go into the toilet drain.",
            "message": "You lower the magnet into the black water.\n\nSomething clicks against it.\n\nSlowly, you pull up a House Key."
          }
        },
        "House Key": {
          "Living Room": {
            "unlock": "north",
            "flag": "front_door_unlocked",
            "already_message": "The front door is already unlocked.",
            "message": "The key turns. The front door clicks unlocked."
          }
        }
      },
      "room_uses": {
        "Upstairs Bedroom": {
          "bed": {
            "requires_flag": "closet_note_found",
            "missing_message": "You are too afraid to lie back down.",
            "message": "You fold the note against your chest and climb back onto the mattress.",
            "ending": "dream"
          }
        }
      },
      "on_take": {
        "Tapestry": {
          "Upstairs Bedroom": {
            "flag": "closet_revealed",
            "message": "Behind it, a closet door hangs slightly ajar."
          }
        },
        "Dream Note": {
          "Upstairs Bedroom": {
            "flag": "closet_note_found",
            "message": "The paper feels warm in your hand."
          }
        }
      },
      "readables": {
        "Dream Note": "IT'S JUST A BAD DREAM.\n\nGO BACK TO BED."
      },
      "searches": {
        "Upstairs Bedroom": {
          "bed": {
            "flag": "bed_searched",
            "repeat_message": "There is nothing else under the mattress.",
            "give_item": "Key Shaped Stick",
            "message": "Under the mattress is a small carved stick. It looks almost like a key, if you don't look too closely."
          },
          "closet": {
            "requires_flag": "closet_revealed",
            "flag": "closet_searched",
            "repeat_message": "The closet is empty now.",
            "give_item": "Dream Note",
            "message": "A mold-eaten jacket hangs inside. In its pocket is a folded Dream Note."
          }
        },
        "Kitchen": {
          "drawer": {
            "flag": "drawer_searched",
            "repeat_message": "The drawer is empty now.",
            "give_item": "Radio Knob",
            "message": "Under rusted utensils and a dead battery, you find a Radio Knob."
          }
        },
        "Bathroom": {
          "cabinet": {
            "flag": "cabinet_searched",
            "repeat_message": "The cabinet is empty now.",
            "give_item": "Small Magnet",
            "message": "Behind cracked medicine bottles is a Small Magnet."
          }
        },
        "Laundry Room": {
          "hamper": {
            "flag": "hamper_searched",
            "repeat_message": "Only damp clothes remain in the hamper.",
            "give_item": "String",
            "message": "At the bottom of the hamper is a length of clean String."
          }
        }
      },
      "listens": {
        "Living Room": "You hold still and listen.\n\nSomething breathes, somewhere close.\n\nIt doesn't sound like it's breathing right."
      },
      "default_hint": "Something in this house is always worth searching. Try it.",
      "hints": {
        "Upstairs Bedroom": [
          {
            "unless_flag": "closet_revealed",
            "text": "The tapestry looks like it is hiding something."
          },
          {
            "unless_flag": "bed_searched",
            "text": "Search the bed before you leave."
          },
          {
            "unless_flag": "closet_searched",
            "text": "The closet behind the tapestry is worth searching."
          },
          {
            "text": "You've found what this room has. Time to go down."
          }
        ],
        "Living Room": [
          {
            "unless_item": "Radio Knob",
            "text": "The kitchen may have something for the broken radio. Do not use it before the front door is unlocked."
          },
          {
            "unless_item": "House Key",
            "text": "The bathroom and laundry room may hide a way to open the front door."
          },
          {
            "unless_flag": "front_door_unlocked",
            "text": "Try using the House Key in this room."
          },
          {
            "unless_flag": "radio_on",
            "text": "The door is unlocked, but it will make noise. Now the radio is safe to use — try USE RADIO KNOB ON RADIO."
          },
          {
            "text": "The radio is covering your escape. Go north."
          }
        ],
        "Kitchen": [
          {
            "unless_flag": "drawer_searched",
            "text": "That drawer looks worth searching."
          },
          {
            "text": "The Radio Knob is a choice, not a solution."
          }
        ],
        "Bathroom": [
          {
            "unless_item": "Small Magnet",
            "text": "Search the cabinet."
          },
          {
            "unless_flag": "magnet_tied",
            "text": "You need something from the laundry room to make the magnet useful."
          },
          {
            "unless_flag": "key_fished",
            "text": "Use String on Magnet, then use Magnet on Toilet."
          },
          {
            "text": "You have the key. Return east."
          }
        ],
        "Laundry Room": [
          {
            "unless_item": "String",
            "text": "Search the hamper."
          },
          {
            "text": "Return to the bathroom and tie the String to the magnet."
          }
        ]
      },
      "menu_key": "3"
    },
    {
      "title": "The Last Stop",
      "start_room": "Platform",
      "ambient_messages": [
        "A distant announcement crackles, but you cannot make out the words.",
        "The station clock ticks once, then seems to forget the next second.",
        "Somewhere below the platform, something moves along the rails.",
        "The fluorescent lights buzz with the sound of trapped insects.",
        "You hear a train arriving, though the tracks remain empty.",
        "The air smells like rain, hot metal, and old paper."
      ],
      "look_easter_egg": "You wait for the clock to change.\n\nIt still reads 3:17.\n\nAfter a while, you stop being sure it ever said anything else.",
      "ending_room": "The Last Train",
      "endings": {
        "good": "========================================\n\nThe doors close behind you.\n\nThe train begins to move without a sound.\n\nOutside the window, the empty station slips away into the dark.\n\nFor the first time tonight, the clock changes.\n\n3:18.\n\nYou do not look back.\n\nGOOD ENDING\n\nBuilt with TIMMYTEXT\n\nCreated by Taylor DeLong\n",
        "bad": "========================================\n\nYou step down onto the tracks.\n\nThe tunnel is darker than it should be.\n\nThen the rails begin to hum.\n\nA headlight appears in the distance.\n\nIt is coming from both directions.\n\n...\n\nMISSED CONNECTION\n\nBuilt with TIMMYTEXT\n\nCreated by Taylor DeLong\n"
      },
      "walkthrough_text": "========================================\nTHE LAST STOP\nOFFICIAL WALKTHROUGH\n========================================\n\n1. Go NORTH into the Waiting Room.\n\n2. Go NORTH into the Ticket Hall.\n\n3. SEARCH WINDOW.\n\n4. Take Brass Key.\n\n5. Go SOUTH to the Waiting Room.\n\n6. Go EAST into the Locker Hall.\n\n7. USE BRASS KEY.\n\n8. Take Platform Ticket.\n\n9. Go WEST, then NORTH to the Ticket Hall.\n\n10. USE PLATFORM TICKET.\n\n11. Go NORTH through the gate.\n\n12. Go NORTH onto The Last Train.\n\n========================================\n\nGOOD ENDING\n\n========================================\n\nBAD ENDING\n\nFrom the starting Platform, go SOUTH onto the tracks.\n\n========================================\n\nSecrets\n\nread timetable   (Waiting Room)\n\nlisten           (Platform, Gate Platform)\n\n========================================\n\nHidden Commands\n\ncredits\n\nwho brought me here\n\ndance\n\njump\n\nleave\n\nxyzzy\n\npray\n\nlook\n(7 times)\n\nwalkthrough\n\n========================================\n\nBuilt By\n\nTaylor DeLong\n\nUsing\n\nTIMMYTEXT Engine\n\nVersion 1.0.0\n\n©2026\n\n========================================\n",
      "rooms": {
        "Platform": {
          "art": "\n     ______________________________\n    |   ___      ___      ___       |\n    |  |___|    |___|    |___|      |\n    |_______________________________|\n    =================================\n       ||                       ||\n       ||                       ||\n",
          "description": "You stand alone on an underground platform.\nThe sign above you reads: LAST STOP.\n\nA station clock is frozen at 3:17.\nThe waiting room is north. The tracks lie south.",
          "exits": {
            "north": "Waiting Room",
            "south": "Tracks"
          },
          "items": []
        },
        "Waiting Room": {
          "art": "\n     .-----------------------.\n     |  _   _   _   _   _   _ |\n     | |_| |_| |_| |_| |_| |_| |\n     |                         |\n     |      3 : 1 7            |\n     '-------------------------'\n",
          "description": "Rows of plastic seats face a blank wall.\nA yellowed timetable hangs beside a corridor of lockers.\nThe ticket hall is north.",
          "exits": {
            "south": "Platform",
            "north": "Ticket Hall",
            "east": "Locker Hall"
          },
          "items": [
            "Timetable"
          ]
        },
        "Ticket Hall": {
          "art": "\n      _________________________\n     |  TICKETS                |\n     |  .-------------------.  |\n     |  |   CLOSED          |  |\n     |  '-------------------'  |\n     |_________________________|\n",
          "description": "A ticket window sits behind smeared glass.\nA waist-high gate blocks the platform beyond it.\nA little brass bell rests on the counter, but nobody answers.",
          "exits": {
            "south": "Waiting Room",
            "north": "Gate Platform"
          },
          "locked_exits": {
            "north": {
              "message": "The gate is locked. A slot beside it reads: VALID TICKET ONLY."
            }
          },
          "items": []
        },
        "Locker Hall": {
          "art": "\n     |[]|[]|[]|[]|[]|[]|[]|[]|\n     |[]|[]|[]|[]|[]|[]|[]|[]|\n     |[]|[]|[]|[]|[]|[]|[]|[]|\n     |____317__________________|\n",
          "description": "Tall green lockers run along both walls.\nAll are dented shut except locker 317.\nIts brass keyhole catches the flickering light.",
          "exits": {
            "west": "Waiting Room"
          },
          "items": []
        },
        "Gate Platform": {
          "art": "\n             ___________________\n            |     TRACK ONE     |\n     =======|___________________|=======\n        ||                         ||\n        ||      [  ] [  ] [  ]     ||\n",
          "description": "A train waits at Track One with its doors open.\nNo driver sits behind the dark front window.\nA soft chime repeats from inside.",
          "exits": {
            "south": "Ticket Hall",
            "north": "The Last Train"
          },
          "items": []
        },
        "The Last Train": {
          "art": "\n        _________________________\n       |  _   _   _   _   _   _  |\n       | | | | | | | | | | | |  |\n       |_________________________|\n",
          "description": "The doors stand open. There is one empty seat by the window.",
          "exits": {},
          "items": []
        },
        "Tracks": {
          "art": "\n         ||                     ||\n    =======\\___________________/=======\n           \\                   /\n            \\_________________/\n",
          "description": "The rails vanish into a tunnel where no light reaches.",
          "exits": {
            "north": "Platform"
          },
          "on_first_enter": {
            "flag": "entered_tracks",
            "message": "The hum beneath your feet grows suddenly loud.",
            "ending": "bad"
          },
          "items": []
        }
      },
      "uses": {
        "Brass Key": {
          "Locker Hall": {
            "flag": "locker_opened",
            "already_message": "Locker 317 is already open.",
            "give_item": "Platform Ticket",
            "message": "The key turns with a reluctant click.\n\nLocker 317 swings open. Inside is a single Platform Ticket."
          }
        },
        "Platform Ticket": {
          "Ticket Hall": {
            "unlock": "north",
            "flag": "gate_opened",
            "already_message": "The gate is already open.",
            "message": "The ticket slips into the slot and disappears. The gate unlocks with a heavy clunk."
          }
        }
      },
      "searches": {
        "Ticket Hall": {
          "window": {
            "flag": "window_searched",
            "repeat_message": "Only dust and your own reflection remain behind the glass.",
            "give_item": "Brass Key",
            "message": "You reach through the half-open service window.\n\nYour hand finds a small Brass Key taped beneath the counter."
          },
          "counter": {
            "flag": "counter_searched",
            "repeat_message": "The counter is empty now.",
            "message": "The brass bell has no clapper. It could never have rung."
          }
        }
      },
      "readables": {
        "Timetable": "MOST RECENT DEPARTURES\n\n3:15 - OUT OF SERVICE\n3:16 - CANCELLED\n3:17 - TRACK ONE - LAST STOP\n\nIn the corner, someone has written: KEEP YOUR TICKET."
      },
      "listens": {
        "Platform": "Beyond the wall, a train brakes slowly. There is no tunnel on that side of the station.",
        "Gate Platform": "The chime stops. For one breath, you hear someone whisper: 'All aboard.'"
      },
      "default_hint": "The station has left you a route. Look for something that opens, then something that lets you board.",
      "hints": {
        "Platform": "The waiting room is the only safe-looking place to start. Don't go onto the tracks.",
        "Waiting Room": "The ticket hall is north. The lockers to the east may be important after you find a key.",
        "Ticket Hall": [
          {
            "unless_item": "Brass Key",
            "text": "Nobody is at the ticket window, but it might still be worth searching."
          },
          {
            "unless_item": "Platform Ticket",
            "text": "That key probably belongs to something in the locker hall."
          },
          {
            "unless_flag": "gate_opened",
            "text": "The gate wants a valid ticket. Try using the ticket here."
          },
          {
            "text": "The gate is open. The train is waiting to the north."
          }
        ],
        "Locker Hall": [
          {
            "unless_item": "Brass Key",
            "text": "Locker 317 has a brass keyhole. You need to find its key first."
          },
          {
            "unless_flag": "locker_opened",
            "text": "Try using the Brass Key here."
          },
          {
            "unless_item": "Platform Ticket",
            "text": "The open locker has something waiting inside."
          },
          {
            "text": "You've found everything this corridor has to offer."
          }
        ],
        "Gate Platform": "The doors are open. If you're ready, board the train to the north."
      },
      "menu_key": "4"
    },
    {
      "title": "The Barn",
      "start_room": "Barn Loft",
      "ambient_messages": [
        "An animal shifts outside, followed by the soft knock of a hoof.",
        "The wind presses against the old boards and makes them complain.",
        "A fly circles once near your ear, then disappears into the dark.",
        "The smell of hay cannot quite cover the smell of blood.",
        "Somewhere on the property, a screen door opens and closes."
      ],
      "look_easter_egg": "You stare at the blood until it stops looking red.\n\nThat feels worse somehow.",
      "ending_room": "County Road",
      "endings": {
        "good": "========================================\n\nThe gate opens onto the county road.\n\nBehind you, the farm is quiet again.\n\nA car appears around the bend, its headlights warm and ordinary.\n\nYou raise both hands.\n\nThis time, someone stops.\n\nGOOD ENDING\n\nBuilt with TIMMYTEXT\n\nCreated by Taylor DeLong\n",
        "bad": "========================================\n\nThe dog barks once.\n\nA light comes on in the farmhouse.\n\nThen another.\n\nYou understand, too late, that the animals were never the only things awake.\n\n...\n\nCAUGHT\n\nBuilt with TIMMYTEXT\n\nCreated by Taylor DeLong\n",
        "shed": "========================================\n\nThe shed door closes behind you.\n\nYou hear a lock turn from the outside.\n\nNo one speaks.\n\n...\n\nBAD ENDING\n\nBuilt with TIMMYTEXT\n\nCreated by Taylor DeLong\n"
      },
      "walkthrough_text": "========================================\nTHE BARN\nOFFICIAL WALKTHROUGH\n========================================\n\n1. Take Rusty Hook in the Barn Loft.\n\n2. Go DOWN to the Barn Floor, then EAST to the Barn Office.\n\n3. SEARCH DESK and take Shed Key.\n\n4. Go WEST, then SOUTH to the Farmyard.\n\n5. USE SHED KEY, then go EAST into the Tool Shed.\n\n6. Take Bolt Cutters. Return WEST, then NORTH to the Barn Floor.\n\n7. USE BOLT CUTTERS and take House Key.\n\n8. Go SOUTH to the Farmyard. USE HOUSE KEY, then go NORTH into the Farmhouse.\n\n9. Go NORTH to the Living Room, then EAST to the Kitchen.\n\n10. SEARCH CABINETS. Take Cellar Key and USE CELLAR KEY.\n\n11. Go DOWN to the Basement and SEARCH SHELVES. Take Crate Key.\n\n12. Return to the Barn Floor. USE CRATE KEY and take Severed Hand.\n\n13. Go SOUTH to the Farmyard, then EAST to the Dog Run.\n\n14. USE SEVERED HAND. Go EAST to the Old Well.\n\n15. SEARCH BUCKET. Take Gate Key.\n\n16. Return WEST to the Farmyard. USE GATE KEY, then go WEST.\n\n========================================\n\nGOOD ENDING\n\n========================================\n\nBAD ENDINGS\n\nGo NORTH from the Dog Run before distracting the dog.\n\nGo EAST into the Tool Shed before unlocking it (the door will not open),\nor go SOUTH from the Farmyard into the Slaughter Shed after opening it.\n\n========================================\n\nSecrets\n\nread ledger   (Barn Office)\n\nlisten        (Dog Run, Basement)\n\n========================================\n\nHidden Commands\n\ncredits\n\nwho brought me here\n\ndance\n\njump\n\nleave\n\nxyzzy\n\npray\n\nlook\n(7 times)\n\nwalkthrough\n\n========================================\n\nBuilt By\n\nTaylor DeLong\n\nUsing\n\nTIMMYTEXT Engine\n\nVersion 1.0.0\n\n©2026\n========================================\n",
      "rooms": {
        "Barn Loft": {
          "art": "\n       /\\________________/\\\n      /  \\   HAY  HAY   /  \\\n     /____\\____________/____\\\n          |  * * * *  |\n",
          "description": "You wake in a pile of hay surrounded by drying blood.\nYour head throbs. Animals stir somewhere outside.\nA ladder leads down into the dark barn.",
          "exits": {
            "down": "Barn Floor"
          },
          "items": [
            "Rusty Hook"
          ]
        },
        "Barn Floor": {
          "art": "\n     |\\                 /|\n     | \\_____[#]_______/ |\n     |  stalls     crate   |\n     |_____________________| \n",
          "description": "Empty stalls line the barn. A heavy locked crate rests beneath the loft.\nAn office is east; the farmyard is south. A chain holds the stall door shut.",
          "exits": {
            "up": "Barn Loft",
            "east": "Barn Office",
            "south": "Farmyard"
          },
          "items": []
        },
        "Barn Office": {
          "art": "\n      .------------.\n      |  LEDGERS   |\n      |  ________  |\n      | |______| | |\n      '------------'\n",
          "description": "A cramped office smells of dust and old coffee. A desk faces the barn through a dirty window.",
          "exits": {
            "west": "Barn Floor"
          },
          "items": [
            "Farm Ledger"
          ]
        },
        "Farmyard": {
          "art": "\n                [ FARMHOUSE ]\n                     ||\n      [ BARN ]==. . . . . .==[ SHED ]\n                |   GATE    |\n      #    #    #    #    #    #    #\n",
          "description": "Mud fills the farmyard. The farmhouse stands north, a tool shed east, and a locked gate west.\nA narrow path leads toward a dog run to the southeast. The barn doors are open behind you, up a short step.",
          "exits": {
            "north": "Farmhouse Foyer",
            "east": "Tool Shed",
            "south": "Dog Run",
            "west": "County Road",
            "up": "Barn Floor"
          },
          "locked_exits": {
            "north": {
              "message": "The farmhouse door is locked."
            },
            "east": {
              "message": "The tool shed is locked."
            },
            "west": {
              "message": "The farm gate is padlocked shut."
            }
          },
          "items": []
        },
        "Tool Shed": {
          "art": "\n       .----------.\n       | / / / /  |\n       |  TOOLS   |\n       |__________|\n",
          "description": "Every tool hangs in a perfect outline on the wall. One pair of Bolt Cutters is missing its outline.",
          "exits": {
            "west": "Farmyard"
          },
          "items": [
            "Bolt Cutters"
          ]
        },
        "Farmhouse Foyer": {
          "art": "\n       .------------.\n       |     __     |\n       |    |  |    |\n       |____|__|____|\n",
          "description": "The house is too clean. A hallway leads north to a living room. The front door is behind you.",
          "exits": {
            "south": "Farmyard",
            "north": "Living Room"
          },
          "items": []
        },
        "Living Room": {
          "art": "\n       .------------.\n       |  [____]    |\n       |   ____     |\n       |____________|\n",
          "description": "A television shows gray snow with no sound. A kitchen doorway waits to the east.",
          "exits": {
            "south": "Farmhouse Foyer",
            "east": "Kitchen"
          },
          "items": []
        },
        "Kitchen": {
          "art": "\n       __________________\n      |__|__|__|__|__|__|\n      |      SINK       |\n      |_________________|\n",
          "description": "The kitchen counters shine. A cellar door is set into the floor beside the cabinets.",
          "exits": {
            "west": "Living Room",
            "down": "Basement"
          },
          "locked_exits": {
            "down": {
              "message": "The cellar door is locked."
            }
          },
          "items": []
        },
        "Basement": {
          "art": "\n       |\\\\\\\\\\\\\\\\\\\\\\\\\\\\|\n       |  shelves   shelves |\n       |       _____        |\n       |____________________|\n",
          "description": "A cold basement runs under the house. Dusty shelves crowd the walls. Something scratches once from inside the ceiling.",
          "exits": {
            "up": "Kitchen"
          },
          "items": []
        },
        "Dog Run": {
          "art": "\n       ||||||||||||||||||||\n       ||    (o  o)      ||\n       ||      /|\\\\       ||\n       ||||||||||||||||||||\n",
          "description": "A huge black dog stands behind a low gate, staring without blinking.\nThe old well lies east. If the dog starts barking, the whole farm will hear.",
          "exits": {
            "west": "Farmyard",
            "north": "Back Field",
            "east": "Old Well"
          },
          "locked_exits": {
            "east": {
              "message": "The dog blocks the path to the well, teeth bared."
            }
          },
          "items": []
        },
        "Old Well": {
          "art": "\n             _______\n            /       \\\\\n           |   ___   |\n           |__|___|__|\n",
          "description": "An old stone well leans beneath a dead tree. A bucket hangs just within reach.",
          "exits": {
            "west": "Dog Run"
          },
          "items": []
        },
        "Back Field": {
          "art": "\n   .    .    .    .    .\n        .   (o  o)   .\n   .    _   _| |_   _   .\n   .    .    .    .    .\n",
          "description": "The dog launches forward as you turn toward the field.",
          "exits": {
            "south": "Dog Run"
          },
          "on_first_enter": {
            "flag": "dog_alerted",
            "message": "Its bark tears through the night.",
            "ending": "bad"
          },
          "items": []
        },
        "County Road": {
          "art": "\n      |                  |\n      |                  |\n   ===' .    .   .   .  '===\n      .    .    .    .\n",
          "description": "A wet county road disappears into the dark beyond the open gate.",
          "exits": {},
          "items": []
        }
      },
      "uses": {
        "Shed Key": {
          "Farmyard": {
            "unlock": "east",
            "flag": "shed_opened",
            "already_message": "The tool shed is already open.",
            "message": "The Shed Key turns in the padlock."
          }
        },
        "Bolt Cutters": {
          "Barn Floor": {
            "flag": "stall_chain_cut",
            "already_message": "The chain has already been cut.",
            "give_item": "House Key",
            "message": "The cutters snap through the stall chain. A House Key falls from the broken latch."
          }
        },
        "House Key": {
          "Farmyard": {
            "unlock": "north",
            "flag": "house_opened",
            "already_message": "The farmhouse is already open.",
            "message": "The House Key unlocks the farmhouse door."
          }
        },
        "Cellar Key": {
          "Kitchen": {
            "unlock": "down",
            "flag": "cellar_opened",
            "already_message": "The cellar door is already unlocked.",
            "message": "The Cellar Key turns. Cold air rises as the cellar door unlocks."
          }
        },
        "Crate Key": {
          "Barn Floor": {
            "flag": "crate_opened",
            "already_message": "The crate is already open.",
            "give_item": "Severed Hand",
            "message": "The key opens the crate. Wrapped in an old feed sack is a Severed Hand.\n\nYou wish you had not found it."
          }
        },
        "Severed Hand": {
          "Dog Run": {
            "unlock": "east",
            "flag": "dog_fed",
            "already_message": "The dog is already busy with its treat.",
            "message": "You toss the hand through the gate.\n\nThe dog catches it gently and carries it into the shadows.\n\nThe path to the well is clear."
          }
        },
        "Gate Key": {
          "Farmyard": {
            "unlock": "west",
            "flag": "gate_opened",
            "already_message": "The farm gate is already open.",
            "message": "The Gate Key opens the padlock. Beyond it is the road."
          }
        }
      },
      "searches": {
        "Barn Office": {
          "desk": {
            "flag": "desk_searched",
            "repeat_message": "Only old receipts remain in the desk.",
            "give_item": "Shed Key",
            "message": "You open the desk drawer. Under a stack of invoices is a small Shed Key."
          }
        },
        "Kitchen": {
          "cabinets": {
            "flag": "cabinets_searched",
            "repeat_message": "The cabinets are empty now.",
            "give_item": "Cellar Key",
            "message": "Behind spotless jars, you find a Cellar Key taped to the back of a cabinet."
          }
        },
        "Basement": {
          "shelves": {
            "flag": "shelves_searched",
            "repeat_message": "The shelves hold only dust now.",
            "give_item": "Crate Key",
            "message": "Behind a row of empty canning jars, you find a Crate Key."
          }
        },
        "Old Well": {
          "bucket": {
            "flag": "bucket_searched",
            "repeat_message": "The bucket is empty now.",
            "give_item": "Gate Key",
            "message": "You pull up the bucket. At the bottom, beneath black water, is a Gate Key."
          }
        }
      },
      "readables": {
        "Farm Ledger": "The ledger lists animals by name, but the last several pages list only dates.\n\nEvery entry ends with the same word: RETURNED."
      },
      "listens": {
        "Dog Run": "The dog breathes slowly. It is waiting for you to make a mistake.",
        "Basement": "Above you, floorboards creak. Someone may be walking through the kitchen."
      },
      "default_hint": "You need a way off this farm. Work through the barn and farmhouse one locked thing at a time.",
      "hints": {
        "Barn Loft": [
          {
            "unless_item": "Rusty Hook",
            "text": "Take the Rusty Hook. It may not be useful, but you should not leave empty-handed."
          },
          {
            "text": "The ladder leads down."
          }
        ],
        "Barn Floor": [
          {
            "unless_item": "House Key",
            "text": "The locked crate can wait. The office may have a clue, and the farmyard has other paths."
          },
          {
            "unless_item": "Crate Key",
            "text": "You have the House Key. The farmhouse may lead to whatever opens that crate."
          },
          {
            "unless_item": "Severed Hand",
            "text": "Try using the Crate Key here."
          },
          {
            "text": "The dog run is south through the farmyard. You now have what might keep the dog quiet."
          }
        ],
        "Barn Office": [
          {
            "unless_item": "Shed Key",
            "text": "The desk is worth searching."
          },
          {
            "text": "The tool shed is east of the farmyard."
          }
        ],
        "Farmyard": [
          {
            "unless_flag": "shed_opened",
            "text": "The key from the office should open the tool shed."
          },
          {
            "unless_flag": "house_opened",
            "text": "The bolt cutters opened the stall chain. Did something fall from it?"
          },
          {
            "unless_flag": "gate_opened",
            "text": "The west gate is your way out, but you still need its key."
          },
          {
            "text": "The gate is open. Leave west."
          }
        ],
        "Tool Shed": [
          {
            "unless_item": "Bolt Cutters",
            "text": "Take the Bolt Cutters."
          },
          {
            "text": "The cutters may deal with the chain in the barn."
          }
        ],
        "Kitchen": [
          {
            "unless_item": "Cellar Key",
            "text": "Search the cabinets for a way into the cellar."
          },
          {
            "unless_flag": "cellar_opened",
            "text": "Use the Cellar Key here."
          },
          {
            "text": "The basement is below."
          }
        ],
        "Basement": [
          {
            "unless_item": "Crate Key",
            "text": "The shelves may hide something useful."
          },
          {
            "text": "The crate in the barn can finally be opened."
          }
        ],
        "Dog Run": [
          {
            "unless_item": "Severed Hand",
            "text": "The dog will not let you reach the well. It needs a distraction."
          },
          {
            "unless_flag": "dog_fed",
            "text": "As awful as it is, try using the Severed Hand here."
          },
          {
            "text": "The well is east. Do not go north."
          }
        ],
        "Old Well": [
          {
            "unless_item": "Gate Key",
            "text": "Search the bucket."
          },
          {
            "text": "Return to the farmyard and use the Gate Key."
          }
        ]
      },
      "menu_key": "5"
    }
  ],
  "walkthroughs": {
    "1": "========================================\nTHE LIMINAL HOUSE\nOFFICIAL WALKTHROUGH\n========================================\n\n1. Go EAST.\n\n2. Take Brass Key.\n\n3. Return WEST.\n\n4. Go NORTH.\n\n5. Use Brass Key.\n\n6. Go NORTH into the Living Room.\n\n7. Go EAST.\n\n8. Take Flashlight.\n\n9. Return WEST.\n\n10. Go NORTH into the Hallway.\n\n11. Go EAST into the Bedroom.\n\n12. SEARCH NIGHTSTAND.\n\n13. Take Screwdriver.\n\n14. Return WEST.\n\n15. Go WEST into the Bathroom.\n\n16. USE SCREWDRIVER.\n\n17. Take Small Key.\n\n18. Return EAST.\n\n19. Go EAST into the Bedroom.\n\n20. SEARCH RUG.\n\n21. Go DOWN.\n\n22. USE FLASHLIGHT.\n\n23. USE SMALL KEY.\n\n24. PULL LEVER.\n\n25. Go EAST.\n\n========================================\n\nGOOD ENDING\n\n========================================\n\nA note on the house itself:\n\nEvery move you make in Living Room, Kitchen, Hallway,\nBathroom, or Bedroom has a 10% chance of quietly dropping\nyou in a different one of those rooms instead of where you\nmeant to go. It's not a bug — it's the house. If a move\nseems to have gone somewhere strange, that's why.\n\n========================================\n\nHidden Commands\n\ncredits\n\nwho brought me here\n\ndance\n\njump\n\nleave\n\nxyzzy\n\npray\n\nlook\n(7 times)\n\nwalkthrough\n\n========================================\n\nBuilt By\n\nTaylor DeLong\n\nUsing\n\nTIMMYTEXT Engine\n\nVersion 1.0.0\n\n©2026\n\n========================================\n",
    "2": "========================================\nTHE LIGHTHOUSE\nOFFICIAL WALKTHROUGH\n========================================\n\n1. Go NORTH.\n\n2. Go UP into the Supply Room.\n\n3. Take Flashlight.\n\n4. Go UP into the Boiler Room.\n\n5. Take Iron Key.\n\n6. USE IRON KEY.\n\n7. Go UP into the Observation Room.\n\n8. Go UP into the Sleeping Quarters.\n\n9. Take Keeper Journal. (optional)\n\n10. READ KEEPER JOURNAL. (optional)\n\n11. Go UP into Maintenance.\n\n12. Go UP into the Counterweight Room.\n(requires the Flashlight)\n\n13. Go UP into the Upper Stairwell.\n\n14. Take Screwdriver from Maintenance.\n\n15. USE SCREWDRIVER in the Counterweight Room.\nThe counterweight drops a key to the Entrance below.\n\n16. Go DOWN to the Entrance and SEARCH FLOOR.\n\n17. Take Lantern Key.\n\n18. Return to the Upper Stairwell and USE LANTERN KEY.\n\n19. Go UP into the Lantern Room.\nThe door shuts behind you. There is no going back down.\n\n20. SEARCH SKELETON.\n\n21. Take Brass Control Knob.\n\n22. LIGHT LANTERN.\n\n========================================\n\nGOOD ENDING\n\n========================================\n\nBAD ENDING\n\nSkip step 15 and LIGHT LANTERN without the\nBrass Control Knob, then answer YES when asked\nif you're sure.\n\n========================================\n\nSecrets\n\nsearch radio   (Entrance)\n\nsearch coat    (Entrance)\n\nsearch bench   (Observation Room)\n\n========================================\n\nHidden Commands\n\ncredits\n\nwho brought me here\n\ndance\n\njump\n\nleave\n\nxyzzy\n\npray\n\nlook\n(7 times)\n\nwalkthrough\n\n========================================\n\nBuilt By\n\nTaylor DeLong\n\nUsing\n\nTIMMYTEXT Engine\n\nVersion 1.0.0\n\n©2026\n\n========================================\n",
    "3": "========================================\nTHE MOLD HOUSE\nOFFICIAL WALKTHROUGH\n========================================\n\n1. SEARCH BED and take Key Shaped Stick. (optional trap item)\n\n2. Take Tapestry, then SEARCH CLOSET.\nTake Dream Note and READ DREAM NOTE. (secret route)\n\n3. Go DOWN twice to the Living Room.\n\n4. Go SOUTH to the Kitchen. SEARCH DRAWER and take Radio Knob.\n\n5. Return NORTH, then go WEST to the Bathroom. SEARCH CABINET.\nTake Small Magnet.\n\n6. Go NORTH to the Laundry Room. SEARCH HAMPER and take String.\n\n7. Return SOUTH to the Bathroom.\n\n8. USE STRING ON MAGNET.\n\n9. USE MAGNET ON TOILET. Take House Key.\n\n10. Return EAST to the Living Room. USE HOUSE KEY.\n\n11. USE RADIO KNOB ON RADIO.\n\n12. Go NORTH.\n\n========================================\n\nGOOD ENDING\n\n========================================\n\nSECRET ENDING 1\n\nTake the Tapestry, SEARCH CLOSET, take and READ DREAM NOTE,\nthen USE BED in the Upstairs Bedroom.\n\n========================================\n\nTRAPS\n\nUSE KEY SHAPED STICK in the Living Room: caught.\n\nUSE RADIO KNOB ON RADIO before unlocking the front door, then\nanswer YES: caught. Once the door is unlocked, the radio is\nsafe — and required for escape.\n\nNever go EAST from the Living Room.\n\n========================================\n\nSecrets\n\nsearch closet   (after taking the tapestry)\n\nlisten          (Living Room)\n\n========================================\n\nHidden Commands\n\ncredits\n\nwho brought me here\n\ndance\n\njump\n\nleave\n\nxyzzy\n\npray\n\nlook\n(7 times)\n\nwalkthrough\n\n========================================\n\nBuilt By\n\nTaylor DeLong\n\nUsing\n\nTIMMYTEXT Engine\n\nVersion 1.0.0\n\n©2026\n========================================\n",
    "4": "========================================\nTHE LAST STOP\nOFFICIAL WALKTHROUGH\n========================================\n\n1. Go NORTH into the Waiting Room.\n\n2. Go NORTH into the Ticket Hall.\n\n3. SEARCH WINDOW.\n\n4. Take Brass Key.\n\n5. Go SOUTH to the Waiting Room.\n\n6. Go EAST into the Locker Hall.\n\n7. USE BRASS KEY.\n\n8. Take Platform Ticket.\n\n9. Go WEST, then NORTH to the Ticket Hall.\n\n10. USE PLATFORM TICKET.\n\n11. Go NORTH through the gate.\n\n12. Go NORTH onto The Last Train.\n\n========================================\n\nGOOD ENDING\n\n========================================\n\nBAD ENDING\n\nFrom the starting Platform, go SOUTH onto the tracks.\n\n========================================\n\nSecrets\n\nread timetable   (Waiting Room)\n\nlisten           (Platform, Gate Platform)\n\n========================================\n\nHidden Commands\n\ncredits\n\nwho brought me here\n\ndance\n\njump\n\nleave\n\nxyzzy\n\npray\n\nlook\n(7 times)\n\nwalkthrough\n\n========================================\n\nBuilt By\n\nTaylor DeLong\n\nUsing\n\nTIMMYTEXT Engine\n\nVersion 1.0.0\n\n©2026\n\n========================================\n",
    "5": "========================================\nTHE BARN\nOFFICIAL WALKTHROUGH\n========================================\n\n1. Take Rusty Hook in the Barn Loft.\n\n2. Go DOWN to the Barn Floor, then EAST to the Barn Office.\n\n3. SEARCH DESK and take Shed Key.\n\n4. Go WEST, then SOUTH to the Farmyard.\n\n5. USE SHED KEY, then go EAST into the Tool Shed.\n\n6. Take Bolt Cutters. Return WEST, then NORTH to the Barn Floor.\n\n7. USE BOLT CUTTERS and take House Key.\n\n8. Go SOUTH to the Farmyard. USE HOUSE KEY, then go NORTH into the Farmhouse.\n\n9. Go NORTH to the Living Room, then EAST to the Kitchen.\n\n10. SEARCH CABINETS. Take Cellar Key and USE CELLAR KEY.\n\n11. Go DOWN to the Basement and SEARCH SHELVES. Take Crate Key.\n\n12. Return to the Barn Floor. USE CRATE KEY and take Severed Hand.\n\n13. Go SOUTH to the Farmyard, then EAST to the Dog Run.\n\n14. USE SEVERED HAND. Go EAST to the Old Well.\n\n15. SEARCH BUCKET. Take Gate Key.\n\n16. Return WEST to the Farmyard. USE GATE KEY, then go WEST.\n\n========================================\n\nGOOD ENDING\n\n========================================\n\nBAD ENDINGS\n\nGo NORTH from the Dog Run before distracting the dog.\n\nGo EAST into the Tool Shed before unlocking it (the door will not open),\nor go SOUTH from the Farmyard into the Slaughter Shed after opening it.\n\n========================================\n\nSecrets\n\nread ledger   (Barn Office)\n\nlisten        (Dog Run, Basement)\n\n========================================\n\nHidden Commands\n\ncredits\n\nwho brought me here\n\ndance\n\njump\n\nleave\n\nxyzzy\n\npray\n\nlook\n(7 times)\n\nwalkthrough\n\n========================================\n\nBuilt By\n\nTaylor DeLong\n\nUsing\n\nTIMMYTEXT Engine\n\nVersion 1.0.0\n\n©2026\n========================================\n"
  }
};
