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
    // old version
    // const choice = prompt("Enter your choice (rock, paper, scissors): "); // The exercise assumes the user always enters a valid string
    // new version with string interpolation:
    const userchoice = prompt(`Enter your choice (${choices.join(", ")}): `); // Dynamically include choices in the prompt
    return userchoice;
}

// For testing with static userChoice (no need to enter choice on every test)
// userChoice = "scissors"

function playRound(scores, computerChoice, userChoice) {
    if (computerChoice == userChoice) {
        console.log("IT'S A TIE! Both you and the computer chose " + userChoice + ".");
        scores.ties++;
    } else if (gameRules.get(userChoice) == computerChoice) {
        console.log("YOU WIN! " + userChoice + " beats " + computerChoice + ".");
        scores.human++;
    } else if (gameRules.get(computerChoice) == userChoice) {
        console.log("YOU LOSE! " + computerChoice + " beats " + userChoice + ".");
        scores.computer++;
    } else {
        console.log("Invalid input / Error!");
        scores.errors++;
    }
}

function playGame() {
    // declare starting scores
    const scores = { human: 0, computer: 0, ties: 0, errors: 0 };
    // play the game until one player reaches 5 points
    while (!(scores.computer >= 5 || scores.human >= 5)) {
        const computerChoice = getComputerChoice();
        const userChoice = getUserChoice();
        playRound(scores, computerChoice, userChoice);
    };
    // Total results:
    console.log("TOTAL SCORES:");
    console.log("Human Score: " + scores.human);
    console.log("Computer Score: " + scores.computer);
    console.log("Ties: " + scores.ties);
    console.log("Errors: " + scores.errors);
}

// playGame();
