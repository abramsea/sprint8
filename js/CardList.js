class CardList {                                                                                       
    constructor(container, array) {
      this.container = container;
      this.cards = array;
    }
    render() {                                              
      this.cards.forEach( function(card) {
        card = new Card(card.name, card.link);
        placesList.appendChild(card.create());
        card.setEventListeners();
      })    
    }
    addNewCard(card) {                           
      this.cards.push(card);                    
      this.container.appendChild(card);
      this.render();
    }
  }