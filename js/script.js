class Card {                                                                                 
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }

  like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }
  
  remove(event) {
    placesList.removeChild(event.target.closest('.place-card'));
  }

  create(name, link) {                                    
    const card = document.createElement('div');
    card.classList.add('place-card');
  
    const cardImage = document.createElement('div');
    cardImage.classList.add('place-card__image');
    cardImage.style = `background-image: url(${this.link})`;
    cardImage.setAttribute('data', this.link);
  
    const cardDeleteButton = document.createElement('button');
    cardDeleteButton.classList.add('place-card__delete-icon');
  
    const cardDescription = document.createElement('div');
    cardDescription.classList.add('place-card__description');
  
    const cardName = document.createElement('h3');
    cardName.classList.add('place-card__name');
    cardName.textContent = this.name;
  
    const cardLike = document.createElement('button');
    cardLike.classList.add('place-card__like-icon');
  
    card.appendChild(cardImage);
    cardImage.appendChild(cardDeleteButton);
    card.appendChild(cardDescription);
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(cardLike);
  
    this.cardElement = card;
    return card;
  }

  setEventListeners() {
    this.cardElement.querySelector('.place-card__like-icon').addEventListener('click', this.like )
    this.cardElement.querySelector('.place-card__delete-icon').addEventListener('click', this.remove )
    this.cardElement.querySelector('.place-card__image').addEventListener('click', function() {
      if (event.target.classList.contains('place-card__image')) {
      makeBigPhoto(event);
      imagePopup.open();
      }
    })
  }
}


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




class Popup {
  constructor(container) {
    this.container = container;
  }

  open() {
    this.container.classList.toggle('popup_is-opened');   
  }

  close() {
    this.container.classList.toggle('popup_is-opened');     
  }

  createAddPopup() {
    const content = document.createElement('div');
    content.classList.add('popup__content');
  
    const closeBtn = document.createElement('img');
    closeBtn.classList.add('popup__close');
    closeBtn.setAttribute('src', './images/close.svg');
    closeBtn.setAttribute('alt', '');
  
    const title = document.createElement('h3');
    title.classList.add('popup__title');
    title.textContent = 'Новое место'
  
    const form = document.createElement('form');
    form.classList.add('popup__form');
    form.setAttribute('name', 'new');
  
    const firstInput = document.createElement('input');
    firstInput.classList.add('popup__input');
    firstInput.classList.add('popup__input_type_name');
    firstInput.setAttribute('type', 'text');
    firstInput.setAttribute('name', 'name');
    firstInput.setAttribute('id', 'name');
    firstInput.setAttribute('minlength', '2');
    firstInput.setAttribute('maxlength', '30');
    firstInput.setAttribute('placeholder', 'Название');
    firstInput.setAttribute('required', '');
  
    const firstHint = document.createElement('p');
    firstHint.classList.add('popup__hint');
    firstHint.setAttribute('id', 'name-hint');
  
    const secondInput = document.createElement('input');
    secondInput.classList.add('popup__input');
    secondInput.classList.add('popup__input_type_link-url');
    secondInput.setAttribute('type', 'url');
    secondInput.setAttribute('name','link');
    secondInput.setAttribute('id', 'link');
    secondInput.setAttribute('placeholder', 'Ссылка на картинку');
    secondInput.setAttribute('required', '');
  
    const secondHint = document.createElement('p');
    secondHint.classList.add('popup__hint');
    secondHint.setAttribute('id', 'link-hint');
  
    const button = document.createElement('button');
    button.classList.add('button');
    button.classList.add('popup__button');
    button.setAttribute('type', 'submit');
    button.setAttribute('disabled', '');
    button.textContent = '+'
  
  
    content.appendChild(closeBtn);
    content.appendChild(title);
    content.appendChild(form);
    form.appendChild(firstInput);
    form.appendChild(firstHint);
    form.appendChild(secondInput);
    form.appendChild(secondHint);
    form.appendChild(button);
  
    this.container.appendChild(content);
  }

  createEditPopup() {
    const content = document.createElement('div');
    content.classList.add('popup__content');
  
    const closeBtn = document.createElement('img');
    closeBtn.classList.add('popup__close');
    closeBtn.setAttribute('src', './images/close.svg');
    closeBtn.setAttribute('alt', '');
  
    const title = document.createElement('h3');
    title.classList.add('popup__title');
    title.textContent = 'Редактировать профиль'
  
    const form = document.createElement('form');
    form.classList.add('popup__form');
    form.setAttribute('name', 'edit');
  
    const firstInput = document.createElement('input');
    firstInput.classList.add('popup__input');
    firstInput.classList.add('popup__input_type_person-name');
    firstInput.setAttribute('type', 'text');
    firstInput.setAttribute('name', 'person-name');
    firstInput.setAttribute('id', 'person-name');
    firstInput.setAttribute('minlength', '2');
    firstInput.setAttribute('maxlength', '30');
    firstInput.setAttribute('placeholder', 'Имя');
    firstInput.setAttribute('required', '');
  
    const firstHint = document.createElement('p');
    firstHint.classList.add('popup__hint');
    firstHint.setAttribute('id', 'person-name-hint');
  
    const secondInput = document.createElement('input');
    secondInput.classList.add('popup__input');
    secondInput.classList.add('popup__input_type_about');
    secondInput.setAttribute('type', 'text');
    secondInput.setAttribute('name','about');
    secondInput.setAttribute('id', 'about');
    secondInput.setAttribute('minlength', '2');
    secondInput.setAttribute('maxlength', '30');
    secondInput.setAttribute('placeholder', 'О себе');
    secondInput.setAttribute('required', '');
  
    const secondHint = document.createElement('p');
    secondHint.classList.add('popup__hint');
    secondHint.setAttribute('id', 'about-hint');
  
    const button = document.createElement('button');
    button.classList.add('button');
    button.classList.add('popup__button');
    button.classList.add('popup__button_type_save');
    button.setAttribute('type', 'submit');
    button.textContent = 'Сохранить'
  
  
    content.appendChild(closeBtn);
    content.appendChild(title);
    content.appendChild(form);
    form.appendChild(firstInput);
    form.appendChild(firstHint);
    form.appendChild(secondInput);
    form.appendChild(secondHint);
    form.appendChild(button);
  
    this.container.appendChild(content);
  }

  createImagePopup() {
    const imageBox = document.createElement('div');
    imageBox.classList.add('popup__image-box');

    const closeBtn = document.createElement('img');
    closeBtn.classList.add('popup__close');
    closeBtn.setAttribute('src', './images/close.svg');
    closeBtn.setAttribute('alt', '');

    imageBox.appendChild(closeBtn);

    this.container.appendChild(imageBox);
  }

  // setEventListeners() {                              
  //   this.container.querySelector('.popup__form').addEventListener('input', handlerInputForm);                       // shouldn't be here                     
  //   this.container.querySelector('.popup__form').addEventListener('submit', sendForm);
  // }  

  resetErrors() {
    const currentForm = this.container.querySelector('.popup__form');
    currentForm.reset();
    document.querySelectorAll('.popup__hint').forEach((hint) => {
      hint.textContent = '';
    })
  }
}



const personName = document.querySelector('.user-info__name');
const about = document.querySelector('.user-info__job');


class UserInfo {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
  setUserInfo() {
    this.name = personNameInput.value;
    this.job = aboutInput.value;
  }
  updateUserInfo() {
    personName.textContent = this.name;
    about.textContent = this.job;
  }
}






class FormValidator {
  constructor(form) {                        // or (popup)
    this.form = form;
  }

  checkInputValidity(input) {                                                 //Метод показывает ошибку, если инпуты не проходят валидацию. бывш. isValid
    input.setCustomValidity ('');                                                                       
    if (input.validity.valueMissing) {
      input.setCustomValidity ('Это обязательное поле');
      return false
    }
    if (input.validity.tooLong || input.validity.tooShort) {
      input.setCustomValidity ('Должно быть от 2 до 30 символов');
      return false
    }
    if (input.validity.typeMismatch && input.type === 'url') {
      input.setCustomValidity ('Это не ссылка');
      return false
    }
    return input.checkValidity();
  }

  isFieldValid(input) {
    const errorElem = input.parentNode.querySelector(`#${input.id}-hint`);
    const answer = this.checkInputValidity(input);
    if (errorElem !== null ) {
      errorElem.textContent = input.validationMessage;
    }
    return answer;
  }

  isFormValid(form) {
    const inputs = [...form.elements];
    let valid = true;
    inputs.forEach((input) => {
      if (input.type !== 'submit' && input.type !== 'button') {
        if (!this.isFieldValid(input)) { 
          valid = false;
        }
      }
    });
    return valid
  }

  handlerInputForm(event) {
    const submit = event.currentTarget.querySelector('.button');
    const [...inputs] = event.currentTarget.elements;
    
    this.isFieldValid(event.target);

    if (inputs.every(this.isFieldValid)) {
      setSubmitButtonState(submit, true);
    } else {
      setSubmitButtonState(submit, false);
    }
  }

  sendForm(event) {
    event.preventDefault();
    const currentForm = event.target;
    const isValid = this.isFormValid(currentForm);

    if (isValid) {
      event.currentTarget.reset();
    }
  }
                                                                              
  setSubmitButtonState(button, state) {                                                                   // Этот метод должен вызываться при любом изменении данных формы
    if ( state ) {
      button.closest('.popup__form').querySelector('.popup__button').removeAttribute('disabled', '');
    } else if ( !state )  {
      button.closest('.popup__form').querySelector('.popup__button').setAttribute('disabled', '');
    }
  }

  setEventListeners() {                                                                       //Добавляет необходимые для валидации обработчики всем полям формы.
    this.form.addEventListener('input', this.handlerInputForm);                                       
    this.form.addEventListener('submit', this.sendForm);
  }  

}     









// new vars

const addPopup = new Popup(document.querySelector('.popup_type_add'));
const editPopup = new Popup(document.querySelector('.popup_type_edit'));
const imagePopup = new Popup(document.querySelector('.popup_type_image'));


const jaques = new UserInfo('Jaques Causteau', 'Sailor, Researcher');


addPopup.createAddPopup();
editPopup.createEditPopup();
imagePopup.createImagePopup();




// variables



const addPopupOpenButton = document.querySelector('.user-info__button');
const addPopupCloseButton = document.querySelector('.popup_type_add .popup__close');

const editPopupOpenButton = document.querySelector('.user-info__edit-button');
const editPopupCloseButton = document.querySelector('.popup_type_edit .popup__close');



const personNameInput = document.querySelector('.popup__input_type_person-name');
const aboutInput = document.querySelector('.popup__input_type_about');
const saveInfoButton = document.querySelector('.popup__button_type_save');

const placeNameInput = document.querySelector('.popup__input_type_name');
const placeLinkInput = document.querySelector('.popup__input_type_link-url');

const placeAddButton = document.querySelector('.popup_type_add .popup__button');

const imagePopupCloseButton = document.querySelector('.popup_type_image .popup__close');


// new vars


const placesList = document.querySelector('.places-list');
const initCards = new CardList(placesList, initialCards);
const addForm = document.forms.new;
const editForm = document.forms.edit;

const addFormValidator = new FormValidator(addForm);
const editFormValidator = new FormValidator(editForm);



// functions




function addCard() {                                                          // THIS WORKS
  const name = addForm.elements.name;
  const link = addForm.elements.link;
  const card = new Card(name.value, link.value);

  placesList.appendChild(card.create());
  card.setEventListeners();
}


function fillInputs() {
  personNameInput.value = personName.textContent;
  aboutInput.value = about.textContent;
  saveInfoButton.removeAttribute('disabled', '');
}


function makeBigPhoto(event) {
  if (event.target.classList.contains('place-card__image')) {
    const url = event.target.getAttribute('data');
    const imageBox = document.querySelector('.popup__image-box');
    const popupImage = document.createElement('img');

    popupImage.classList.add('popup__image');
    popupImage.setAttribute('src',url);
    popupImage.setAttribute('alt','');
    imageBox.appendChild(popupImage);
  }
}


function deleteBigPhoto() {
  document.querySelector('.popup__image-box').removeChild(document.querySelector('.popup__image'));
}


function resetInputs(event) {
  event.target.parentNode.querySelectorAll('.form__input').forEach((input) => {
    input.value = '';
  });
}









// event listeners




addPopupOpenButton.addEventListener('click', () =>  {                                     
  addPopup.open();
});
addPopupCloseButton.addEventListener('click', () =>  {                                        
  addPopup.close();
});

addForm.addEventListener('submit', function(event) {                                                  
  event.preventDefault();
  addCard();
  addPopup.close();
})

editPopupOpenButton.addEventListener('click', () => { 
  editPopup.open();
  fillInputs() 
}); 

editPopupCloseButton.addEventListener('click', () => {
  editPopup.close();
  editPopup.resetErrors() 
});                      

saveInfoButton.addEventListener('click', function(event) {
  event.preventDefault();
  jaques.setUserInfo();
  jaques.updateUserInfo();
  editPopup.close();
});

imagePopupCloseButton.addEventListener('click', () => {
   imagePopup.close();                                                                              
   deleteBigPhoto();
});






// function calls

jaques.updateUserInfo();
initCards.render();

addFormValidator.setEventListeners();                                                                                       
editFormValidator.setEventListeners();                                                                                       

