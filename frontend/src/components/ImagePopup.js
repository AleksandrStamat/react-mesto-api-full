import React from 'react';

function ImagePopup(props) {
  const { onClose, image } = props;

  const { isImageOpen, link, name } = image;

  return (
    <div
      className={`popup popup-image ${isImageOpen && 'popup_opened'}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className='popup-image__container'>
        <img src={link} className='popup-image__element' alt={name} />
        <h2 className='popup-image__text'>{name}</h2>
        <button
          onClick={onClose}
          type='button'
          id='popup-image-close'
          className='popup__button-close'
          aria-label='Закрыть Окно'
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
