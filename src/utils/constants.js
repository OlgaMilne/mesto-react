
const profileElement = document.querySelector('.profile');
export const buttonProfileEditElement = profileElement.querySelector('.profile__edit-button');
export const buttonAddCardElement = profileElement.querySelector('.profile__add-button');
export const buttonUserAvatarElement = profileElement.querySelector('.profile__button-userAvatar');

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_active'
};
