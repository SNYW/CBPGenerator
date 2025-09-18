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

const somethingHappenedToParents = [
    "Your parent(s) died in warfare.",
    "Your parent(s) died in an accident.",
    "Your parent(s) were murdered.",
    "Your parent(s) have amnesia and don’t remember you.",
    "You never knew your parent(s).",
    "Your parent(s) are in hiding to protect you.",
    "You were left with relatives for safekeeping.",
    "You grew up on the Street and never had parents.",
    "Your parent(s) gave you up for adoption.",
    "Your parent(s) sold you for money."
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

const childhoodEnvironment = [
    "Spent on the Street, with no adult supervision.",
    "Spent in a safe Corporate Suburbia.",
    "In a Nomad Pack moving from town to town.",
    "In a decaying, once-upscale neighborhood.",
    "In a defended Corporate Zone in the central City.",
    "In the heart of the Combat Zone.",
    "In a small village or town far from the City.",
    "In a large arcology city.",
    "In an aquatic Pirate Pack.",
    "On a Corporate-controlled Farm or Research Facility."
];

const siblingFeelings = [
    "dislikes you.",   
    "likes you.",
    "is neutral towards you.",
    "hero worships you.",
    "hates you."
];

function d10() {
    return Math.floor(Math.random() * 10);
}

function generateLifepath() {
    
    const familyRankingRoll = d10();
    const parentsRoll = d10();
    const familyStatusRoll = d10();
    const familyTragedyRoll = d10();
    const childhoodEnvironmentRoll = d10();
    const siblingsRoll = d10();
    
    
    let returnHTML =  `<p><strong>Family Ranking [${familyRankingRoll + 1}]</strong>: ${familyRanking[familyRankingRoll]}</p>`;
    
    //Parent Status
    if (parentsRoll <= 5)
    {
        returnHTML += `<p><strong>Parent Status [${parentsRoll + 1}]</strong> Both parents are Alive</p>`;
    }
    else
    {
        returnHTML += `<p><strong>Parent Status [${parentsRoll + 1}]</strong> ${somethingHappenedToParents[familyTragedyRoll]}</p>`;
    }

    //Family Status
    if (familyStatusRoll > 5)
    {
        returnHTML += `<p><strong>Family Status: [${familyStatusRoll + 1}]</strong> Your family is fine</p>`;
    }
    else
    {
        returnHTML += `<p><strong>Family Status: [${familyStatusRoll + 1}]</strong> ${familyTragedy[familyTragedyRoll]}</p>`;
    }

    //Childhood Environment
    returnHTML += `<p><strong>Childhood Environment: [${childhoodEnvironmentRoll + 1}]</strong> ${childhoodEnvironment[childhoodEnvironmentRoll]}</p>`;

    //Siblings
    if (siblingsRoll > 6)
    {
        returnHTML += `<p><strong>Siblings: [${siblingsRoll + 1}]</strong> You are an Only Child</p>`;
    }
    else
    {
        returnHTML += `<p><strong>Siblings: [${siblingsRoll + 1}]</strong> You have ${siblingsRoll} sibling(s)</p>`;
        for (let i = 0; i < siblingsRoll; i++) {
           returnHTML += generateSibling(i);
        }
    }
    
    return returnHTML;
}

function generateSibling(siblingNumber){
    
    let genderRoll = d10();
    let gender = genderRoll % 2 ? "Brother" : "Sister";
    let olderRoll = d10();
    let age = olderRoll > 5 ? "An Older" : "A younger";
    if(olderRoll === 9) age = "A Twin";
    let attitudeRoll = d10();
    
    return `<p><strong>[${siblingNumber}] ${age} ${gender} who ${siblingFeelings[Math.ceil((attitudeRoll+1)/2)]}</p>`;
}

document.getElementById("rollBtn").addEventListener("click", () => {
    document.getElementById("result").innerHTML = generateLifepath();
});
