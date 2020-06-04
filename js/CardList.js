class CardList {                                                                                       
    constructor(container, array) {
      this.container = container;
      this.cards = array;
    }
    render = (container) => { 
      this.cards.forEach((card) => {
        container.append(card.cardElement)
      })
    }

    addCard(card) {                           
      this.cards.push(card);                    
      this.container.appendChild(card);
      this.render();
    }
  }