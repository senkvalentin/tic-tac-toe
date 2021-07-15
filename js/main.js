/*
Project: Tic - Tac - Toe
Author:  Valentin Senk
Date:    10. 07. 2021

https://www.senkvalentin.com/
https://vali.1070.exposed/
*/
'use strict';

const APPNAME = 'Tic - Tac - Toe';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading1').innerText = APPNAME;
/*
tic tac toe - game in js
  @Valentin Senk - senkvalentin.com
          x | x | x
          x | x | x
          x | x | x
 */

//------------------------------------------------
//btn, audiofiles
//outputs and bot-toogle
const button1row1 = document.getElementById('btn1row1');
const button2row1 = document.getElementById('btn2row1');
const button3row1 = document.getElementById('btn3row1');

const button1row2 = document.getElementById('btn1row2');
const button2row2 = document.getElementById('btn2row2');
const button3row2 = document.getElementById('btn3row2');

const button1row3 = document.getElementById('btn1row3');
const button2row3 = document.getElementById('btn2row3');
const button3row3 = document.getElementById('btn3row3');

const audiofileMove = document.getElementById('audiofileMove');
const audiofileMove2 = document.getElementById('audiofileMove2');
const audiofileWin = document.getElementById('audiofileWin');
const audiofileRestart = document.getElementById('audiofileRestart');
const audiofileDraw = document.getElementById('audiofileDraw');
const audiofileBotToogle = document.getElementById('audiofileBotToogle');
const audiofileBotLose = document.getElementById('audiofileBotLose');

const restart = document.getElementById('restart');

var flexSwitchCheckDefault = document.getElementById('flexSwitchCheckDefault');
var rangeDif = document.getElementById('rangeDif');

const output2 = document.getElementById('output2');
const outputWin = document.getElementById('outputWin');
const error = document.getElementById('error');
const outputRange = document.getElementById('outputRange');


let playerX = true;
let isActiveBot = false;
let hasWonCheck = false;
let ifIsWon = false;

//default bot difficulty can be 'l' / 'm' / 's'
let defaultDif = 'm';


flexSwitchCheckDefault.addEventListener('change',function(){
  if(flexSwitchCheckDefault.checked){
    isActiveBot = true;
    resetGame('#fff');
    audiofileBotToogle.play();
  } else {
    isActiveBot = false;
    audiofileMove2.play();
  }
  
}
);

rangeDif.addEventListener('change',function(){
  if (rangeDif.value === '0') {
    outputRange.innerHTML = 'leicht';
    defaultDif = 'l';
    error.innerHTML = ' ';
  } else if (rangeDif.value === '1') {
    outputRange.innerHTML = 'mittel';
    defaultDif = 'm';
    error.innerHTML = ' ';
  } else if (rangeDif.value === '2') {
    outputRange.innerHTML = 'schwer';
    defaultDif = 's';
    outputWin.innerHTML = ' ';
    error.innerHTML = 'Schwer ist noch nicht eingebaut!';
  }
}
);

let arrayMoves = [
  button1row1,
  button2row1,
  button3row1,
  button1row2,
  button2row2,
  button3row2,
  button1row3,
  button2row3,
  button3row3];

//the default output2 text
output2.innerHTML = 'X beginnt!';

//buttons table tic tac toe oncklick functions
button1row1.onclick = function () {
  makeMove (button1row1);
};

button2row1.onclick = function () {
  makeMove (button2row1);
};

button3row1.onclick = function () {
  makeMove (button3row1);
};


button1row2.onclick = function () {
  makeMove (button1row2);
};

button2row2.onclick = function () {
  makeMove (button2row2);
};

button3row2.onclick = function () {
  makeMove (button3row2);
};


button1row3.onclick = function () {
  makeMove (button1row3);
};

button2row3.onclick = function () {
  makeMove (button2row3);
};

button3row3.onclick = function () {
  makeMove (button3row3);
};

restart.onclick = function () {
  resetGame('#fff');
};




function makeMove (button) {
  //----------new--------------
  if (hasWonCheck == false) {
    error.innerHTML = ' ';
    button.style.backgroundColor = 'rgb(32,37,41)';
    button.style.color = '#fff';
    let isValidMove = false;
    while(isValidMove === false) {
      if(button.value != ' '){
        //if button.value == X || O
        output2.innerHTML = ' ';
        error.innerHTML = 'Feld besetzt!';
        isValidMove = true;
      } else if (playerX === true){
        //if button.value == ' '
        isValidMove = true;
        button.value = 'X';
        playerX = false;
        output2.innerHTML = 'O am Zug!';
        audiofileMove.play();
        outputWin.style.color = '#6A994E';
        if(winnerOutputs('X', '#6A994E', audiofileWin, 'X') != true){
          if (isDraw('#B00020') === true){
            error.innerHTML = ' ';
            output2.innerHTML = 'Unentschieden!';
            hasWonCheck = true;
          }
        }
        if(isActiveBot === true && hasWonCheck === false){
          makeMoveBot();
        }
      } else if(isActiveBot === false){
        button.value = "O";
        output2.innerHTML = 'X am Zug!';
        audiofileMove2.play();
        isValidMove = true;
        playerX = true;
        winnerOutputs("O", '#6A994E', audiofileWin, "O"); 
      }
    }
  }
  //------------------------

}

function winnerOutputs (winningXorO, colorWin, audioWin, nameWinner) {
  if      (button1row1.value === winningXorO && button2row1.value === winningXorO && button3row1.value === winningXorO){
    button1row1.style.backgroundColor = colorWin;
    button2row1.style.backgroundColor = colorWin;
    button3row1.style.backgroundColor = colorWin;
    resetInWin(audioWin, nameWinner);
  }
  if (button1row2.value === winningXorO && button2row2.value === winningXorO && button3row2.value === winningXorO){
    button1row2.style.backgroundColor = colorWin;
    button2row2.style.backgroundColor = colorWin;
    button3row2.style.backgroundColor = colorWin;
    resetInWin(audioWin, nameWinner);
  }
  if (button1row3.value === winningXorO && button2row3.value === winningXorO && button3row3.value === winningXorO){
    button1row3.style.backgroundColor = colorWin;
    button2row3.style.backgroundColor = colorWin;
    button3row3.style.backgroundColor = colorWin;
    resetInWin(audioWin, nameWinner);
  }
  if (button1row1.value === winningXorO && button1row2.value === winningXorO && button1row3.value === winningXorO){
    button1row1.style.backgroundColor = colorWin;
    button1row2.style.backgroundColor = colorWin;
    button1row3.style.backgroundColor = colorWin;
    resetInWin(audioWin, nameWinner);
  }
  if (button2row1.value === winningXorO && button2row2.value === winningXorO && button2row3.value === winningXorO){
    button2row1.style.backgroundColor = colorWin;
    button2row2.style.backgroundColor = colorWin;
    button2row3.style.backgroundColor = colorWin;
    resetInWin(audioWin, nameWinner);
  }
  if (button3row1.value === winningXorO && button3row2.value === winningXorO && button3row3.value === winningXorO){
    button3row1.style.backgroundColor = colorWin;
    button3row2.style.backgroundColor = colorWin;
    button3row3.style.backgroundColor = colorWin;
    resetInWin(audioWin, nameWinner);
  }
  if (button1row1.value === winningXorO && button2row2.value === winningXorO && button3row3.value === winningXorO){
    button1row1.style.backgroundColor = colorWin;
    button2row2.style.backgroundColor = colorWin;
    button3row3.style.backgroundColor = colorWin;
    resetInWin(audioWin, nameWinner);
  }
  if (button1row3.value === winningXorO && button2row2.value === winningXorO && button3row1.value === winningXorO){
    button1row3.style.backgroundColor = colorWin;
    button2row2.style.backgroundColor = colorWin;
    button3row1.style.backgroundColor = colorWin;
    resetInWin(audioWin, nameWinner);
  }
  return ifIsWon;
}

function resetInWin (audioWin, nameWinner) {
  output2.innerHTML = ' ';
  error.innerHTML = ' ';
  outputWin.innerHTML = nameWinner + ' gewinnt!';
  hasWonCheck = true;
  ifIsWon = true;
  audioWin.play();
}

function resetGame (defaultColor) {
  audiofileRestart.play();
  hasWonCheck = false;

  button1row1.value = " ";
  button2row1.value = " ";
  button3row1.value = " ";

  button1row2.value = " ";
  button2row2.value = " ";
  button3row2.value = " ";

  button1row3.value = " ";
  button2row3.value = " ";
  button3row3.value = " ";

  button1row1.style.backgroundColor = defaultColor;
  button2row1.style.backgroundColor = defaultColor;
  button3row1.style.backgroundColor = defaultColor;

  button1row2.style.backgroundColor = defaultColor;
  button2row2.style.backgroundColor = defaultColor;
  button3row2.style.backgroundColor = defaultColor;

  button1row3.style.backgroundColor = defaultColor;
  button2row3.style.backgroundColor = defaultColor;
  button3row3.style.backgroundColor = defaultColor;

  
  error.innerHTML = ' ';
  outputWin.innerHTML = ' ';

  output2.innerHTML = 'X beginnt!';
  outputWin.style.color = '#6A994E';

  playerX = true;
  ifIsWon = false;
}

function isDraw (colorDraw) {
  if(button1row1.value != ' ' && button2row1.value != ' ' && button3row1.value != ' ' && button1row2.value != ' ' && button2row2.value != ' ' && button3row2.value != '' && button1row3.value != ' ' && button2row3.value != ' ' && button3row3.value != ' '){
    button1row1.style.backgroundColor = colorDraw;
    button2row1.style.backgroundColor = colorDraw;
    button3row1.style.backgroundColor = colorDraw;

    button1row2.style.backgroundColor = colorDraw;
    button2row2.style.backgroundColor = colorDraw;
    button3row2.style.backgroundColor = colorDraw;

    button1row3.style.backgroundColor = colorDraw;
    button2row3.style.backgroundColor = colorDraw;
    button3row3.style.backgroundColor = colorDraw;
    hasWonCheck = true;
    audiofileDraw.play();
    return true;
  } else return false;
}

//bot
function makeMoveBot () {
  let correctBotMove = false;
  if (defaultDif === 's') {
    makeBestMove();
  }else if (lookForTwoBot('O') != false && defaultDif === 'm') {
    makeMoveBotO(lookForTwoBot('O'));
  } else if(lookForTwoBot('X') != false && defaultDif === 'm') {
    makeMoveBotO(lookForTwoBot('X'));
  } else {
    while (correctBotMove === false){
      let randomMoveBot = arrayMoves[Math.floor(Math.random() * arrayMoves.length)];
      if (!(randomMoveBot.value === 'X' || randomMoveBot.value === 'O')){
        makeMoveBotO(randomMoveBot);
        correctBotMove = true;
      }
    }
  }
}

function lookForTwoBot (XorO) {
  let comb1 = [button1row1, button1row2, button1row3];
  let comb2 = [button2row1, button2row2, button2row3];
  let comb3 = [button3row1, button3row2, button3row3];
  let comb4 = [button1row1, button2row1, button3row1];
  let comb5 = [button1row2, button2row2, button3row2];
  let comb6 = [button1row3, button2row3, button3row3];
  let comb7 = [button1row1, button2row2, button3row3];
  let comb8 = [button1row3, button2row2, button3row1];

  if      (lookForTwo(comb1, XorO) != false)    return lookForTwo(comb1, XorO);
  else if (lookForTwo(comb2, XorO) != false)    return lookForTwo(comb2, XorO);
  else if (lookForTwo(comb3, XorO) != false)    return lookForTwo(comb3, XorO);
  else if (lookForTwo(comb4, XorO) != false)    return lookForTwo(comb4, XorO);
  else if (lookForTwo(comb5, XorO) != false)    return lookForTwo(comb5, XorO);
  else if (lookForTwo(comb6, XorO) != false)    return lookForTwo(comb6, XorO);
  else if (lookForTwo(comb7, XorO) != false)    return lookForTwo(comb7, XorO);
  else if (lookForTwo(comb8, XorO) != false)    return lookForTwo(comb8, XorO);
  else return false;
}

function lookForTwo (array, whatToLookFor) {
  if      (array[0].value === whatToLookFor && array[1].value === whatToLookFor && array[2].value === ' ')    return array[2];
  else if (array[1].value === whatToLookFor && array[2].value === whatToLookFor && array[0].value === ' ')    return array[0];
  else if (array[0].value === whatToLookFor && array[2].value === whatToLookFor && array[1].value === ' ')    return array[1];
  else return false;
}

function makeMoveBotO(buttonBot){
  if (hasWonCheck == false){
    playerX = true;
    buttonBot.style.backgroundColor = 'rgb(32,37,41)';
    buttonBot.value = 'O';
    output2.innerHTML = 'X am Zug!';
    buttonBot.style.color = '#fff';
    audiofileMove2.play();
    outputWin.style.color = '#B00020';
    winnerOutputs('O', '#B00020', audiofileBotLose, 'Bot');
  }
}

function makeBestMove () {
  let isFalseMoveRand = false;
  error.style.innerHTML = 'Noch nicht eingebaut';
  while (isFalseMoveRand === false){
    let randomMoveBotBestMove = arrayMoves[Math.floor(Math.random() * arrayMoves.length)];
    if (!(randomMoveBotBestMove.value === 'X' || randomMoveBotBestMove.value === 'O')){
      makeMoveBotO(randomMoveBotBestMove);
      isFalseMoveRand = true;
    }
  }
  outputWin.innerHTML = ' ';
  output2.innerHTML = ' ';
  error.innerHTML = 'Schwer ist noch nicht eingebaut!';
}
//^bot^


/* 
comb 1: 
xoo
xoo
xoo

comb 2:
oxo
oxo
oxo

comb 3:
oox
oox
oox

comb 4:
xxx
ooo
ooo

comb 5:
ooo
xxx
ooo

comb5:
ooo
ooo
xxx

comb 6:
xoo
oxo
oox

comb 7:
oox
oxo
xoo

    button1row1     button2row1     button3row1



    button1row2     button2row2     button3row2



    button1row3     button2row3     button3row3
*/

