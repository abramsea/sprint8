const personName = document.querySelector('.user-info__name');
const about = document.querySelector('.user-info__job');

const addPopup = new Popup(document.querySelector('.popup_type_add'));
const editPopup = new Popup(document.querySelector('.popup_type_edit'));
const imagePopup = new Popup(document.querySelector('.popup_type_image'));


const jaques = new UserInfo('Jaques Causteau', 'Sailor, Researcher');


addPopup.createAddPopup();
editPopup.createEditPopup();
imagePopup.createImagePopup();



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


const myCards = initialCards.map(item => {
  item = new Card(item.name, item.link);
  item.create();
  item.setEventListeners();
  return item
});

console.log(myCards)


const placesList = document.querySelector('.places-list');
const cardList = new CardList(placesList, myCards);


cardList.render(placesList);

const addForm = document.forms.new;
const editForm = document.forms.edit;


const addFormValidator = new FormValidator(addForm);
const editFormValidator = new FormValidator(editForm);

console.log(addFormValidator)




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



addFormValidator.setEventListeners();
editFormValidator.setEventListeners();