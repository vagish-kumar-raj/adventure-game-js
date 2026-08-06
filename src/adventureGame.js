const readline = require("readline-sync");

/*
! Adventure Game
This game will be a text-based adventure game where the player will be able to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change based on their decisions.
*/

// * Welcome Message
console.log("Welcome to the Adventure Game! \nPrepare yourself for an epic journey!");
// Get player name using readline-sync
let playerName = readline.question("What your player's name? : ");
// Create variables for player stats
let playerHealth = 100;
let playerGold = 20;
let currentLocation = "village";
let gameRunning = true;
let inventory = [];
// Display welcome message and starting stats
console.log(`Welcome to the adventure, ${playerName}!`);
console.log(`You have ${playerGold} gold coins.`);
