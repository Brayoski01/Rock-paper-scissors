
function getHumanChoice(){
    let Choice = prompt("Choose one (Rock, paper, scissors): ", '');
    console.log(Choice);
    return Choice;
}




function getComputerChoice(){
    let randomNumber = Math.random();
    let result = '';

    if(randomNumber > 0 && randomNumber < 1 / 3){
        result = 'Rock';
    }
    else if(randomNumber > 1 /3 && randomNumber < 2 / 3){
        result = 'Paper';
    }
    else if(randomNumber > 2 / 3 && randomNumber < 1){
        result = 'Scissors';
    }
    console.log(result);
    return result;
}


function playRound(humanChoice, computerChoice){

    let playerScore = 0;
    let computerScore = 0;


    if(humanChoice.toLowerCase() === 'rock'){
        if(computerChoice === 'Rock'){
            console.log('Its a Tie!');
        }
        else if(computerChoice === 'Paper'){
            console.log('paper wins!');
            computerScore += 1;
        }
        else if(computerChoice === 'Scissors'){
            console.log('Rock wins!');
            playerScore += 1;
            
        }
    }

    else if(humanChoice.toLowerCase() === 'paper'){
        if(computerChoice === 'Rock'){
            console.log('paper wins');
            playerScore += 1;
        }
        else if(computerChoice === 'Paper'){
            console.log('its a Tie');
        }
        else if(computerChoice === 'Scissors'){
            console.log('scissors wins!');
            computerScore += 1;
        }
    }

    else if(humanChoice.toLowerCase() === 'scissors'){
        if(computerChoice === 'Rock'){
            console.log('Rock wins');
            computerScore += 1;    
        }
        else if(computerChoice === 'Paper'){
            console.log('scissors wins!');
            playerScore += 1;
        }
        else if(computerChoice === 'Scissors'){
            console.log('Its a Tie!');
        }
        
    }
    console.log('playerscore:', playerScore);
    console.log('Computer score:', computerScore);
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);





