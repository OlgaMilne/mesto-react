import { useEffect, useState } from 'react';
import api from '../../utils/api';
import Card from '../Card/Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userAvatar, setUserAvatar] = useState('#');
    const [userName, setUserName] = useState('Имя');
    const [userDescription, setUserDescription] = useState('Активность');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserProfile(), api.getInitialCards()])
            .then(([userData, cardsData]) => {
                setUserAvatar(userData.avatar);
                setUserName(userData.name);
                setUserDescription(userData.about);
                setCards(cardsData);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <main>
            <section className="profile" key="sectionProfile">
                <button type="button" className="profile__button-userAvatar" onClick={onEditAvatar}  >
                    <img className="profile__userAvatar" src={userAvatar} alt="аватар пользователя" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__userName">
                        {userName}
                    </h1>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile} ></button>
                    <p className="profile__userAbout">
                        {userDescription}
                    </p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>

            <section className="gallery" aria-label="фото галерея" key="sectionGallery">
                <ul className="cards">

                    {cards.map((card) => {
                        return (
                            <Card name={card.name} link={card.link} likes={card.likes.length} key={card._id}
                                onCardClick={onCardClick} />
                        );
                    })}

                </ul>
            </section>
        </main>
    );
}

export default Main;