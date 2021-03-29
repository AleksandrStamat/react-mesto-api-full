import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const {
    isOpen, onClose, onUpdateAvatar, isLoading,
  } = props;
  const avatar = useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatar.current.value,
    });
  }
  return (
    <PopupWithForm
      name='popup_avatar'
      title='Обновить аватар'
      buttonSubmit={isLoading ? 'Загрузка...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatar}
        type='url'
        className='popup__input popup__input_avatar'
        placeholder='Ссылка на картинку'
        required
      />
      <span id='avatar-error' className='popup__span'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
