const choices = ["rock", "paper", "scissors"];
const gameRules = new Map([
    ["rock", "scissors"], // rock beats scissors
    ["paper", "rock"], // paper beats rock
    ["scissors", "paper"] // scissors beats paper
  ]);
const scores = { human: 0, computer: 0, ties: 0, errors: 0 };

// for controlling the display of scores on the page
const infoplayerscore = document.querySelector('#info-player-score');
const infocomputerscore = document.querySelector('#info-computer-score');


function checkScores() {

    // update scores on page
    infoplayerscore.textContent = scores.human;
    infocomputerscore.textContent = scores.computer;
    
    // play the game until one player reaches 5 points
    if (scores.computer >= 5 || scores.human >= 5) {
        // console.log("TOTAL SCORES:");
        // console.log("Human Score: " + scores.human);
        // console.log("Computer Score: " + scores.computer);
        // console.log("Ties: " + scores.ties);
        // console.log("Errors: " + scores.errors);
        const paragraph = document.createElement("p");
        
        if (scores.human >= 5) {
            paragraph.textContent = "!!!!!!!!!!!!!! You reached 5 points. YOU WIN! CONGRATULATIONS!!!!!!!!!!!!!!! ";
            paragraph.style.color = 'green';
        } else {
            paragraph.textContent = "!!!!!!!!!!!!!! Computer reached 5 points. YOU LOST THE GAME!!!!!!!!!!!!!!! ";
            paragraph.style.color = 'red';
        }
        logArea.appendChild(paragraph); // Append the <p> to the logArea
    };
};
function getComputerChoice() {
    // Pick random Number depending on choices.length
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; // returns rock, paper or scisscors
};
function playRound() {
    const computerChoice = getComputerChoice();
    const userchoice = event.target.name;
    if (computerChoice == userchoice) {
        const paragraph = document.createElement("p"); // Create a <p> element
        paragraph.textContent = `This is a tie. Both you and the computer chose ${userchoice}.`; // Set the message as the text content
        paragraph.style.color = '#555'
        logArea.appendChild(paragraph); // Append the <p> to the logArea
        scores.ties++;
    } else if (gameRules.get(userchoice) == computerChoice) {
        const paragraph = document.createElement("p"); // Create a <p> element
        paragraph.textContent = `You've won this round! ${userchoice} beats ${computerChoice}.`; // Set the message as the text content
        paragraph.style.color = 'green'
        logArea.appendChild(paragraph); // Append the <p> to the logArea
        scores.human++;
    } else if (gameRules.get(computerChoice) == userchoice) {
        const paragraph = document.createElement("p"); // Create a <p> element
        paragraph.textContent = `You've lost this round! ${computerChoice} beats ${userchoice}.`; // Set the message as the text content
        paragraph.style.color = 'red'
        logArea.appendChild(paragraph); // Append the <p> to the logArea
        scores.computer++;
    };
    checkScores();
}

const btnRock = document.querySelector('button[name="rock"]');
const btnPaper = document.querySelector('button[name="paper"]');
const btnScissors = document.querySelector('button[name="scissors"]');
btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);

const logArea = document.querySelector('#log-area');

let buttonarea = document.querySelector('#button-area');
buttonarea.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        case 'rock':
            console.log('rock button was clicked');
            break;
        case 'paper':
            console.log('paper button was clicked');
            break;
        case 'scissors':
            console.log('scissors button was clicked');
            break;
    }
});