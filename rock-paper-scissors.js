const choices = ["rock", "paper", "scissors"];

const gameRules = new Map([
    ["rock", "scissors"], // rock beats scissors
    ["paper", "rock"], // paper beats rock
    ["scissors", "paper"] // scissors beats paper
  ]);

// test of accessing Map keys and values
// for (const [key, value] of gameRules.entries()) {
//     console.log(`${key} beats ${value}`);
// }

function getComputerChoice() {
    // Math random creates random number between 0 and 1
    // There are 3 choices (length: 3)
    // Multiply random number with length, example: Math.random creates 0.8... * 3 = 2.4....
    // Math Floor transforms 2.4.. into 2
    const randomIndex = Math.floor(Math.random() * choices.length);
    // example: randomIndex 2 (key) retrieves the third item in the Map (scissors)
    return choices[randomIndex]; // returns rock, paper or scisscors
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

// function getHumanChoice
function getUserChoice() {
    const choice = prompt("Enter your choice (rock, paper, scissors): "); // assume user always enters valid strings
    return choice;
}

// For testing with static userChoice (no need to enter choice on every test)
// userChoice = "scissors"

// new function named playRound
    // input: two paramters "humanChoice" (from getHumanChoice) and "computerChoice" (from getComputerChoice)
    // write a message to console.log, e.g. "You lose, Paper beats Rock"
    // increment humanScore and computerScore
function playRound(scores, computerChoice, userChoice) {

    //  Evaluate winner / loser / ties / invalid combinations
    if (computerChoice == userChoice) {
        console.log("Tie! Both Computer and user chose " + userChoice);
        scores.ties++;
    } else if (gameRules.get(userChoice) == computerChoice) {
        console.log("You win! " + userChoice + " (UserChoice) beats " + computerChoice + " (ComputerChoice)");
        scores.human++;
    } else if (gameRules.get(computerChoice) == userChoice) {
        console.log("You lose! " + computerChoice + " (ComputerChoice) beats " + userChoice + "( UserChoice)");
        scores.computer++;
    } else {
        console.log("Invalid combination / Error");
        scores.errors++;
    }

}

// new function named playGame
    // should contain playRound and both score variables
    // Play 5 rounds
function playGame() {
    // Keep track of score with humanScore and computerScore
    const scores = { human: 0, computer: 0, ties: 0, errors: 0 };

    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const userChoice = getUserChoice();
        console.log("Userchoice is: " + userChoice + " ---- Computerchoice is: " + computerChoice);
        playRound(scores, computerChoice, userChoice);
    };

    console.log("Human Score: " + scores.human);
    console.log("Computer Score: " + scores.computer);
    console.log("Ties: " + scores.ties);
    console.log("Errors: " + scores.errors);
}

playGame();
