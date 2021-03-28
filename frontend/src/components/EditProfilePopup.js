import React, { useContext, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const { isOpen, onClose, onUpdateUser, isLoading } = props;
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleHobbyChange(e) {
    setHobby(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: hobby,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setHobby(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name='popup-profile'
      title='Редактировать профиль'
      buttonSubmit={isLoading ? 'Загрузка...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        value={name || ''}
        name='name'
        type='text'
        id='name'
        className='popup__input popup__input_name'
        placeholder='Введите имя'
        minLength='2'
        maxLength='40'
        onChange={handleNameChange}
        required
      />
      <span id='name-error' className='popup__span'></span>
      <input
        value={hobby || ''}
        name='about'
        type='text'
        id='hobby'
        className='popup__input popup__input_hobby'
        placeholder='Ваше хобби'
        minLength='2'
        maxLength='200'
        onChange={handleHobbyChange}
        required
      />
      <span id='hobby-error' className='popup__span'></span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
