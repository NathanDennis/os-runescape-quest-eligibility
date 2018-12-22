let playerStats = new Map([
    ["attack", 1],
    ["strength", 1],
    ["defence", 1],
    ["ranged", 1],
    ["prayer", 1],
    ["magic", 1],
    ["runecrafting", 1],
    ["construction", 1],
    ["hitpoints", 10],
    ["agility", 1],
    ["herblore", 1],
    ["thieving", 1],
    ["crafting", 1],
    ["fletching", 1],
    ["slayer", 1],
    ["hunter", 1],
    ["mining", 1],
    ["smithing", 1],
    ["fishing", 1],
    ["cooking", 1],
    ["firemaking", 1],
    ["woodcutting", 1],
    ["farming", 1]
])

const statsInput = document.getElementById('stats-input-table')
const table = document.getElementById('quest-table')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
const eligibleQuests = document.getElementById('eligible-quests')
const explanationText = document.getElementById('tool-explanation')

// Player stats interface
const attackLv = document.querySelector('#attackLv')
const strengthLv = document.querySelector('#strengthLv')
const defenceLv = document.querySelector('#defenceLv')
const rangedLv = document.querySelector('#rangedLv')
const prayerLv = document.querySelector('#prayerLv')
const magicLv = document.querySelector('#magicLv')
const runecraftingLv = document.querySelector('#runecraftingLv')
const constructionLv = document.querySelector('#constructionLv')
const hitpointsLv = document.querySelector('#hitpointsLv')
const agilityLv = document.querySelector('#agilityLv')
const herbloreLv = document.querySelector('#herbloreLv')
const thievingLv = document.querySelector('#thievingLv')
const craftingLv = document.querySelector('#craftingLv')
const fletchingLv = document.querySelector('#fletchingLv')
const slayerLv = document.querySelector('#slayerLv')
const hunterLv = document.querySelector('#hunterLv')
const miningLv = document.querySelector('#miningLv')
const smithingLv = document.querySelector('#smithingLv')
const fishingLv = document.querySelector('#fishingLv')
const cookingLv = document.querySelector('#cookingLv')
const firemakingLv = document.querySelector('#firemakingLv')
const woodcuttingLv = document.querySelector('#woodcuttingLv')
const farmingLv = document.querySelector('#farmingLv')

// generateQuestList()

// Listen for player stats input and submission
statsInput.addEventListener('submit', function (e) {
    e.preventDefault()
    while (table.firstChild) {
        table.removeChild(table.firstChild)
    }
    playerStats.set("attack", e.target.elements.attackLv.value)
    playerStats.set("strength", e.target.elements.strengthLv.value)
    playerStats.set("defence", e.target.elements.defenceLv.value)
    playerStats.set("ranged", e.target.elements.rangedLv.value)
    playerStats.set("prayer", e.target.elements.prayerLv.value)
    playerStats.set("magic", e.target.elements.magicLv.value)
    playerStats.set("runecrafting", e.target.elements.runecraftingLv.value)
    playerStats.set("construction", e.target.elements.constructionLv.value)
    playerStats.set("hitpoints", e.target.elements.hitpointsLv.value)
    playerStats.set("agility", e.target.elements.agilityLv.value)
    playerStats.set("herblore", e.target.elements.herbloreLv.value)
    playerStats.set("thieving", e.target.elements.thievingLv.value)
    playerStats.set("crafting", e.target.elements.craftingLv.value)
    playerStats.set("fletching", e.target.elements.fletchingLv.value)
    playerStats.set("slayer", e.target.elements.slayerLv.value)
    playerStats.set("hunter", e.target.elements.hunterLv.value)
    playerStats.set("mining", e.target.elements.miningLv.value)
    playerStats.set("smithing", e.target.elements.smithingLv.value)
    playerStats.set("fishing", e.target.elements.fishingLv.value)
    playerStats.set("cooking", e.target.elements.cookingLv.value)
    playerStats.set("firemaking", e.target.elements.firemakingLv.value)
    playerStats.set("woodcutting", e.target.elements.woodcuttingLv.value)
    playerStats.set("farming", e.target.elements.farmingLv.value)
    checkStats(playerStats, quests)
    h3.textContent = "Your stats are eligible to start the following quests:"
    generateEligibleQuests()
})




