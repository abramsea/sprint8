



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


function setEventListeners(form) {                                   
  form.addEventListener('input', handlerInputForm);
  form.addEventListener('submit', sendForm)
}
