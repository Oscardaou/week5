const playerText=document.querySelector('.playerScore');
const computerText=document.querySelector('.compScore');
const resultText=document.querySelector('#b');
const choiceBtns=document.querySelector('.but');
var roundPoint=document.getElementById('roundPoint');
var gamePoint=document.getElementById('gamePoint');
let player=0;
let ter=0;
let result;
var x=1;

function winner(playchoice){
    console.log('Player: '+ player+' computer '+ter);
    computerTurn(playchoice);
    roundPoint.innerHTML='Round '+ x;
    x++;
    if(player ==5 ){
        alert('You win this game');
        player=0;
        ter=0;
        x=1;
    }
    if(ter ==5 ){
        alert('You lost this game   Choose a weapon to start again');
        player=0;
        ter=0;
        x=1;
    }
}

function computerTurn(playchoice){
    var coomp=document.getElementById('comp');
    var playerText=document.getElementById('playerText');
    

    const randNumb=Math.floor(Math.random()*3)+1;
    switch(randNumb){
        case 1:
            computer='ROCK';
            break;
        case 2:
            computer='PAPER';
            break;
        case 3:
            computer='SCISSOR';
            break;    
    }
    coomp.textContent='COMPUTER : '+computer;
    playerText.innerHTML='PLAYER : '+playchoice;
        console.log('66');
    var n=checkWinner(playchoice,computer);
    if(n==1){player++;}
        else if(n==2) {ter++;}
    gamePoint.innerHTML='Player score : '+ player +'\tComputer score : '+ ter ;
    console.log('77');
}

function checkWinner(a,b){
    console.log('1');
    var pp=0,cc=0,x=1;
        console.log('2');
        
        if(a===b){
            roundPoint.innerHTML="it's a tie !!!";
        }
        if(a==='ROCK' ){
            if (b==='PAPER'){
                return 2;
            }
            if(b==='SCISSOR'){
                return 1;
            }
        }   
        if(a==='PAPER'){
            if (b==='ROCK'){
                return 1;
            }
            if(b==='SCISSOR'){
                return 2;
            }
        }
        if(a==='SCISSOR'){
            if (b==='PAPER'){
                return 1;
            }
            if(b==='ROCK'){
                return 2;
            }
        }
        x++;
}