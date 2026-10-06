// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.
// The player calls makeSword()
// System check if forge heat is 30< 
// IF YES: subtract 30 heat, add 1 sword, and show a success message
// IF NO: No change, show message saying 'more heat needed'
// Then, refresh the forge display to show the new heat, sword count, and status.

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.
const forge = document.querySelector('#forge');
const forgeImage = document.querySelector('#forge-image');
const forgeStatus = document.querySelector('#forge-status');
const heatDisplay = document.querySelector('#heat-value');
const swordCount = document.querySelector('#sword-count');
const actionMessage = document.querySelector('#action-message');

// 2. Create the two state variables: heat and swords made.
let forgeHeat = 20;
let swordMade = 0;

// 3. Write getForgeStatus(heatValue). Return the correct status string.
function getForgeStatus(heatValue) {
    if (heatValue < 30) {
        return 'Too cold!';
    } else if (heatValue <70) {
        return 'Ready to Forge!';
    } else {
        return 'Roaring hot!';
    }
}

// 4. Write updateForge(). Update text and apply one status class.
function updateForge() {
    heatDisplay.textContent = forgeHeat;
    swordCount.textContent = swordsMade;

    const currentStatus = getForgeStatus(forgeHeat);
    forgeStatus.textContent = currentStatus;

//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.
    forge.classList.remove("is-cold", "is-ready", "is-roaring");

    if (currentStatus === "Too cold!") {
        forge.classList.add("is-cold");
        forgeImage.src = "assets/forge-cold.svg";
        forgeImage.alt = "A cold forge with no fire.";
    } else if (currentStatus === "Ready to Forge!") {
        forge.classList.add("is-ready");
        forgeImage.src = "assets/forge-ready.svg";
        forgeImage.alt = "A forge with a small fire.";
    } else {
        forge.classList.add("is-roaring");
        forgeImage.src = "assets/forge-roaring.svg";
        forgeImage.alt = "A stone forge with tall bright flames and sparks";
    }
}

// 5. Write resetForge(). Restore the state, message, and display.
function resetForge() {
    forgeHeat = 20;
    swordsMade = 0;
    actionMessage.textContent = "Welcome to the Forge! Add Heat to begin.";
    updateForge();
}

// 6. Write heatForge(amount). Add heat, cap it, and update the page.
function heatForge(amount) {
    forgeHeat = forgeHeat + amount;

    if (forgeHeat > 100) {
        forgeHeat = 100;
    }

    actionMessage.textContent = "You stoke the forge. Heat is now " + forgeHeat + ".";
    updateForge();
}

// 7. Write makeSword(). Handle both success and insufficient heat.
function makeSword() {
    if (forgeHeat >= 30) {
        forgeHeat = forgeHeat - 30;
        swordsMade = swordsMade + 1;
        actionMessage.textContent = "You forge a sword! Swords Made: " + swordsMade + ".";
    } else { 
        actionMessage.textContent = "The forge needs more Heat! 30 Heat is required to make a sword.";
    }

    updateForge();

}

// 8. Call resetForge() once to start the game.
resetForge();

// Use the tests in ASSIGNMENT.md to check your work.
// Checked the code in live server via provided tests, adding this message to complete the assignment.

