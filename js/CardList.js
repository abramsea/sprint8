class CardList {                                                                                       
    constructor(container, array) {
      this.container = container;
      this.cards = array;
    }
    render = () => { 
      this.cards.forEach((card) => {
        this.container.append(card.cardElement)
      })
    }

    addCard(card) {                           
      this.cards.push(card);                    
      this.container.appendChild(card);
      this.render();
    }
  }