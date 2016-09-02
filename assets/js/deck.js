console.log('whatup');

class deckOfCards {
  constructor() {
    this.deckOfCardsArray = [];
  }

  deckArray() {
    const deckSize = 24;
    for (let i = 1; i <= 24; i++) {
      this.deckOfCardsArray.push(i);
    }

    return this.deckOfCardsArray;
  }

  render() {

  }
}
