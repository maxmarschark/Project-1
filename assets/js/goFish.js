console.log('practice');
//have a deck of 24 cards
//distibute 7 random cards tp player 1 and 2
//how many remaining cards will be in the deck after cards have been dealt;

    let fullDeck = ['ace','ace','ace','ace','two','two','two','two','three','three','three','three','four','four','four','four','five','five','five','five','six','six','six','six']; //manually enter cards
    let ldealDeck = 14;
    let remainingCards = 10;
    let playerOne = [];
    let playerTwo = [];
    let cardsInHand = 7;

    //for player one, deal up to 7 random cards from deck
    for(let i=1; i<=7; i++) {
      let randomNumber = Math.floor(Math.random() * (fullDeck.length-0)+0);
      let newCard = fullDeck.slice(randomNumber, randomNumber+1);
      playerOne[i] = newCard;
      console.log(playerOne[i]);
      fullDeck.splice(randomNumber,1); //removing the cards dealt so that they do not repeat in deck
}
    //for player two, same as P1
    for(let i=8; i<=14; i++) {
      let randomNumber = Math.floor(Math.random() * (fullDeck.length-0)+0);
      let newCard = fullDeck.slice(randomNumber, randomNumber+1);
      playerTwo[i] = newCard;
      console.log(playerTwo[i]);
      fullDeck.splice(randomNumber,1); //removing the cards dealt so that they do not repeat in deck
}


      document.querySelector('.stack').addEventListener('click', function(e){
      let x = event.target.classList.toString();
      let z = parseInt(x.replace('card', ''));
      console.log(x,z,playerOne[z]);
      document.getElementsByClassName(x)[0].innerHTML = `<h2>${playerOne[z]}</h2>`;
    })


      function hidePlayerOne() {
      document.querySelector('.card1').innerHTML = `<h2></h2>`;
      document.querySelector('.card2').innerHTML = `<h2></h2>`;
      document.querySelector('.card3').innerHTML = `<h2></h2>`;
      document.querySelector('.card4').innerHTML = `<h2></h2>`;
      document.querySelector('.card5').innerHTML = `<h2></h2>`;
      document.querySelector('.card6').innerHTML = `<h2></h2>`;
      document.querySelector('.card7').innerHTML = `<h2></h2>`;
}

document.querySelector('.stack2').addEventListener('click', function(e){
let a = event.target.classList.toString();
let b = parseInt(a.replace('card', ''));
console.log(a,b,playerTwo[b]);
document.getElementsByClassName(a)[0].innerHTML = `<h2>${playerTwo[b]}</h2>`;
})


function hidePlayerTwo() {
document.querySelector('.card8').innerHTML = `<h2></h2>`;
document.querySelector('.card9').innerHTML = `<h2></h2>`;
document.querySelector('.card10').innerHTML = `<h2></h2>`;
document.querySelector('.card11').innerHTML = `<h2></h2>`;
document.querySelector('.card12').innerHTML = `<h2></h2>`;
document.querySelector('.card13').innerHTML = `<h2></h2>`;
document.querySelector('.card14').innerHTML = `<h2></h2>`;
}
// let x = new Deck();
// x.dealHand();
// console.log(x.playerOne);
// console.log(x.playerTwo);
