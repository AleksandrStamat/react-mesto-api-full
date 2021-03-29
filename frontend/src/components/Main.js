import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main(props) {
  const {
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    cards,
    onCardClick,
    onCardLike,
    onCardDelete,
  } = props;
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className='profile'>
        <div className='profile__info'>
          <button onClick={onEditAvatar} className='profile__edit-avatar'>
            <img
              src={currentUser.avatar}
              alt='Жак-Ив Кусто'
              className='profile__avatar'
            />
          </button>
          <div className='profile__text'>
            <div>
              <h1 className='profile__name'>{currentUser.name}</h1>
              <p className='profile__hobby'>{currentUser.about}</p>
            </div>
            <button
              type='button'
              className='profile__edit'
              aria-label='Редактировать'
              onClick={onEditProfile}
            ></button>
          </div>
        </div>
        <button
          type='button'
          className='profile__add-button'
          aria-label='Добавить'
          onClick={onAddPlace}
        >
          +
        </button>
      </section>
      <section className='elements' id='elements'>
        {cards
          && cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardDelete={onCardDelete}
              onCardLike={onCardLike}
            />
          ))}
      </section>
    </main>
  );
}

export default Main;
