import React from 'react';
import succes from '../images/status/ok.png';
import error from '../images/status/problem.png';

function InfoTooltip(props) {
  const { onClose } = props;
  return (
    <div
      className={`popup popup-status ${props.isOpen ? 'popup_opened' : ' '}`}
      id='info-tooltip'
    >
      <div className='popup-status__container'>
        <img
          className='popup-status__image'
          src={props.status ? succes : error}
          alt={props.status ? 'Успешно' : 'Ошибка'}
        />
        <h2 className='popup-status__title'>
          {props.status
            ? 'Вы успешно зарегистрировались!'
            : `Что-то пошло не так!
          Попробуйте ещё раз.`}
        </h2>
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

export default InfoTooltip;
