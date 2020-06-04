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