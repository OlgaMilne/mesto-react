import React from 'react';

function PopupWithForm({ isOpen, onClose, popupName, formTitle, formName, textSubmit,
  inputName01, inputName02,  input01Type, input01Placeholder, 
  input01Minlength, input01Maxlength,  input02Type, input02Placeholder, input02Minlength, input02Maxlength }) {

  if (inputName01 === undefined) {
    return (
      <section className={`popup  popup_for_${popupName} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <h3 className="popup__heading popup__heading_margin_short">
            {formTitle}
          </h3>
          <form className={`form form_name_${formName}`} name={formName} noValidate>
            <button className="form__button" type="submit">
              {textSubmit}
            </button>
          </form>
          <button className="popup__close-button" type="button" onClick={onClose}></button>
        </div>
      </section>
    );
  } else if (inputName02 === undefined) {
    return (
      <section className={`popup  popup_for_${popupName} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <h3 className="popup__heading">
            {formTitle}
          </h3>
          <form className={`form form_name_${formName}`} name={formName} noValidate>
            <input className={`form__item form__item_name_${inputName01}`} type={input01Type} name={inputName01} placeholder={input01Placeholder}
              required />
            <span className={`form__item-error form__item-error_name_${inputName01}`}> </span>
            <button className="form__button" type="submit">
              {textSubmit}
            </button>
          </form>
          <button className="popup__close-button" type="button" onClick={onClose}></button>
        </div>
      </section>
    );
  } else {
    return (
      <section className={`popup  popup_for_${popupName} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <h3 className="popup__heading">
            {formTitle}
          </h3>
          <form className={`form form_name_${formName}`} name={formName} noValidate>
            <input className={`form__item form__item_name_${inputName01}`} type={input01Type} name={inputName01} placeholder={input01Placeholder}
              minLength={input01Minlength ? input01Minlength : null} maxLength={input01Maxlength ? input01Maxlength : null} required />
            <span className="form__item-error form__item-error_name_name"> </span>
            <input className={`form__item form__item_name_${inputName02}`} type={input02Type} name={inputName02} placeholder={input02Placeholder}
              minLength={input02Minlength ? input02Minlength : null} maxLength={input02Maxlength ? input02Maxlength : null} required />
            <span className="form__item-error form__item-error_name_about"> </span>
            <button className="form__button" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-button" type="button" onClick={onClose}></button>
        </div>
      </section>
    );
  };

}





export default PopupWithForm;


