console.log('Go Fish');
// have a deck of 24 cards
// distibute 7 random cards tp player 1 and 2
// how many remaining cards will be in the deck after cards have been dealt;

window.alert("Player One! It's your turn! Click cards to view them.");

let deck = ['A','A','A','A','2','2','2','2','3','3','3','3','4','4','4','4','5','5','5','5','6','6','6','6','7','7','7','7','8','8','8','8','9','9','9','9','10','10','10','10','J','J','J','J','Q','Q','Q','Q','K','K','K','K'];
let playerOne = [];
let playerTwo = [];

// Shuffle Deck
shuffleArray(deck);

// for player one, deal up to 7 random cards from deck
for (let i=1; i<=7; i++) {
  let cardToDeal = deck.pop();
  playerOne.push(cardToDeal);
}

// for player two, same as P1
for(let i=8; i<=14; i++) {
  let cardToDeal = deck.pop();
  playerTwo.push(cardToDeal);
}

document.querySelector('.player-1-stack').addEventListener('click', function(e){
  let x = event.target.classList.toString();
  let z = parseInt(x.replace('card', ''));
  console.log(x,z,playerOne[z]);
  document.getElementsByClassName(x)[0].innerHTML = `<h2>${playerOne[z]}</h2>`;
})


function hidePlayerOne() {
  document.querySelector('.player-1-stack .card0').innerHTML = `<h2></h2>`;
  document.querySelector('.player-1-stack .card1').innerHTML = `<h2></h2>`;
  document.querySelector('.player-1-stack .card2').innerHTML = `<h2></h2>`;
  document.querySelector('.player-1-stack .card3').innerHTML = `<h2></h2>`;
  document.querySelector('.player-1-stack .card4').innerHTML = `<h2></h2>`;
  document.querySelector('.player-1-stack .card5').innerHTML = `<h2></h2>`;
  document.querySelector('.player-1-stack .card6').innerHTML = `<h2></h2>`;
  window.alert("Player 2! You\'re up! Click cards to view them.");
}

document.querySelector('.player-2-stack').addEventListener('click', function(e){
  let a = event.target.classList.toString();
  let b = parseInt(a.replace('card', '')); //turns string into integer
  // console.log(a,b,playerTwo[b]);
  document.getElementsByClassName(a)[1].innerHTML = `<h2>${playerTwo[b]}</h2>`;
  console.log(document.getElementsByClassName(a));
})


function hidePlayerTwo() {
  document.querySelector('.player-2-stack .card0').innerHTML = `<h2></h2>`;
  document.querySelector('.player-2-stack .card1').innerHTML = `<h2></h2>`;
  document.querySelector('.player-2-stack .card2').innerHTML = `<h2></h2>`;
  document.querySelector('.player-2-stack .card3').innerHTML = `<h2></h2>`;
  document.querySelector('.player-2-stack .card4').innerHTML = `<h2></h2>`;
  document.querySelector('.player-2-stack .card5').innerHTML = `<h2></h2>`;
  document.querySelector('.player-2-stack .card6').innerHTML = `<h2></h2>`;
  window.alert("Player 1, You\'re up again!")
}



// let x = new Deck();
// x.dealHand();
// console.log(x.playerOne);
// console.log(x.playerTwo);


//sourced from stackoverflow.com//
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
