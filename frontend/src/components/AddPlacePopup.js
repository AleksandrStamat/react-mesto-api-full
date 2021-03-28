import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlace, isLoading } = props;
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
    setName('');
    setLink('');
  }
  return (
    <PopupWithForm
      name='popup-item'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonSubmit={isLoading ? 'Загрузка...' : 'Создать'}
    >
      <input
        name='name'
        type='text'
        id='place'
        className='popup__input popup__input_link'
        placeholder='Название'
        minLength='1'
        maxLength='30'
        onChange={handleNameChange}
        value={name}
        required
      />
      <span id='place-error' className='popup__span'></span>
      <input
        name='link'
        type='url'
        id='link'
        className='popup__input'
        placeholder='Ссылка на картинку'
        onChange={handleLinkChange}
        value={link}
        required
      />
      <span id='link-error' className='popup__span'></span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
