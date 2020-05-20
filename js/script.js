const root = document.querySelector('.root');
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
const placeAddButton = document.querySelector('.popup__button');

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
}


function addCard(name, link) {
  placesList.appendChild(makeCard(name, link));
}

function renderInitCards() {
  initialCards.forEach((item) => addCard(item.name, item.link));
};


function togglePopup(popup) {
  popup.classList.toggle('popup_is-opened');
}


function addNewCard(event) {
  event.preventDefault();
  const name = document.querySelector('.popup__input_type_name');
  const link = document.querySelector('.popup__input_type_link-url');

  togglePopup(addPopup);
  addCard(name.value, link.value);

  name.value = '';
  link.value = '';
}


function like(event) {
  if (event.target.classList.contains('place-card__like-icon')) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }
}


function deleteCard(event) {
  if (event.target.classList.contains('place-card__delete-icon')) {
    placesList.removeChild(event.target.closest('.place-card'));
  }
}


function fillInputs() {
  personNameInput.value = personName.textContent;
  aboutInput.value = about.textContent;
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

function openPhoto(event) {
  if (event.target.classList.contains('place-card__image')) {
    makeBigPhoto(event);
    togglePopup(imagePopup);
  }
}

function deleteBigPhoto() {
  document.querySelector('.popup__image-box').removeChild(document.querySelector('.popup__image'));
}


function disabler(input1, input2, button) {
  if ( input1.value.length === 0 || input2.value.length === 0 ) {
    button.setAttribute('disabled', '')
  } else if (input1.value.length != 0 && input2.value.length != 0) {
    button.removeAttribute('disabled', '');
  }
}









addPopupOpenButton.addEventListener('click', () => { togglePopup(addPopup); });

addPopupCloseButton.addEventListener('click', () => { togglePopup(addPopup) });

placesList.addEventListener('click', like);
placeAddButton.addEventListener('click', addNewCard);
placesList.addEventListener('click', deleteCard);

editPopupOpenButton.addEventListener('click', () => { togglePopup(editPopup) });

editPopupCloseButton.addEventListener('click', () => { togglePopup(editPopup) });

editPopupOpenButton.addEventListener('click', fillInputs);
saveInfoButton.addEventListener('click', saveInfo);
placesList.addEventListener('click', openPhoto);

imagePopupCloseButton.addEventListener('click', () => {
   togglePopup(imagePopup);
   deleteBigPhoto();
});

personNameInput.addEventListener('keyup', () => { disabler(personNameInput, aboutInput, saveInfoButton) });
aboutInput.addEventListener('keyup', () => { disabler(personNameInput, aboutInput, saveInfoButton) });

placeNameInput.addEventListener('keyup', () => { disabler(placeNameInput, placeLinkInput, placeAddButton) });
placeLinkInput.addEventListener('keyup', () => { disabler(placeNameInput, placeLinkInput, placeAddButton) });






renderInitCards();

