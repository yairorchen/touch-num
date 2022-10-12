"use strict";

var levOfDiff = 1

var elPlay = document.querySelector('.container')
var elVictory = document.querySelector('.victory')
var elTimer = document.querySelector('.timer')


//time var
var microCounter = 0
var miliCounter = 0;
var secondCounter = 0;

var interval =''

 
function diffLevel(num){
  if(num===0){return 9}
  if (num===1){return 16}
  if(num===2){return 25}
  else {return 36}
}
levOfDiff


function restart(num=levOfDiff){
  var newArr = []
  for( var i=0;i<num;i++){
    newArr.push(i+1)
  }
  return newArr
}


function startBtn(){
  renderBoard()
  elVictory.style.display= "none"
  elPlay.style.display= "none"
  microCounter = 0
  miliCounter = 0;
  secondCounter = 0;

  interval = setInterval(() =>
   {elTimer.innerHTML= (timeCounter());}, 10);

}

function timeCounter() {
  
  if(microCounter===9){
    miliCounter++;
    microCounter = 0;
    
  }
  if (miliCounter === 99) {
    secondCounter++;
    miliCounter = 0;
    
  }
  if (secondCounter === 59) {
    secondCounter = 0;
}
  miliCounter ++
  return secondCounter + ":" + miliCounter+''+microCounter
}


var counter =1

function cellClicked(elCell,i,j){
  var elVictory = document.querySelector('.victory')
  console.log(elCell,i,j);
  if(counter===diffLevel(levOfDiff)){
    elCell.style.backgroundColor='orange'
    counter=1
    elVictory.style.display = 'block'
    clearInterval(interval)
  }

  if(counter+''===elCell.innerHTML){
    counter++
    console.log(counter);
      elCell.style.backgroundColor='orange'
    }

  }
  

function renderBoard(board=restart(diffLevel(levOfDiff))) {
  console.table(board)

  var strHTML = ''

  for(var i = 0; i < Math.sqrt(diffLevel(levOfDiff)); i++){
      strHTML += '\n<tr>\n'
      for(var j = 0; j < Math.sqrt(diffLevel(levOfDiff)); j++){
        var currNum = board.splice(getRandomIntInclusive(0,board.length-1),1)
        var dataAttribStr = `data-pos="${currNum}"`
          strHTML+=`\t<td ${dataAttribStr} onclick=
          "cellClicked(this,${i},${j})">${currNum}</td>\n`
      }
      strHTML += '\n</tr>'
  }

  var elBoard = document.querySelector('.board')
  elBoard.innerHTML= strHTML
  console.table(strHTML)
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}