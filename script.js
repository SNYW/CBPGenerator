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

function generateFamilyBackground() {
    
    const familyRankingRoll = d10();
    const parentsRoll = d10();
    const familyStatusRoll = d10();
    const familyTragedyRoll = d10();
    const childhoodEnvironmentRoll = d10();
    const siblingsRoll = d10();

    let returnHTML = `<h1>Family Background</h1>`;
    
    //Family Ranking
    returnHTML +=  `<p><strong>Family Ranking [${familyRankingRoll + 1}]</strong>: ${familyRanking[familyRankingRoll]}</p>`;
    
    //Parent Status
    if (parentsRoll <= 5)
    {
        returnHTML += `<p><strong>Parent Status [${parentsRoll + 1}]</strong> Both parents are Alive</p>`;
    }
    else
    {
        returnHTML += `<p><strong>Parent Status [${familyTragedyRoll + 1}]</strong> ${somethingHappenedToParents[familyTragedyRoll]}</p>`;
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
        returnHTML += `<p><strong>Siblings: [${siblingsRoll + 1}]</strong> You have ${siblingsRoll+1} sibling(s)</p>`;
        for (let i = 0; i < siblingsRoll+1; i++) {
           returnHTML += generateSibling();
        }
    }

    let result = document.createElement('div');
    result.id = "Family";
    result.classList.add('container');
    result.classList.add('result');

    result.innerHTML = returnHTML;
    return result;
}

function generateSibling(){

    let genderRoll = d10();
    let gender = genderRoll % 2 ? "Brother" : "Sister";
    let olderRoll = d10();
    let age = olderRoll > 5 ? "An Older" : "A Younger";
    if(olderRoll === 9) age = "A Twin";
    let attitudeRoll = d10();

    return `<li>${age} ${gender} who ${siblingFeelings[Math.ceil((attitudeRoll+1)/2)-1]}</li>`;
}

const clothes = [
    "Biker leathers",
    "Blue jeans",
    "Corporate suits",
    "Jumpsuits",
    "Miniskirts",
    "High fashion",
    "Cammos",
    "Normal clothes",
    "Nude",
    "Bag lady chic"
];

const hairstyle = [
    "Mohawk",
    "Long & ratty",
    "Short & spiked",
    "Wild & all over",
    "Bald",
    "Striped",
    "Tinted",
    "Neat, short",
    "Short, curly",
    "Long, straight"
];

const affectations = [
    "Tattoos",
    "Mirrorshades",
    "Ritual scars",
    "Spiked gloves",
    "Nose rings",
    "Earrings",
    "Long fingernails",
    "Spike-heeled boots",
    "Weird contact lenses",
    "Fingerless gloves"
];

const ethnicity = [
    "Anglo-American (Language: English)",
    "African (Language: Bantu, Fante, or others)",
    "Japanese/Korean (Language: Japanese or Korean)",
    "Central European/Soviet (Language: Russian, Polish, or others)",
    "Pacific Islander (Language: Polynesian, Micronesian, or others)",
    "Chinese/Southeast Asian (Language: Mandarin, Cantonese, or others)",
    "Black American (Language: English, Blackfolk slang)",
    "Hispanic American (Language: Spanish)",
    "Central/South American (Language: Spanish or Portuguese)",
    "European (Language: French, German, Spanish, or others)"
];

function generateStyleAndOrigins() {

    const clothesRoll = d10();
    const hairRoll = d10();
    const affectationsRoll = d10();
    const ethnicityRoll = d10();

    let returnHTML = `<h1>Origins and Personal Style</h1>`;

    //Clothes
    returnHTML +=  `<p><strong>Clothes: </strong>[${clothesRoll + 1}] ${clothes[clothesRoll]}</p>`;
    
    //Hair
    returnHTML +=  `<p><strong>Hair: </strong>[${hairRoll + 1}] ${hairstyle[hairRoll]}</p>`;

    //Affectations
    returnHTML +=  `<p><strong>Affectations: </strong>[${affectationsRoll + 1}] ${affectations[affectationsRoll]}</p>`;

    //Ethnicity
    returnHTML +=  `<p><strong>Ethnicity: </strong>[${ethnicityRoll + 1}] ${ethnicity[ethnicityRoll]}</p>`;
    
    let result = document.createElement('div');
    result.id = "Style";
    result.classList.add('container');
    result.classList.add('result');

    result.innerHTML = returnHTML;
    return result;
}

const personalityTraits = [
    "Shy and secretive",
    "Rebellious, antisocial, violent",
    "Arrogant, proud, aloof",
    "Moody, rash, headstrong",
    "Picky, fussy, nervous",
    "Stable and serious",
    "Silly and fluff-headed",
    "Sneaky and deceptive",
    "Intellectual and detached",
    "Friendly and outgoing"
];

const valuedPerson = [
    "A parent",
    "A brother or sister",
    "A lover",
    "A friend",
    "Yourself",
    "A pet",
    "A teacher or mentor",
    "A public figure",
    "A personal hero",
    "No one"
];

const valueMost = [
    "Money",
    "Honor",
    "Your word",
    "Honesty",
    "Knowledge",
    "Vengeance",
    "Love",
    "Power",
    "Family",
    "Friendship"
];

const feelAboutPeople = [
    "Neutral — most people aren't worth the time",
    "I like almost everyone",
    "I hate almost everyone",
    "People are tools. Use them for your own goals, then discard them",
    "Every person is a valuable individual",
    "People are obstacles to be destroyed if they cross me",
    "People are untrustworthy. Don’t depend on anyone",
    "Wipe ‘em all out and let the cockroaches take over",
    "People are wonderful!",
    "People are trash waiting to be burned"
];

const valuedPossession = [
    "A weapon",
    "A tool",
    "A piece of clothing",
    "A photograph",
    "A book or diary",
    "A recording",
    "A musical instrument",
    "A piece of jewelry",
    "A toy",
    "A letter"
];

function generateMotivations(){
    
    const personalityRoll = d10();
    const valuedPersonRoll = d10();
    const valueMostRoll = d10();
    const feelAboutPeopleRoll = d10();
    const valuedPossessionRoll = d10();

    let returnHTML = `<h1>Motivations</h1>`;

    // Motivations
    returnHTML += `<p><strong>Personality Traits [${personalityRoll + 1}] </strong> ${personalityTraits[personalityRoll]}</p>`;
    returnHTML += `<p><strong>Valued Person [${valuedPersonRoll + 1}]:</strong> ${valuedPerson[valuedPersonRoll]}</p>`;
    returnHTML += `<p><strong>Value Most [${valueMostRoll + 1}]:</strong> ${valueMost[valueMostRoll]}</p>`;
    returnHTML += `<p><strong>Feel About People [${feelAboutPeopleRoll + 1}]:</strong> ${feelAboutPeople[feelAboutPeopleRoll]}</p>`;
    returnHTML += `<p><strong>Valued Possession [${valuedPossessionRoll + 1}]:</strong> ${valuedPossession[valuedPossessionRoll]}</p>`;

    let result = document.createElement('div');
    result.id = "Motivations";
    result.classList.add('container');
    result.classList.add('result');

    result.innerHTML = returnHTML;
    return result;
}

document.getElementById("rollBtn").addEventListener("click", () => {
    let sectionExists = document.getElementById("Style"); 
    
    if (!sectionExists) {
        document.getElementById("wrapper").appendChild(generateStyleAndOrigins());
        document.getElementById("wrapper").appendChild(generateFamilyBackground());
        document.getElementById("wrapper").appendChild(generateMotivations());
    }else{
        document.getElementById("wrapper").removeChild(document.getElementById("Style"))
        document.getElementById("wrapper").removeChild(document.getElementById("Family"))
        document.getElementById("wrapper").removeChild(document.getElementById("Motivations"))
        document.getElementById("wrapper").appendChild(generateStyleAndOrigins());
        document.getElementById("wrapper").appendChild(generateFamilyBackground());
        document.getElementById("wrapper").appendChild(generateMotivations());
    }
});
