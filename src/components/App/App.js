import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';
import Footer from '../Footer/Footer';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '#', isSelected: false });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(true);
  };

  function handleCardClick(name, link) {
    setSelectedCard({ name: name, link: link, isSelected: true });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: '', link: '#', isSelected: false });
  }

  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />

      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} popupName='avatar' formTitle="Обновить аватар" formName="avatar" textSubmit='Сохранить' >
        <input className="form__item form__item_name_avatar" type="url" name="avatar" placeholder="Ссылка на картинку"
          required />
        <span className="form__item-error form__item-error_name_avatar"> </span>
      </PopupWithForm>

      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} popupName='profile-edit' formTitle="Редактировать профиль" formName="profile-edit" textSubmit="Сохранить" >
        <input className="form__item form__item_name_name" type="text" name="name" placeholder="Имя" minLength="2"
          maxLength="40" required />
        <span className="form__item-error form__item-error_name_name"> </span>
        <input className="form__item form__item_name_about" type="text" name="about" placeholder="О себе" minLength="2"
          maxLength="200" required />
        <span className="form__item-error form__item-error_name_about"> </span>
      </PopupWithForm>

      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} popupName='add-card' formTitle="Новое место" formName="add-card" textSubmit="Создать" >
        <input className="form__item form__item_name_location" type="text" name="location" placeholder="Место" minLength="2"
          maxLength="30" required />
        <span className="form__item-error form__item-error_name_location"> </span>
        <input className="form__item form__item_name_linkImage" type="url" name="linkImage" placeholder="Ссылка на картинку"
          required />
        <span className="form__item-error form__item-error_name_linkImage"> </span>
      </PopupWithForm>

      <PopupWithForm isOpen={isDeleteCardPopupOpen} onClose={closeAllPopups} popupName='confirmation' formTitle="Вы уверены?" formName="confirmation" textSubmit='Да' />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <Footer />
    </>
  );
}

export default App;
