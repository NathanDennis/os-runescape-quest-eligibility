// Generate full list of quests for user to check off as completed
const generateQuestList = function () {
    quests.forEach(quest => {
        let tr = document.createElement('tr')
        let columns = []
        columns.push(quest.title)

        // for each column - add quest detail
        columns.forEach(col => {
            let wikiLink = document.createElement('a')
            wikiLink.href = quest.wikiLink
            wikiLink.target = '_blank'
            wikiLink.textContent = quest.title
            let td = document.createElement('td')
            let text = document.createTextNode(col)
            td.appendChild(wikiLink)
            tr.appendChild(td)
            table.appendChild(tr)
            fullQuestList.appendChild(table)
        })
    })
}

// Generate table for all eligible quests
const generateEligibleQuests = function () {
    quests.forEach(quest => {
        if (quest.eligible) {
            let tr = document.createElement('tr')
            let columns = []
            columns.push(quest.title)
            // columns.push(quest.qpReward)

            // for each column - add quest detail
            columns.forEach(col => {
                let wikiLink = document.createElement('a')
                wikiLink.href = quest.wikiLink
                wikiLink.target = '_blank'
                wikiLink.textContent = quest.title
                let td = document.createElement('td')
                // let text = document.createTextNode(col)
                td.appendChild(wikiLink)
                tr.appendChild(td)
                table.appendChild(tr)
            })
        }
    })
}

// check if submitted player stats meet the quest map requirements
const checkStats = function (playerStats, quests) {
    quests.forEach(function (quest) {
        quest.eligible = true
        playerStats.forEach(function (stat, requiredStat) {
            if (stat <= quest.requiredStats.get(requiredStat)) {
                quest.eligible = false
            }
        })
    })
}