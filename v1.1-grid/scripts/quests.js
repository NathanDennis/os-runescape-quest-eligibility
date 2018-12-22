let quests = [
    // FREE TO PLAY QUESTS
    {
        title: "Black Knights' Fortress",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 3,
        qpRequirement: 12,
        wikiLink: "https://oldschool.runescape.wiki/w/Black_Knights%27_Fortress"
    },
    {
        title: "Cook's Assistant",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Cook%27s_Assistant"
    },
    {
        title: "The Corsair Curse",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Corsair_Curse"
    },
    {
        title: "Demon Slayer",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 3,
        wikiLink: "https://oldschool.runescape.wiki/w/Demon_Slayer"
    },
    {
        title: "Doric's Quest",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["mining", 15]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Doric%27s_Quest"
    },
    {
        title: "Dragon Slayer",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["Crafting", 8]
        ]),
        qpReward: 2,
        qpRequirement: 32,
        wikiLink: "https://oldschool.runescape.wiki/w/Dragon_Slayer"
    },
    {
        title: "Ernest The Chicken",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 4,
        wikiLink: "https://oldschool.runescape.wiki/w/Ernest_the_Chicken"
    },
    {
        title: "Goblin Diplomacy",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 5,
        wikiLink: "https://oldschool.runescape.wiki/w/Goblin_Diplomacy"
    },
    {
        title: "Imp Catcher",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Imp_Catcher"
    },
    {
        title: "The Knight's Sword",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["mining", 10]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Knight%27s_Sword"
    },
    {
        title: "Misthalin Mystery",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Misthalin_Mystery"
    },
    {
        title: "Pirate's Treasure",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Pirate%27s_Treasure"
    },
    {
        title: "Prince Ali Rescue",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 3,
        wikiLink: "https://oldschool.runescape.wiki/w/Prince_Ali_Rescue"
    },
    {
        title: "The Restless Ghost",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Restless_Ghost"
    },
    {
        title: "Romeo & Juliet",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 5,
        wikiLink: "https://oldschool.runescape.wiki/w/Romeo_%26_Juliet"
    },
    {
        title: "Rune Mysteries",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Rune_Mysteries"
    },
    {
        title: "Sheep Shearer",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Sheep_Shearer"
    },
    {
        title: "Shield of Arrav",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Shield_of_Arrav"
    },
    {
        title: "Vampire Slayer",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 3,
        wikiLink: "https://oldschool.runescape.wiki/w/Vampire_Slayer"
    },
    {
        title: "Witch's Potion",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Witch%27s_Potion"
    },
    // MEMBERS QUESTS
    {
        title: "Animal Magnetism",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["slayer", 18],
            ["crafting", 19],
            ["ranged", 30],
            ["woodcutting", 35]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Animal_Magnetism"
    },
    {
        title: "Another Slice of H.A.M.",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["attack", 15],
            ["prayer", 25]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Another_Slice_of_H.A.M."
    },
    {
        title: "Between a Rock",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["defence", 30],
            ["mining", 40],
            ["smithing", 50]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Between_a_Rock..."
    },
    {
        title: "Big Chompy Bird Hunting",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["fletching", 5],
            ["cooking", 30],
            ["ranged", 30]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting"
    },
    {
        title: "Biohazard",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 3,
        wikiLink: "https://oldschool.runescape.wiki/w/Biohazard"
    },
    {
        title: "Bone Voyage",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Bone_Voyage"
    },
    {
        title: "Cabin Fever",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 42],
            ["crafting", 45],
            ["smithing", 50],
            ["ranged", 40]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Cabin_Fever"
    },
    {
        title: "Client of Kourend",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Client_of_Kourend"
    },
    {
        title: "Clock Tower",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Clock_Tower"
    },
    {
        title: "Cold War",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["hunter", 10],
            ["agility", 30],
            ["crafting", 30],
            ["construction", 34],
            ["thieving", 15]
        ]),
        qpReward: 1,
        "wikiLink": "https://oldschool.runescape.wiki/w/Cold_War"
    },
    {
        title: "Contact!",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Contact!"
    },
    {
        title: "Creature of Fenkenstrain",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 20],
            ["thieving", 20]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Creature_of_Fenkenstrain"
    },
    {
        title: "Darkness of Hallowvale",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["construction", 5],
            ["mining", 20],
            ["thieving", 20],
            ["agility", 26],
            ["crafting", 32],
            ["magic", 33],
            ["strength", 40]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Darkness_of_Hallowvale"
    },
    {
        title: "Death Plateau",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Death_Plateau"
    },
    {
        title: "Death to the Dorgeshuun",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 23],
            ["thieving", 23]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Death_to_the_Dorgeshuun"
    },
    {
        title: "The Depths of Despair",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 18]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Depths_of_Despair"
    },
    {
        title: "Desert Treasure",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["thieving", 53],
            ["firemaking", 50],
            ["slayer", 10],
            ["magic", 50]
        ]),
        qpReward: 3,
        wikiLink: "https://oldschool.runescape.wiki/w/Desert_Treasure"
    },
    {
        title: "Devious Minds",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["smithing", 65],
            ["runecrafting", 50],
            ["fletching", 50]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Devious_Minds"
    },
    {
        title: "The Dig Site",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 10],
            ["herblore", 10],
            ["thieving", 25]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Dig_Site"
    },
    {
        title: "Dragon Slayer II",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["magic", 75],
            ["smithing", 70],
            ["mining", 68],
            ["crafting", 62],
            ["agility", 60],
            ["thieving", 60],
            ["construction", 50],
            ["hitpoints", 50]
        ]),
        qpReward: 5,
        qpRequirement: 200,
        wikiLink: "https://oldschool.runescape.wiki/w/Dragon_Slayer_II"
    },
    {
        title: "Dream Mentor",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Dream_Mentor"
    },
    {
        title: "Druidic Ritual",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 4,
        wikiLink: "https://oldschool.runescape.wiki/w/Druidic_Ritual"
    },
    {
        title: "Dwarf Cannon",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Dwarf_Cannon"
    },
    {
        title: "Eadgar's Ruse",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["herblore", 31]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Eadgar&27s_Ruse"
    },
    {
        title: "Eagles' Peak",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["hunter", 27]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Eagles%27_Peak"
    },
    {
        title: "Elemental Workshop I",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["mining", 20],
            ["smithing", 20],
            ["crafting", 20]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Elemental_Workshop_I"
    },
    {
        title: "Elemental Workshop II",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["magic", 20],
            ["smithing", 30]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Elemental_Workshop_II"
    },
    {
        title: "Enakhra's Lament",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 50],
            ["firemaking", 45],
            ["prayer", 43],
            ["magic", 39],
            ["mining", 45]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Enakhra%27s_Lament"
    },
    {
        title: "Enlightened Journey",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["firemaking", 20],
            ["farming", 30],
            ["crafting", 36]
        ]),
        qpReward: 1,
        qpRequirement: 20,
        wikiLink: "https://oldschool.runescape.wiki/w/Enlightened_Journey"
    },
    {
        title: "The Eyes of Gloughrie",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["construction", 5],
            ["magic", 46],
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Eyes_of_Gloughrie"
    },
    {
        title: "Fairytale I - Growing Pains",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Fairytale_I_-_Growing_Pains"
    },
    {
        title: "Fairytale II - Cure a Queen",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["thieving", 40],
            ["farming", 49],
            ["herblore", 57]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Fairytale_II_-_Cure_a_Queen"
    },
    {
        title: "Family Crest",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["mining", 40],
            ["smithing", 40],
            ["magic", 59],
            ["crafting", 40]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Family_Crest"
    },
    {
        title: "The Feud",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["thieving", 30]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Feud"
    },
    {
        title: "Fight Arena",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Fight_Arena"
    },
    {
        title: "Fishing Contest",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["fishing", 10]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Fishing_Contest"
    },
    {
        title: "Forgettable Tale",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Forgettable_Tale"
    },
    {
        title: "The Fremennik Isles",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["construction", 20],
            ["agility", 40],
            ["woodcutting", 56],
            ["crafting", 46]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Fremennik_Isles"
    },
    {
        title: "The Fremennik Trials",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["fletching", 25],
            ["woodcutting", 40],
            ["crafting", 40]
        ]),
        qpReward: 3,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Fremennik_Trials"
    },
    {
        title: "Garden of Tranquility",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["farming", 25]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Garden_of_Tranquility"
    },
    {
        title: "Gertrude's Cat",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Gertrude%27s_Cat"
    },
    {
        title: "Ghosts Ahoy",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 25],
            ["cooking", 20]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Ghosts_Ahoy"
    },
    {
        title: "The Giant Dwarf",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 12],
            ["firemaking", 16],
            ["magic", 33],
            ["thieving", 14]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Giant_Dwarf"
    },
    {
        title: "The Golem",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 20],
            ["thieving", 25]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Golem"
    },
    {
        title: "The Grand Tree",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 25]
        ]),
        qpReward: 5,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Grand_Tree"
    },
    {
        title: "The Great Brain Robbery",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 45],
            ["construction", 30],
            ["prayer", 50]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Great_Brain_Robbery"
    },
    {
        title: "Grim Tales",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["farming", 45],
            ["herblore", 52],
            ["thieving", 58],
            ["agility", 59],
            ["woodcutting", 71]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Grim_Tales"
    },
    {
        title: "The Hand in the Sand",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["thieving", 17],
            ["crafting", 49]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Hand_in_the_Sand"
    },
    {
        title: "Haunted Mine",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 15],
            ["crafting", 35]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Haunted_Mine"
    },
    {
        title: "Hazeel Cult",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Hazeel_Cult"
    },
    {
        title: "Heroes' Quest",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["cooking", 53],
            ["fishing", 53],
            ["herblore", 25],
            ["mining", 50]
        ]),
        qpReward: 1,
        qpRequirement: 55,
        wikiLink: "https://oldschool.runescape.wiki/w/Heroes%27_Quest"
    },
    {
        title: "Holy Grail",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["attack", 20]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Holy_Grail"
    },
    {
        title: "Horror from the Deep",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 35]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Horror_from_the_Deep"
    },
    {
        title: "Icthlarin's Little Helper",
        eligible: false,
        completed: false,
        requiredStats: new Map([
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Icthlarin%27s_Little_Helper"
    },
    {
        title: "In Aid of the Myreque",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 25],
            ["mining", 15],
            ["magic", 7]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/In_Aid_of_the_Myreque"
    },
    {
        title: "In Search of the Myreque",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 25]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/In_Search_of_the_Myreque"
    },
    {
        title: "Jungle Potion",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["herblore", 3]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Jungle_Potion"
    },
    {
        title: "King's Ransom",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["magic", 45],
            ["defence", 65],
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/King%27s_Ransom"
    },
    {
        title: "Legends' Quest",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 50],
            ["crafting", 50],
            ["herblore", 45],
            ["magic", 56],
            ["mining", 52],
            ["prayer", 42],
            ["smithing", 50],
            ["strength", 50],
            ["thieving", 50],
            ["woodcutting", 50]
        ]),
        qpReward: 4,
        qpRequirement: 107,
        wikiLink: "https://oldschool.runescape.wiki/w/Legends%27_Quest"
    },
    {
        title: "Lost City",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 31],
            ["woodcutting", 36]
        ]),
        qpReward: 3,
        wikiLink: "https://oldschool.runescape.wiki/w/Lost_City"
    },
    {
        title: "The Lost Tribe",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 13],
            ["thieving", 13],
            ["mining", 17]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Lost_Tribe"
    },
    {
        title: "Lunar Diplomacy",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 61],
            ["defence", 40],
            ["firemaking", 49],
            ["herblore", 5],
            ["magic", 65],
            ["mining", 60],
            ["woodcutting", 55]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Lunar_Diplomacy"
    },
    {
        title: "Making Friends with My Arm",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["firemaking", 66],
            ["mining", 72],
            ["construction", 35],
            ["agility", 68]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Making_Friends_with_My_Arm"
    },
    {
        title: "Making History",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 3,
        wikiLink: "https://oldschool.runescape.wiki/w/Making_History"
    },
    {
        title: "Merlin's Crystal",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 6,
        wikiLink: "https://oldschool.runescape.wiki/w/Merlin%27s_Crystal"
    },
    {
        title: "Monk's Friend",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Monk%27s_Friend"
    },
    {
        title: "Monkey Madness I",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 3,
        wikiLink: "https://oldschool.runescape.wiki/w/Monkey_Madness_I"
    },
    {
        title: "Monkey Madness II",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["slayer", 69],
            ["crafting", 70],
            ["hunter", 60],
            ["agility", 55],
            ["thieving", 55],
            ["firemaking", 60]
        ]),
        qpReward: 4,
        wikiLink: "https://oldschool.runescape.wiki/w/Monkey_Madness_II"
    },
    {
        title: "Mountain Daughter",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 20]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Mountain_Daughter"
    },
    {
        title: "Mourning's Ends Part I",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["ranged", 60],
            ["thieving", 50]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Mourning%27s_Ends_Part_I"
    },
    {
        title: "Mourning's Ends Part II",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Mourning%27s_Ends_Part_II"
    },
    {
        title: "Murder Mystery",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 3,
        wikiLink: "https://oldschool.runescape.wiki/w/Murder_Mystery"
    },
    {
        title: "My Arm's Big Adventure",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["woodcutting", 10],
            ["farming", 29]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/My_Arm%27s_Big_Adventure"
    },
    {
        title: "Nature Spirit",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 18]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Nature_Spirit"
    },
    {
        title: "Observatory Quest",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 10]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Observatory_Quest"
    },
    {
        title: "Olaf's Quest",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["firemaking", 40],
            ["woodcutting", 50]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Olaf's_Quest"
    },
    {
        title: "One Small Favour",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 36],
            ["crafting", 25],
            ["herblore", 18],
            ["smithing", 30]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/One_Small_Favour"
    },
    {
        title: "Plague City",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Plague_City"
    },
    {
        title: "Priest in Peril",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Priest_in_Peril"
    },
    {
        title: "The Queen of Thieves",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["thieving", 20]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Queen_of_Thieves"
    },
    {
        title: "Rag and Bone Man",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Rag_and_Bone_Man"
    },
    {
        title: "Rag and Bone Man II",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["slayer", 40],
            ["defence", 20]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Rag_and_Bone_Man_II"
    },
    {
        title: "Ratcatchers",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Ratcatchers"
    },
    {
        title: "Recipe for Disaster",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["cooking", 70],
            ["agility", 48],
            ["mining", 50],
            ["fishing", 53],
            ["thieving", 53],
            ["herblore", 25],
            ["magic", 59],
            ["smithing", 40],
            ["firemaking", 50],
            ["ranged", 40],
            ["crafting", 40],
            ["fletching", 10],
            ["slayer", 10],
            ["woodcutting", 36]
        ]),
        qpReward: 10,
        qpRequirement: 175,
        wikiLink: "https://oldschool.runescape.wiki/w/Recipe_For_Disaster"
    },
    {
        title: "Recruitment Drive",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        qpRequirement: 12,
        wikiLink: "https://oldschool.runescape.wiki/w/Recruitment_Drive"
    },
    {
        title: "Regicide",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 56],
            ["crafting", 10]
        ]),
        qpReward: 3,
        wikiLink: "https://oldschool.runescape.wiki/w/Regicide"
    },
    {
        title: "Roving Elves",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 56]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Roving_Elves"
    },
    {
        title: "Royal Trouble",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 40],
            ["slayer", 40]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Royal_Trouble"
    },
    {
        title: "Rum Deal",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 42],
            ["fishing", 50],
            ["farming", 40],
            ["prayer", 47],
            ["slayer", 42]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Rum_Deal"
    },
    {
        title: "Scorpion Catcher",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["prayer", 31]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Scorpion_Catcher"
    },
    {
        title: "Sea Slug",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["firemaking", 30]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Sea_Slug"
    },
    {
        title: "Shades of Mort'ton",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 20],
            ["herblore", 15],
            ["firemaking", 5]
        ]),
        qpReward: 3,
        wikiLink: "https://oldschool.runescape.wiki/w/Shades_of_Mort%27ton"
    },
    {
        title: "Shadow of the Storm",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 30]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Shadow_of_the_Storm"
    },
    {
        title: "Sheep Herder",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 4,
        wikiLink: "https://oldschool.runescape.wiki/w/Sheep_Herder"
    },
    {
        title: "Shilo Village",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 20],
            ["agility", 32],
            ["smithing", 4]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Shilo_Village"
    },
    {
        title: "The Slug Menace",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 30],
            ["runecrafting", 30],
            ["slayer", 30],
            ["thieving", 30]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Slug_Menace"
    },
    {
        title: "A Soul's Bane",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/A_Soul%27s_Bane"
    },
    {
        title: "Spirits of the Elid",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["magic", 33],
            ["ranged", 37],
            ["mining", 37],
            ["thieving", 37]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Spirits_of_the_Elid"
    },
    {
        title: "Swan Song",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["magic", 66],
            ["cooking", 62],
            ["fishing", 62],
            ["smithing", 45],
            ["firemaking", 42],
            ["crafting", 40]
        ]),
        qpReward: 2,
        qpRequirement: 100,
        wikiLink: "https://oldschool.runescape.wiki/w/Swan_Song"
    },
    {
        title: "Tai Bwo Wannai Trio",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 15],
            ["cooking", 30],
            ["fishing", 5]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Tai_Bwo_Wannai_Trio"
    },
    {
        title: "A Tail of Two Cats",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/A_Tail_of_Two_Cats"
    },
    {
        title: "Tale of the Righteous",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["strength", 16],
            ["mining", 10]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Tale_of_the_Righteous"
    },
    {
        title: "A Taste of Hope",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["crafting", 48],
            ["agility", 45],
            ["attack", 40],
            ["herblore", 40],
            ["slayer", 38]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/A_Taste_of_Hope"
    },
    {
        title: "Tears of Guthix",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["firemaking", 49],
            ["crafting", 20],
            ["mining", 20]
        ]),
        qpReward: 1,
        qpRequirement: 43,
        wikiLink: "https://oldschool.runescape.wiki/w/Tears_of_Guthix"
    },
    {
        title: "Temple of Ikov",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["thieving", 42],
            ["ranged", 40]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Temple_of_Ikov"
    },
    {
        title: "Throne of Miscellania",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["woodcutting", 45],
            ["farming", 10],
            ["mining", 30],
            ["fishing", 35]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Throne_of_Miscellania"
    },
    {
        title: "The Tourist Trap",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["fletching", 10],
            ["smithing", 20]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/The_Tourist_Trap"
    },
    {
        title: "Tower of Life",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["construction", 10]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Tower_of_Life"
    },
    {
        title: "Tree Gnome Village",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Tree_Gnome_Village"
    },
    {
        title: "Tribal Totem",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["thieving", 21]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Tribal_Totem"
    },
    {
        title: "Troll Romance",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 28]
        ]),
        qpReward: 2,
        wikiLink: "https://oldschool.runescape.wiki/w/Troll_Romance"
    },
    {
        title: "Troll Stronghold",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["agility", 15]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Troll_Stronghold"
    },
    {
        title: "Underground Pass",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["ranged", 25]
        ]),
        qpReward: 5,
        wikiLink: "https://oldschool.runescape.wiki/w/Underground_Pass"
    },
    {
        title: "Wanted!",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        qpRequirement: 32,
        wikiLink: "https://oldschool.runescape.wiki/w/Wanted!"
    },
    {
        title: "Watchtower",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["magic", 15],
            ["thieving", 15],
            ["agility", 25],
            ["herblore", 14],
            ["mining", 40]
        ]),
        qpReward: 4,
        wikiLink: "https://oldschool.runescape.wiki/w/Watchtower"
    },
    {
        title: "Waterfall Quest",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Waterfall_Quest"
    },
    {
        title: "What Lies Below",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["runecrafting", 35],
            ["mining", 42]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/What_Lies_Below"
    },
    {
        title: "Witch's House",
        eligible: false,
        completed: false,
        requiredStats: new Map([]),
        qpReward: 4,
        wikiLink: "https://oldschool.runescape.wiki/w/Witch%27s_House"
    },
    {
        title: "Zogre Flesh Eaters",
        eligible: false,
        completed: false,
        requiredStats: new Map([
            ["smithing", 4],
            ["herblore", 8],
            ["ranged", 30],
            ["fletching", 30],
            ["strength", 10]
        ]),
        qpReward: 1,
        wikiLink: "https://oldschool.runescape.wiki/w/Zogre_Flesh_Eaters"
    }
]