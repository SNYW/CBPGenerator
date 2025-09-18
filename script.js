// Example tables from Cyberpunk 2020 (simplified)
const familyBackground = [
    "Your family lost everything through betrayal.",
    "Your family is exiled or outcast.",
    "Your family is involved in crime.",
    "Your family is in debt to a powerful corporation.",
    "Your family was killed, only you survived.",
    "Your family is well-connected and powerful.",
    "Your family is part of a nomad pack.",
    "Your family is scattered, you’re alone.",
    "Your family is rich and influential.",
    "Your family has a dark secret..."
];

const motivations = [
    "Money",
    "Honor",
    "Knowledge",
    "Vengeance",
    "Love",
    "Power",
    "Fame",
    "Survival",
    "Freedom",
    "Thrills"
];

// Dice roller helper
function d10() {
    return Math.floor(Math.random() * 10);
}

function generateLifepath() {
    const family = familyBackground[d10()];
    const motivation = motivations[d10()];

    return `
    <p><strong>Family Background:</strong> ${family}</p>
    <p><strong>Motivation:</strong> ${motivation}</p>
  `;
}

document.getElementById("rollBtn").addEventListener("click", () => {
    document.getElementById("result").innerHTML = generateLifepath();
});
