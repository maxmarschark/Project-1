console.log('practice');

//have a deck of 24 cards
//distibute 7 random cards tp player 1 and 2
//how many remaining cards will be in the deck after cards have been dealt;

class Deck {
  constructor(){
    this.fullDeck = ['ace','ace','ace','ace','two','two','two','two','three','three','three','three','four','four','four','four','five','five','five','five','six','six','six','six']; //manually enter cards
    this.dealDeck = 14;
    this.remainingCards = 10;
    this.playerOne = [];
    this.playerTwo = [];
    this.cardsInHand = 7;
  }
  dealHand() {
    while(this.playerOne.length < this.cardsInHand) {
      let randomNumber = Math.floor(Math.random() * (this.fullDeck.length-0)+0);
      let newCard = this.fullDeck.slice(randomNumber, randomNumber+1);
      this.playerOne.push(newCard);
      this.fullDeck.splice(randomNumber,1); //removing the cards dealt so that they do not repeat in deck
    }
    while(this.playerTwo.length < this.cardsInHand) {
      let randomNumber = Math.floor(Math.random() * (this.fullDeck.length-0)+0);
      let newCard = this.fullDeck.slice(randomNumber, randomNumber+1);
      this.playerTwo.push(newCard);
      this.fullDeck.splice(randomNumber,1);
    }
  }
}


let x = new Deck();
x.dealHand();
console.log(x.playerOne);
console.log(x.playerTwo);
