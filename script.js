/*
1.Get user input.
2.create a function to get computermove
3. compare the two to choose the winner.
4. message to declare the winner.
*/

let playerMove = prompt("Please choose a move (Rock, paper or scissors)", '');

console.log(playerMove);

function getcomputerMove(){
    let randomNumber = Math.random();

    let computerMove = '';

    if(randomNumber > 0 && randomNumber < 1 / 3){
        computerMove = 'Rock';
    }
    else if(randomNumber > 1 /3 && randomNumber < 2 / 3){
        computerMove = 'Paper';
    }
    else if(randomNumber > 2 / 3 && randomNumber < 1){
        computerMove = 'Scissors';
    } 

    console.log(computerMove);
    }

getcomputerMove();