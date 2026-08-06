const readline = require("readline-sync");

/*
! Adventure Game
This game will be a text-based adventure game where the player will be able to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change based on their decisions.
*/
console.log("=================================");
console.log("||     The Dragon's Quest      ||");
console.log("=================================");
console.log("Defeat the dragon in the mountains!");
console.log("Prepare yourself for an epic journey!");
// Get player name using readline-sync
let playerName = readline.question("What's your name? : ");
// Create variables for player stats
let playerHealth = 100;
let playerGold = 20;
let currentLocation = "village";
let gameRunning = true;
let inventory = [];
// Display welcome message and starting stats
console.log(`Welcome to the adventure, ${playerName}!`);
console.log(`You have ${playerGold} gold coins.`);
