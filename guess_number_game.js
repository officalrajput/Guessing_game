let randomNumber=parseInt((Math.random()*100+1));
var userInput=document.getElementById("guessField");
let submitButton=document.querySelector("#subt");
let preGuess=document.querySelector(".Guesses");
let remainGuess=document.querySelector(".lastResult");
let lowOrHigh=document.querySelector(".lowOrhi");
let startOver=document.querySelector(".resultParas");

const p=document.createElement('p');

let previousGuessStore=[];
let numberGuessStore=1;
let playGame=true;

if(playGame)
{
    submitButton.addEventListener('click',function(event){
        event.preventDefault();
        let guess=parseInt(userInput.value)
        validGuess(guess);
    })
}

function validGuess(guess)
{
  if(isNaN(guess))
  {
    alert("plese give me a valid number");
  }
  else if(guess<1)
  {
    alert("plese give more than")
  }
  else if(guess>100)
  {
    alert("plese give smaller  then 100")

  }
  else
  {
    previousGuessStore.push(guess);
    if(numberGuessStore === 11)
    {
        cleanUpMethod(guess)
        displayMessage(`Game Over Random Number was ${randomNumber}`)
        endGame();
    }
    else{
        cleanUpMethod(guess)
        checkGuess(guess)

    }
  }

}

function checkGuess(guess)
{
    if(randomNumber === guess)
    {
        cleanUpMethod(guess)
        displayMessage(`you won the random Number is ${randomNumber}`)
        endGame();
    }
    else if (guess<randomNumber)
    {
      displayMessage('toooo smaller number ')
    }
    else if (guess>randomNumber)
    {
      displayMessage('to High number ')
    }
}

function cleanUpMethod(guess)
{
 userInput.value='';
 preGuess.innerHTML+=`${guess} `;
 numberGuessStore++;
 remainGuess.innerHTML=`${ 11 - numberGuessStore}`;
}
function displayMessage(message)
{
lowOrHigh.innerHTML=`<h3>${message}</h3>`
}

function endGame()
{
userInput.value='';
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h3 id="newGame">Start New Game</h3>`
startOver.appendChild(p)
playGame=false;
startNewGame();
}
function startNewGame()
{
let newgameButton=document.getElementById("newGame");
newgameButton.addEventListener('click',function(e)
{
    randomNumber=parseInt((Math.random()*100+1));
    previousGuessStore=[]
    numberGuessStore=1;
    preGuess.innerHTML='';
    remainGuess.innerHTML=`${ 11 - numberGuessStore+1}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    lowOrHigh.innerHTML='';
    playGame=true;


})
}


