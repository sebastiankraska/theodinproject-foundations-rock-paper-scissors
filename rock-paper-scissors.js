const choices = ["rock", "paper", "scissors"];
const gameRules = new Map([
    ["rock", "scissors"], // rock beats scissors
    ["paper", "rock"], // paper beats rock
    ["scissors", "paper"] // scissors beats paper
  ]);
const scores = { human: 0, computer: 0, ties: 0, errors: 0 };

function checkScores() {
    // play the game until one player reaches 5 points
    if (scores.computer >= 5 || scores.human >= 5) {
        // console.log("TOTAL SCORES:");
        // console.log("Human Score: " + scores.human);
        // console.log("Computer Score: " + scores.computer);
        // console.log("Ties: " + scores.ties);
        console.log("Errors: " + scores.errors);
        const text = document.createTextNode(
            "TOTAL SCORES:" + "Human Score: " + scores.human + "Computer Score: " + scores.computer + "Ties: " + scores.ties,
          );
        logArea.appendChild(text);
    };
};
function getComputerChoice() {
    // Pick random Number depending on choices.length
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; // returns rock, paper or scisscors
};
function playRound() {
    console.log(event.target.name);
    const userchoice = event.target.name;
    const computerChoice = getComputerChoice();
    if (computerChoice == userchoice) {
        // console.log("IT'S A TIE! Both you and the computer chose " + userchoice + ".");
        const text = document.createTextNode(
            "IT'S A TIE! Both you and the computer chose " + userchoice + ".",
          );
        logArea.appendChild(text);
        scores.ties++;
    } else if (gameRules.get(userchoice) == computerChoice) {
        // console.log("YOU WIN! " + userchoice + " beats " + computerChoice + ".");
        const text = document.createTextNode(
            "YOU WIN! " + userchoice + " beats " + computerChoice + ".",
          );
        logArea.appendChild(text);
        scores.human++;
    } else if (gameRules.get(computerChoice) == userchoice) {
        // console.log("YOU LOSE! " + computerChoice + " beats " + userchoice + ".");
        const text = document.createTextNode(
            "YOU LOSE! " + computerChoice + " beats " + userchoice + ".",
          );
        logArea.appendChild(text);
        scores.computer++;
    };
    checkScores();
}

const btnRock = document.querySelector('button[name="rock"]');
btnRock.addEventListener('click', playRound);

const logArea = document.querySelector('div');