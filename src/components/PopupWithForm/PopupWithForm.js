import React from 'react';

function PopupWithForm({ isOpen, onClose, popupName, formTitle, formName, textSubmit, children }) {

  return (
    <section className={`popup  popup_for_${popupName} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h3 className="popup__heading ">
          {formTitle}
        </h3>
        <form className={`form form_name_${formName}`} name={formName} noValidate>
          {children}
          <button className="form__button" type="submit">
            {textSubmit || 'Сохранить'}
          </button>
        </form>
        <button className="popup__close-button" type="button" onClick={onClose}></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
