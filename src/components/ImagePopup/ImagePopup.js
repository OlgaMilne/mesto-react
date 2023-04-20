import React from 'react';

function ImagePopup({card, onClose}) {
    return (
        <section className={`popup popup_for_image popup_overlay_dark ${card.isSelected ? "popup_opened" : ""}`}>
            <div className="image-popup">
                <img className="image-popup__image" src={card.link} alt={card.name} />
                <p className="image-popup__caption">
                {card.name}
                </p>
                <button className="popup__close-button" type="button" onClick={onClose}></button>
            </div>
        </section>
    );
}

export default ImagePopup;
