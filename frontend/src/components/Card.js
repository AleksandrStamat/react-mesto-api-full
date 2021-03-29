import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import trash from '../images/card/trash.svg';

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const {
    card, onCardClick, onCardLike, onCardDelete,
  } = props;
  const { name, link, likes } = card;
  const isOwn = card.owner === currentUser._id;
  const status = card.likes.some((i) => i === currentUser._id);

  const cardLikeButtonClassName = `element__like button ${
    status && 'element__like_active'
  }`;

  const cardDeleteButtonClassName = `element__trash ${
    isOwn ? 'element__trash' : 'element__trash_display'
  }`;

  function handleCardClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className='element'>
      <div>
        <button
          type='button'
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick}
        >
          <img src={trash} alt='trash' />
        </button>
        <img
          className='element__foto'
          src={link}
          alt={name}
          onClick={handleCardClick}
        />
      </div>
      <div className='element__position'>
        <h2 className='element__text'>{name}</h2>
        <div className='element__like-content'>
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type='button'
            id='like'
          ></button>
          <p className='element__like-count'>{likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
