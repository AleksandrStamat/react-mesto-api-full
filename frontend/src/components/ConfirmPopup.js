import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup(props) {
  const {
    isOpen, onClose, onConfirmDelete, isLoading,
  } = props;
  function handleSubmit(evt) {
    evt.preventDefault();
    onConfirmDelete();
  }
  return (
    <PopupWithForm
      name='popup_confirm'
      title='Вы уверены?'
      buttonSubmit={isLoading ? 'Удаление...' : 'Да'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}
export default ConfirmPopup;
