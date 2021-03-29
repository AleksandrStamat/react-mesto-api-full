import React from 'react';

function PopupWithForm(props) {
  const {
    name,
    isOpen,
    onClose,
    title,
    children,
    buttonSubmit,
    onSubmit,
  } = props;

  return (
    <div
      className={`popup ${name} ${isOpen ? 'popup_opened' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={`popup__container popup__container_${name}`}>
        <form className='popup__form' name={name} onSubmit={onSubmit}>
          <button
            type='button'
            onClick={onClose}
            className='popup__button-close'
          ></button>
          <h2 className='popup__title'> {title} </h2>
          {children}
          <button
            className='popup__button-save'
            type='submit'
            aria-label={buttonSubmit}
          >
            {buttonSubmit}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
