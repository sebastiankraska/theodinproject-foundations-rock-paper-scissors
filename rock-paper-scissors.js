console.log("Hello, World!")

// declaring choices for Computer and User
const choices = ["rock", "paper", "scissors"];

// mapping game rules
const gameRules = new Map([
    ["rock", "scissors"], // rock beats scissors
    ["paper", "rock"], // paper beats rock
    ["scissors", "paper"] // scissors beats paper
  ]);

// testing 
for (const [key, value] of gameRules.entries()) {
    console.log(`${key} beats ${value}`);
}


// function getComputerChoice
    // must return rock, paper or scisscors
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length); // Math random creates random number between 0 and 1, length equals 3, example: Math.random creates 0.8112313213 * 3 = 2.4...., Math Floor = 2, index 2 means the third item in the array
    return choices[randomIndex];
}

// testing random Computer Choice
console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"

// function getHumanChoice
    // use prompt to get users input
    // assume user always enters valid strings
function getUserChoice() {
    const userChoice = prompt("Enter your choice (rock, paper, scissors): ");
    // testing:
    // console.log("User chose:" + userChoice)
}

getUserChoice()

// Keep track of score with humanScore and computerScore

// new function named playRound
    // input: two paramters "humanChoice" (from getHumanChoice) and "computerChoice" (from getComputerChoice)
    // write a message to console.log, e.g. "You lose, Paper beats Rock"
    // increment humanScore and computerScore

//  "Rock beats scissors, scissors beat paper, and paper beats rock.""
    // How many variants are there? 9

// new function named playGame
    // should contain playRound and both score variables
    // Play 5 rounds
