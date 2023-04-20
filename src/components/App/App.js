import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';
import Footer from '../Footer/Footer';


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '#', isSelected: false });



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
      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} popupName='avatar' formTitle="Обновить аватар" formName="avatar" textSubmit='Сохранить' inputName01='avatar' input01Placeholder="Ссылка на картинку" />
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} popupName='profile-edit' formTitle="Редактировать профиль" formName="profile-edit" textSubmit='Сохранить
    ' inputName01='name' inputName02='about' input01Placeholder="Имя" input02Placeholder="О себе"
        input01Minlength="2" input01Maxlength="40" input02Minlength="2" input02Maxlength="200" />
      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} popupName='add-card' formTitle="Новое место" formName="add-card" textSubmit='Создать
    ' inputName01='location' inputName02='linkImage' input01Placeholder="Место" input02Placeholder="Ссылка на картинку"
        input01Minlength="2" input01Maxlength="30" />
      <PopupWithForm isOpen={isDeleteCardPopupOpen} onClose={closeAllPopups} popupName='confirmation' formTitle="Вы уверены?" formName="confirmation" textSubmit='Да' />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />
    </>
  );
}

export default App;
