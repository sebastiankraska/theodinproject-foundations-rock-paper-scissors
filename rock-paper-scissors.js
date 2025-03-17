console.log("Hello, World!")

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
    // uses Math.random - how to use this for 3 choices?

// function getHumanChoice
    // use prompt to get users input
    // assume user always enters valid strings

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
