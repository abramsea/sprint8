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
      
      isFieldValid(this.form);
  
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
  
  