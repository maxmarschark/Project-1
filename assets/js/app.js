console.log('we here');

class App {
  constructor() {

  }

  render() {
    const newDeckOfCards = new deckOfCards();
    this.deckOfCards = newDeckOfCards;
    newDeckOfCards.render();
    console.log('MY BUTTON WORKS');
  }
  render() {
    const goFishCard = new deckOfCards();
    this.deckOfCards = goFishCard;
    goFishCard.render();
    console.log('GO FISH BUTTON WORKS');
  }
}
