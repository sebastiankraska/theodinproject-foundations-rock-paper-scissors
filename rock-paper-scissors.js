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

// For testing purposes
// const computerChoice = "rock"
// moved to playRound function


// testing random Computer Choice
// console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
// console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
// console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
// console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
// console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
// console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
// console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
// console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"
// console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"

// function getHumanChoice
    // use prompt to get users input
    // assume user always enters valid strings
function getUserChoice() {
    const choice = prompt("Enter your choice (rock, paper, scissors): ");
    // testing:
    // console.log("User chose:" + userChoice)
    return choice;
}

// Disabled for testing purposes
// userChoice = "scissors"
// moved to playRound function



// new function named playRound
    // input: two paramters "humanChoice" (from getHumanChoice) and "computerChoice" (from getComputerChoice)
    // write a message to console.log, e.g. "You lose, Paper beats Rock"
    // increment humanScore and computerScore
function playRound(scores) {

    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice();

    console.log("Result of playRound function is: " + userChoice + " and " + computerChoice);

    //  Evaluate winner / loser / ties / invalid combinations
    if (computerChoice == userChoice) {
        console.log("Tie! Computer and user chose " + userChoice);
    } else if (gameRules.get(userChoice) == computerChoice) {
        console.log("You win! " + userChoice + " (UserChoice) beats " + computerChoice + " (ComputerChoice)");
        scores.human++;
    } else if (gameRules.get(computerChoice) == userChoice) {
        console.log("You lose! " + computerChoice + " (ComputerChoice) beats " + userChoice + "( UserChoice)");
        scores.computer++;
    } else {
        console.log("Invalid combination / Error")
    }

}

// for testing 
// playRound(userChoice, computerChoice)

// console.log("Key: " + computerChoice + "----- Value: " + gameRules.get(computerChoice))

// new function named playGame
    // should contain playRound and both score variables
    // Play 5 rounds
function playGame() {
    // Keep track of score with humanScore and computerScore
    const scores = { human: 0, computer: 0 };

    for (let i = 0; i < 5; i++) {
        playRound(scores);
    };

    console.log("Human Score: " + scores.human);
    console.log("Computer Score: " + scores.computer);
}

playGame();
