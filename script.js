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
    return Math.floor(Math.random() * 10)+1;
}
function d6() {
    return Math.floor(Math.random() * 6)+1;
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
    returnHTML +=  `<p><strong>Family Ranking: [${familyRankingRoll}]</strong> ${familyRanking[familyRankingRoll-1]}</p>`;
    
    //Parent Status
    if (parentsRoll <= 5)
    {
        returnHTML += `<p><strong>Parent Status: [${parentsRoll}]</strong> Both parents are Alive</p>`;
    }
    else
    {
        returnHTML += `<p><strong>Parent Status: [${familyTragedyRoll}]</strong> ${somethingHappenedToParents[familyTragedyRoll-1]}</p>`;
    }

    //Family Status
    if (familyStatusRoll > 5)
    {
        returnHTML += `<p><strong>Family Status: [${familyStatusRoll}]</strong> Your extended family is fine</p>`;
    }
    else
    {
        returnHTML += `<p><strong>Family Status: [${familyStatusRoll}]</strong> ${familyTragedy[familyTragedyRoll-1]}</p>`;
    }

    //Childhood Environment
    returnHTML += `<p><strong>Childhood Environment: [${childhoodEnvironmentRoll}]</strong> ${childhoodEnvironment[childhoodEnvironmentRoll-1]}</p>`;

    //Siblings
    if (siblingsRoll > 6)
    {
        returnHTML += `<p><strong>Siblings: [${siblingsRoll}]</strong> You are an Only Child</p>`;
    }
    else
    {
        returnHTML += `<p><strong>Siblings:</strong> You have ${siblingsRoll} sibling(s)</p>`;
        for (let i = 0; i <= siblingsRoll-1; i++) {
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

    return `<li>${age} ${gender} who ${siblingFeelings[Math.ceil((attitudeRoll)/2)-1]}</li>`;
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
    returnHTML +=  `<p><strong>Clothes: </strong>[${clothesRoll}] ${clothes[clothesRoll-1]}</p>`;
    
    //Hair
    returnHTML +=  `<p><strong>Hair: </strong>[${hairRoll}] ${hairstyle[hairRoll-1]}</p>`;

    //Affectations
    returnHTML +=  `<p><strong>Affectations: </strong>[${affectationsRoll}] ${affectations[affectationsRoll-1]}</p>`;

    //Ethnicity
    returnHTML +=  `<p><strong>Ethnicity: </strong>[${ethnicityRoll}] ${ethnicity[ethnicityRoll-1]}</p>`;
    
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
    returnHTML += `<p><strong>Personality Traits: [${personalityRoll}] </strong> ${personalityTraits[personalityRoll-1]}</p>`;
    returnHTML += `<p><strong>Valued Person: [${valuedPersonRoll}]</strong> ${valuedPerson[valuedPersonRoll-1]}</p>`;
    returnHTML += `<p><strong>Value Most: [${valueMostRoll}]</strong> ${valueMost[valueMostRoll-1]}</p>`;
    returnHTML += `<p><strong>Feel About People: [${feelAboutPeopleRoll}]</strong> ${feelAboutPeople[feelAboutPeopleRoll-1]}</p>`;
    returnHTML += `<p><strong>Valued Possession: [${valuedPossessionRoll}]</strong> ${valuedPossession[valuedPossessionRoll-1]}</p>`;

    let result = document.createElement('div');
    result.id = "Motivations";
    result.classList.add('container');
    result.classList.add('result');

    result.innerHTML = returnHTML;
    return result;
}

function generateLifeEvents(){

    const ageRolls = d6() + d6();
    const actualAge = ageRolls+16;

    let returnHTML = `<h1>Life Events</h1>`;

    returnHTML += `<p><strong>Age:</strong> ${actualAge}</p>`;

    returnHTML += `<h1>Yearly Events</h1>`;
    for (let i = 1; i < ageRolls+1; i++){
        let yearEvents = generateYearEvents();
        if(yearEvents === ``) continue;
        
        returnHTML += `<li>[${16+i}] ${yearEvents}</li>`;
    }
    
    let result = document.createElement('div');
    result.id = "LifeEvents";
    result.classList.add('container');
    result.classList.add('result');

    result.innerHTML = returnHTML;
    return result;
}

function generateYearEvents() {
    const yearRoll = d10();

    if (yearRoll <= 4) {
       return generateBigWinOrLoss();
    } else if (yearRoll <= 6) {
       return generateFriendsOrEnemies();
    } else if (yearRoll <= 8) {
       return generateRomanticInvolvement();
    } else {
        return ``;
    }
}

function generateFriendsOrEnemies(){
    return Math.random() > 0.5 ? generateFriend() : generateEnemy();
}

function generateFriend(){
    const friendRoll = d10();
    const gender = friendRoll % 2;
    let secondaryText = ``;
    
    switch (friendRoll){
        case 1:
            secondaryText = `they're like a big ${gender ? `brother` : `sister`} to you`; break;
        case 2:
            secondaryText = `they're like a kid ${gender ? `brother` : `sister`} to you`; break;
        case 3:
            secondaryText = `they're a teacher or mentor`; break;
        case 4:
            secondaryText = `they're a partner or co-worker`; break;
        case 5:
            secondaryText = `they're an old lover`; break;
        case 6:
            secondaryText = `they're an old enemy`; break;
        case 7:
            secondaryText = `they're like a foster parent to you`; break;
        case 8:
            secondaryText = `they're a relative`; break;
        case 9:
            secondaryText = `someone you've known from childhood`; break;
        case 10:
            secondaryText = `you met through common interests`; break;
    }
    return `You made a friend, ${secondaryText}.`;
}

const enemyWho = [
    `they used to be a friend`,
    `they're an ex lover`,
    `they're a relative`,
    `you've disliked each other since childhood`,
    `they're your current boss`,
    `they're your colleague or partner`,
    `a member of a Booster Gang`,
    `a government a official`
]

const enemyResponse = [
    `go into a murderous killing rage`,
    `go into a murderous killing rage`,
    `avoid the scum`,
    `avoid the scum`,
    `backstab them indirectly`,
    `backstab them indirectly`,
    `ignore the scum`,
    `ignore the scum`,
    `rip into them verbally`,
    `rip into them verbally`,
]

const enemyFriends = [
    `work alone`,
    `work alone`,
    `work alone`,
    `have a few friends`,
    `have a few friends`,
    `are a gang member`,
    `are a gang member`,
    `have the backing of a small corporation`,
    `have the backing of a large corporation`,
    `have the backing of an entire government agency`,
]

function generateEnemyWhy(){
    const whyRoll = d10();
    const you = whyRoll % 2 ? `you` : `they`;
    const them = whyRoll % 2? `them` : `you`;
    const their = whyRoll % 2? `their` : `your`;
    
    switch (whyRoll){
        case 1:
            return `${you} caused ${them} to lose face or status`;
        case 2:
            return `${you} caused ${them} to lose a lover`;
        case 3:
            return `${you} majorly humiliated ${them}`;
        case 4:
            return `${you} accused ${them} of a serious personal flaw`
        case 5:
            let injuryRoll = d6();
            let injury = ``;
            if(injuryRoll <= 2){
                injury = 'the loss of an eye'
            }else if(injuryRoll <= 4){
                injury = 'the loss of an arm'
            }else if(injuryRoll <= 6){
                injury = 'serious permanent scarring'
            }
            
            return `${you} physically disfigured ${them}. Causing ${injury}`
        case 6:
            return `${you} deserted or betrayed ${them}`
        case 7:
            return `${you} turned down a job or romantic offer from ${them}`
        case 8:
            return `you just don't like each other`
        case 9:
            return `they're a romantic rival`
        case 10:
            return `${you} foiled one of ${their} plans`
       
    }
}

function generateEnemy(){
    return `You made an enemy, ${enemyWho[d10()-1]}. You became enemies because ${generateEnemyWhy()}. If you see each other, you'll ${enemyResponse[d10()-1]}. They ${enemyFriends[d10()-1]}.`;
}

function generateRomanticInvolvement(){
    return "Romantic Involvement";
}

function generateBigWinOrLoss(){
    const roll = d10() + 1;
    const even = roll % 2;
    
    return even ? generateLucky()+"." : generateDisaster();
}

function generateLucky(){
    const roll = d10() + 1;

    switch (roll) {
        case 1:
            let friend = ``;
            let friendRoll = d10()+1;
            if (friendRoll <= 4) {
                friend = `Police Department`;
            } else if (friendRoll <= 7) {
                friend = `District Attorneys Office`;
            } else if (friendRoll <= 10) {
                friend = `Mayors Office`;
            } else {
                return ``;
            }
            
            return `You made a powerful connection in the ${friend}`;
        case 2:
            return `You received ${(d10()+1)*100} eurodollars from a Financial Windfall`;
        case 3:
            return `You received ${(d10()+1)*100} eurodollars from a Big Score on a job`;
        case 4:
            return `You Found a Sensei. Begin at +2 or add +1 to a Martial Arts skill`;
        case 5:
            return `You Found a Teacher. Begin at +2 or add +1 to any INT based skill`;
        case 6:
            return `A powerful corporate exec now owes you a favor`;
        case 7:
            return `You made friends with local Nomads. You can call them for one Favor a month, equivalent to a Family Special Ability of +2`;
        case 8:
            return `You made a friend on the police force. You can use him for insider info equivalent to a Streetwise level of +2 on any police related situation`;
        case 9:
            return `A local BoosterGang likes you....somehow. You can call upon them for a favour once a month,  equivalent to a Family Special Ability of +2. Be careful.`;
        case 10:
            return `You found a Combat Teacher. +1 to any weapon skill (except Martial Arts or Brawling) or begin a new Combat Skill at +2`;
        default:
            return `<strong>Lucky [${roll}]</strong>: Nothing of note happens.`;
    }
}

function generateDisaster(){
    let roll = d10() + 1;
    let secondaryRoll = d10() +1;
    let secondaryText = ``;

    switch (roll) {
        case 1:
            return `You lost ${(d10()+1)*100} eurodollars. If you can't pay this now, it becomes debt`;
        case 2:
            return `You were imprisoned or held hostage for ${d10()+1} month(s)`;
        case 3:
            return `Contracted either an illness, or a drug habit. Permanently lose 1 REF`;
        case 4:
            if (secondaryRoll <= 3) {
                secondaryText = `are being blackmailed`;
            } else if (secondaryRoll <= 7) {
                secondaryText = `a secret was exposed`;
            } else if (secondaryRoll <= 10) {
                secondaryText = `it was a close friend, or romantic partner`;
            } else {
                return ``;
            }
            
            return `You were Betrayed and ${secondaryText}`;
        case 5:
            if (secondaryRoll <= 4) {
                secondaryText = `suffered a horrible disfigurement (-4 ATT Permanently)`;
            } else if (secondaryRoll <= 6) {
                secondaryText = `were hospitalised for ${d10()+1} months`;
            } else if (secondaryRoll <= 8) {
                secondaryText = `lost ${d10()+1} months of memory from that year`;
            } else if (secondaryRoll <= 10) {
                secondaryText = `have constant nightmares about it (8/10 chance per night)`;
            } else {
                return ``;
            }

            return `You were in a serious accident and ${secondaryText}`;
        case 6:
            if (secondaryRoll <= 5) {
                secondaryText = ` in an accident`;
            } else if (secondaryRoll <= 8) {
                secondaryText = `, murdered by unknown parties`;
            } else if (secondaryRoll <= 10) {
                secondaryText = `, murdered, and you know the culprit`;
            } else {
                return ``;
            }
            return `Your lover, friend or relative was killed${secondaryText}`;
        case 7:
            if (secondaryRoll <= 3) {
                secondaryText = `theft`;
            } else if (secondaryRoll <= 5) {
                secondaryText = `cowardice`;
            } else if (secondaryRoll <= 8) {
                secondaryText = `murder`;
            } else if (secondaryRoll <= 9) {
                secondaryText = `rape`;
            } else if (secondaryRoll <= 10) {
                secondaryText = `lying or betrayal`;
            }else {
                return ``;
            }
            return `You were set up, accused of ${secondaryText}`;
        case 8:
            if (secondaryRoll <= 3) {
                secondaryText = `Only a few cops want you`;
            } else if (secondaryRoll <= 6) {
                secondaryText = `The entire local force is after you`;
            } else if (secondaryRoll <= 8) {
                secondaryText = `The State Police/Militia are after you`;
            } else if (secondaryRoll <= 10) {
                secondaryText = `The FBI or an equivalent national force are after you`;
            } else {
                return ``;
            }
            return `You are hunted by the law, for crimes you may or may not have done. ${secondaryText}`;
        case 9:
            if (secondaryRoll <= 3) {
                secondaryText = `from a small local firm`;
            } else if (secondaryRoll <= 6) {
                secondaryText = `from a medium sized, statewide, corp`;
            } else if (secondaryRoll <= 8) {
                secondaryText = `from a big national corp`;
            } else if (secondaryRoll <= 10) {
                secondaryText = `from a huge multinational corp`;
            } else {
                return ``;
            }
            return `You've angered some corporate honcho ${secondaryText}`;
        case 10:
            if (secondaryRoll <= 3) {
                secondaryText = `serious physical breakdown, lose 1 REF permanently`;
            } else if (secondaryRoll <= 7) {
                secondaryText = `serious mental breakdown, lose 1 CL permanently`;
            } else if (secondaryRoll <= 10) {
                secondaryText = `serious psychotic episode, lose 1 CL and 1 REF permanently`;
            } else {
                return ``;
            }
            return `You've had a ${secondaryText}`;
        default:
            return ``
    }
}

document.getElementById("rollBtn").addEventListener("click", () => {
    let sectionExists = document.getElementById("Style"); 
    
    if (!sectionExists) {
        generateNewLifePath()
        
    }else{
        document.getElementById("wrapper").removeChild(document.getElementById("Style"));
        document.getElementById("wrapper").removeChild(document.getElementById("Family"));
        document.getElementById("wrapper").removeChild(document.getElementById("Motivations"));
        document.getElementById("wrapper").removeChild(document.getElementById("LifeEvents"));
        generateNewLifePath();
    }
});

function generateNewLifePath(){
    document.getElementById("wrapper").appendChild(generateStyleAndOrigins());
    document.getElementById("wrapper").appendChild(generateFamilyBackground());
    document.getElementById("wrapper").appendChild(generateMotivations());
    document.getElementById("wrapper").appendChild(generateLifeEvents());
}