const familyRanking = [
    "Corporate executive (upper echelon)",
    "Corporate manager",
    "Corporate technician",
    "Nomad pack",
    "Ganger family",
    "Crime lord family",
    "Combat zone poor",
    "Urban homeless",
    "Arcology family",
    "Farm family"
];

const parentsStatus = [
    "Both parents are alive",
    "Something has happened to one or both parents",
    "You don't know who your parents are",
    "You were raised by a foster family",
    "You were raised by your extended family (aunts/uncles, grandparents, etc.)",
    "One parent is missing, other is alive",
    "Both parents missing",
    "One parent is dead, other is alive",
    "Both parents dead",
    "Raised by an AI or corporation"
];

const familyTragedy = [
    "Your family lost everything through betrayal.",
    "Your family lost everything through bad management.",
    "Your family was exiled or otherwise driven from their original home/nation.",
    "Your family is in debt to a powerful individual or organization.",
    "Your family is disgraced or dishonored.",
    "Your family has been imprisoned, enslaved, or otherwise trapped.",
    "Your family vanished. You have no idea what happened to them.",
    "Your family was killed — you are the only survivor.",
    "Your family is involved in crime.",
    "Your family is secretly a powerful faction (but you must keep this hidden)."
];

const familyStatus = [
    "Your family is still together.",
    "Your family is scattered and you only have contact with some of them.",
    "Your family is scattered and you are on your own.",
    "Your family is in hiding to escape enemies.",
    "Your family lives in luxury, but you are not welcome.",
    "Your family is in poverty, struggling to survive.",
    "Your family is powerful and well-connected.",
    "Your family is respected and honored.",
    "Your family has fallen on hard times.",
    "Your family is cursed or haunted by something."
];

// Dice roller helper
function d10() {
    return Math.floor(Math.random() * 10);
}

function generateLifepath() {
    const family = familyBackground[d10()];
    const motivation = motivations[d10()];
    
    
    const parentStatusRoll = d10();
    const familyTragedyRoll = d10();
    const familyStatusRoll = d10();

    return rollFamilyRanking();
}

function rollFamilyRanking(){
    const familyRankingRoll = d10();
    return `<p><strong>Family Ranking: [${familyRankingRoll}]</strong> ${familyRanking[familyRankingRoll]}</p>`;
}

document.getElementById("rollBtn").addEventListener("click", () => {
    document.getElementById("result").innerHTML = generateLifepath();
});
