edited from my notebook, from approx. 1-6 Sept.

Page 1

"The game world is represented as a series of rooms, of which "outside" is the largest & has the most rooms reachable from it (neighbours, or siblings).
Some rooms, like enclave bedrooms, basements, stairs, elevators, etc have no direct door to Outside. 

Each room can have hardcoded "pre-populated" objects associated with it, for example, the ground Outside is not moveable as a whole, & perhaps it is not possible to move a(n immovable) tree from the Outside into another room "indoors".
But, a room such as the Outside may have objects moved to it dynamically within the execution of game ticks, either by player action or because of natural game procession. 

The word "entity" means an "active" object, that is not necessarily material, such as: 
- The Player 
- NPCs
- moveable things (cups, candle holders)
- and events.

An event is an active object, but it's not made of a material: it has a location and a time, but no physical shape in the game world. 

The word "singleton" means any object of which there is only one in the entire scope of the game engine. For example, a unique NPC is a singleton; it would be unexpected for an NPC to be in two player-observable positions at one time. (Unless of course that was intentional part of the player experience.)

Entities that are not strictly-bound to a room & are not singletons must be known globally to the entire engine. If the player can pick up a pen from one room, take it with them, and put it down in another room, the internal definition of the pen cannot be known only to the room in which it originates. 

[This does not necessitate the pen's definition being truely global, it could be loaded as a universal object from a room-local definition. This may be useful or harmful in the future, it's hard to tell yet.]

Let us consider a universal entity definiton file, entities.json. It could contain the definition of a rock. "A" rock might be found on the ground Outside, and perhaps on a scientist's bookshelf indoors. The rock's base definition might have some default attributes:
- size / shape
- mass (for carry weight) 
- short description (a rock) 
- long desc. (a smooth, light gray rock, good for skipping)
- material(s) of which it is made (metamorphic rock, etc)
- etc.

When manually using this object in a room defintion (as opposed to random generation), a writer/programmer might specify that only the size differs from the default, & can specify a location for it in the room, such as on a table or book shelf, or as a sub-object of something else, such as part of a rock collection in a display case. 

In this way, a room might contain a table in its North-West corner, & the South-East corner of that table might have a rock, or a candleabra."

Page 2

"The world will probably not be that dimensionally large, as progression is not (I don't think) world-, natural-resource-, or dungeon- driven, like Minecraft, Cube World, Terraria, Dwarf Fortress, etc are.
Instead and contrary to my reflex thoughts of an open world (sandbox) game, it has many NPCs and "civilisation" environments such as houses and shops and roads that actually drive the story and gameplay. (Whereas in Cube World/Minecraft shops and NPC buildings are a tiny tiny part of the huge land.)

Therefore sandbox- or Minecraft-like analogy of movement through, and interaction with, the game world is tedious and nonsensical. [The whole pointless unrelated discussion of Minecraft, CW, etc here is just because that's the first analogy I jump to - ed.]

Interacting with the game world should (probably, but I'm not a fiction writer) feel like engaging with an extremely physically descriptive book or literary piece. 

[a mediocre attempt to demonstrate as such follows] 

"Emily shoved with all her might through the great wooden door, the varnish of which had grafted and become stuck to the paint on the doorjamb. Catching her stumble, she stood catching her breath and allowed her eyes to adjust to the darkness. Stretching toward the far wall were countless rows of straight-backed metal chairs. Emily thought that there must be five hundred rows, ten columns wide, separated by two maliciously narrow aisles. 
The expanse of seating drew Emily's strained vision to the singular dim light source -- a massive mural, intricately detailed, the particulars of which Emily could not make out at this distance -- & was glowing softly, just barely strong enough to dimly light the backmost row -- and Emily -- yellow-green. Not a very pleasant ambient colour, she mused. 

Lining the long size walls were dozens upon dozens of mortal carcasses -- or hairy sculptures of such, Emily hoped. She decided she had better stop thinking so hard about the crucifixions, which were not actually related to her current predicament.

Crossing the wooden entryway floor, Emily approached the back row of chairs somewhat timidly. She carefully regarded each blackened seat, their solid wrought iron construction rusting on some edges, and bolted more than probably necessary to the floor, which was now solid iron as well near to the chairs. 
The seating did not look particularly inviting; they had no armrests, and no ergonomic attributes whatsoever, created apparently without knowledge of what a human is. These chairs were well suited for only the least respected worshippers of whatever else might be at the far end of the hall."

and so on, and so on *snif*."

