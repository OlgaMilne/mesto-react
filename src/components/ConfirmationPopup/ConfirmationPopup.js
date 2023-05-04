import { useEffect, useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function ConfirmationPopup({ isOpen, onClose, onConfirm }) {

    const [textSubmit, setTextSubmit] = useState('Да');

    useEffect(() => {
        setTimeout(() => setTextSubmit('Да'), 1000);
    }, [isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        setTextSubmit('Удаление...');
        onConfirm();
    }

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isValid={true}
            popupName='confirmation' formTitle="Вы уверены?" formName="confirmation" textSubmit={textSubmit} />
    )
}

export default ConfirmationPopup;
