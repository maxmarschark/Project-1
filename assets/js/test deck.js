console.log('practice');

// have a deck of 24 cards
// distibute 7 random cards tp player 1 and 2
// how many remaining cards will be in the deck after cards have been dealt;

class Deck {
  constructor(){
     this.fullDeck = ['Ace','Ace','Ace','Ace','2','2','2','2','3','3','3','3','4','4','4','4','5','5','5','5','6','6','6','6'];
    this.dealDeck = 14;
    this.remainingCards = 10;
    this.playerOne = [];
    this.playerTwo = [];
    this.cardsInHand = 7;
    }
  dealHand() {
    for(let i=1; i<=7; i++) {
      let randomNumber = Math.floor(Math.random() * (this.fullDeck.length-0)+0);
      let newCard = this.fullDeck.slice(randomNumber, randomNumber+1);
      this.playerOne[i] = newCard;
      console.log(this.playerOne[i]);
      this.fullDeck.splice(randomNumber,1); //removing the cards dealt so that they do not repeat in deck
    }

    // while(this.playerOne.length < this.cardsInHand) {
    //   let randomNumber = Math.floor(Math.random() * (this.fullDeck.length-0)+0);
    //   let newCard = this.fullDeck.slice(randomNumber, randomNumber+1);
    //   this.playerOne.push(newCard);
    //   this.fullDeck.splice(randomNumber,1); //removing the cards dealt so that they do not repeat in deck
    // }
    while(this.playerTwo.length < this.cardsInHand) {
      let randomNumber = Math.floor(Math.random() * (this.fullDeck.length-0)+0);
      let newCard = this.fullDeck.slice(randomNumber, randomNumber+1);
      this.playerTwo.push(newCard);
      this.fullDeck.splice(randomNumber,1);
    }
  // }
  // turnCard() {
      document.querySelector('.stack').addEventListener('click', function(e){
      let x  = event.target.classList.toString();
      let z = parseInt(x.replace('card', ''));
      console.log(x,z,this.playerOne[z]);
      event.target.classList.innerHTML = this.playerOne[z];
    })

  }
}


let x = new Deck();
x.dealHand();
console.log(x.playerOne);
console.log(x.playerTwo);
