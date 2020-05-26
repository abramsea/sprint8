/*
 Можно лучше:
 - Убрать неиспользуемые переменные                                             OK
*/
const placesList = document.querySelector('.places-list');

const addPopup = document.querySelector('.popup_type_add');
const addPopupOpenButton = document.querySelector('.user-info__button');
const addPopupCloseButton = document.querySelector('.popup_type_add .popup__close');

const editPopup = document.querySelector('.popup_type_edit');
const editPopupOpenButton = document.querySelector('.user-info__edit-button');
const editPopupCloseButton = document.querySelector('.popup_type_edit .popup__close');

const personName = document.querySelector('.user-info__name');
const about = document.querySelector('.user-info__job');

const personNameInput = document.querySelector('.popup__input_type_person-name');
const aboutInput = document.querySelector('.popup__input_type_about');
const saveInfoButton = document.querySelector('.popup__button_type_save');

const placeNameInput = document.querySelector('.popup__input_type_name');
const placeLinkInput = document.querySelector('.popup__input_type_link-url');
/*
 Можно лучше:
 - Убрать неиспользуемые переменные                                                     
*/
const placeAddButton = document.querySelector('.popup_type_add .popup__button');

const imagePopup = document.querySelector('.popup_type_image');
const imagePopupCloseButton = document.querySelector('.popup_type_image .popup__close');








function makeCard(name, link) {
  const card = document.createElement('div');
  card.classList.add('place-card');

  const cardImage = document.createElement('div');
  cardImage.classList.add('place-card__image');
  cardImage.style = `background-image: url(${link})`;
  cardImage.setAttribute('data', link);

  const cardDeleteButton = document.createElement('button');
  cardDeleteButton.classList.add('place-card__delete-icon');

  const cardDescription = document.createElement('div');
  cardDescription.classList.add('place-card__description');

  const cardName = document.createElement('h3');
  cardName.classList.add('place-card__name');
  cardName.textContent = name;

  const cardLike = document.createElement('button');
  cardLike.classList.add('place-card__like-icon');

  card.appendChild(cardImage);
  cardImage.appendChild(cardDeleteButton);
  card.appendChild(cardDescription);
  cardDescription.appendChild(cardName);
  cardDescription.appendChild(cardLike);

  return card;
};


function addCard(name, link) {
  placesList.appendChild(makeCard(name, link));
};

function renderInitCards() {
  initialCards.forEach((item) => addCard(item.name, item.link));
};


function togglePopup(popup) {
  popup.classList.toggle('popup_is-opened');
};



function addNewCard(event) {
  togglePopup(addPopup);
  addCard(placeNameInput.value, placeLinkInput.value);
  placeAddButton.setAttribute('disabled', '');
  event.target.parentNode.reset();
};






function clickOnCard(event) {
  if (event.target.classList.contains('place-card__delete-icon')) {
    placesList.removeChild(event.target.closest('.place-card'));
  } else if (event.target.classList.contains('place-card__like-icon')) {
    event.target.classList.toggle('place-card__like-icon_liked');
  } else if (event.target.classList.contains('place-card__image')) {
    /*
     Отлично:
     - Используется event.target
    */
    makeBigPhoto(event);
    togglePopup(imagePopup);
  }
}


function fillInputs() {
  personNameInput.value = personName.textContent;
  aboutInput.value = about.textContent;
  saveInfoButton.removeAttribute('disabled', '');
}


function saveInfo(event) {
  event.preventDefault();
  personName.textContent = personNameInput.value;
  about.textContent = aboutInput.value;
  togglePopup(editPopup);
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







function setSubmitButtonState(button, state) {                                                           
  if ( state ) {
    button.closest('.popup__form').querySelector('.popup__button').removeAttribute('disabled', '');
  } else if ( !state )  {
    button.closest('.popup__form').querySelector('.popup__button').setAttribute('disabled', '');
  }
}




function isValid(input) {
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



function isFieldValid(input) {
  const errorElem = input.parentNode.querySelector(`#${input.id}-hint`);
  const answer = isValid(input);
  if (errorElem !== null ) {
    errorElem.textContent = input.validationMessage;
  }
  return answer;
}



function isFormValid(form) {
  const inputs = [...form.elements];
  let valid = true;
  inputs.forEach((input) => {
    if (input.type !== 'submit' && input.type !== 'button') {
      if (!isFieldValid(input)) { 
        valid = false;
      }
    }
  });
  return valid
}




function handlerInputForm(event) {
  const submit = event.currentTarget.querySelector('.button');
  const [...inputs] = event.currentTarget.elements;
  
  isFieldValid(event.target);

  if (inputs.every(isFieldValid)) {
    setSubmitButtonState(submit, true);
  } else {
    setSubmitButtonState(submit, false);
  }
}



function sendForm(event) {
  event.preventDefault();
  const currentForm = event.target;
  const isValid = isFormValid(currentForm);

  if (isValid) {
    event.currentTarget.reset();
  }
}


function setEventListeners(popup) {                                   
  popup.querySelector('.popup__form').addEventListener('input', handlerInputForm);
  popup.querySelector('.popup__form').addEventListener('submit', sendForm)
      /*  
       - Слушатели должны быть назначены на элементы                                        OK
      */
}


function resetErrors(popup) {
  const currentForm = popup.querySelector('.popup__form');
  currentForm.reset();
  document.querySelectorAll('.popup__hint').forEach((hint) => {
    hint.textContent = '';
  })
}



addPopupOpenButton.addEventListener('click', () => { togglePopup(addPopup) });
addPopupCloseButton.addEventListener('click', () => { togglePopup(addPopup) });

placeAddButton.addEventListener('click', addNewCard);
placesList.addEventListener('click', clickOnCard);

editPopupOpenButton.addEventListener('click', () => { togglePopup(editPopup), fillInputs() });
editPopupCloseButton.addEventListener('click', () => { togglePopup(editPopup), resetErrors(editPopup)});

saveInfoButton.addEventListener('click', saveInfo);

imagePopupCloseButton.addEventListener('click', () => {
   togglePopup(imagePopup);
   deleteBigPhoto();
});


renderInitCards();

setEventListeners(addPopup);
setEventListeners(editPopup);

/*
 Что понравилось:
 - Код структурирован
 - Код разбит на небольшие функции, у функций ясные имена
 - Форма "Новое место" валидируется
 Можно лучше:
 - Объеденить функции лайка, удаления и открытия попапа картинки                                                              OK
 - Инпут попапа "Новое место" не валидируется на корректность введеной ссылки
 - Есть проблемы с форматированием кода
 Надо исправить:
 - Слушатели одной кнопки необходимо объеденить. Например, слушатель кнопки editPopupOpenButton 'click', должен быть
 объявлен только один раз      
                                                                                                OK
 Баг #1
 1) Запустить приложение
 2) Открыть попап редактирования формы
 3) Убрать текст из первого инпута -> кнопка добавления не заблокирована                                  OK
 Баг #2
 1) Запустить приложение
 2) Открыть попап редактирования формы
 3) Убрать текст из инпутов                                                                                       OK
 4) Закрыть попап
 5) Переоткрыть попап -> инпуты заполнены, но ошибки валидации не ушли + кнопка заблокирована                  
 Баг #3
 1) Запустить приложение
 2) Открыть попап добавления карточки                                                                           OK
 3) Начать заполнять первый инпут -> ошибки валидации возникают в обоих инпутах                                    
 Баг #4
 1) Запустить приложение
 2) Открыть попап добавления карточки
 3) Добавить карточку
 4) Открыть попап "Новое место" -> можно добавлять карточку с пустыми инпутами                                OK
*/
