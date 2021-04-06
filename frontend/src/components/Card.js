import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import trash from '../images/card/trash.svg';

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const { card, onCardClick, onCardLike, onCardDelete } = props;
  const { name, link, likes } = card;
  const isOwn = card.owner === currentUser._id;
  const status = card.likes.some((i) => i === currentUser._id);

  const cardLikeButtonClassName = `button card__button-like ${
    status ? 'card__button-like_solid' : ''
  }`;

  const cardDeleteButtonClassName = `button card__button-delete ${
    isOwn ? '' : 'card__button-delete_invisible'
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
    <article className='card'>
      <img
        src={link}
        alt={name}
        className='card__image'
        onClick={handleCardClick}
      />
      <button
        className={cardDeleteButtonClassName}
        type='submit'
        onClick={handleDeleteClick}
      >
      
        <img alt='Удалить' className='card__button-delete-vector' src={trash} />
      </button>
      <div className='card__description'>
        <h2 className='card__name'>{name}</h2>
        <div className='card__likes-container'>
          <button
            className={cardLikeButtonClassName}
            type='submit'
            onClick={handleLikeClick}
          />
          <p className='card__count-likes'>{likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
