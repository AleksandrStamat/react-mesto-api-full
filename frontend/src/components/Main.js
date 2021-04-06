import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import edit from '../images/profile/edit.svg';
import plus from '../images/profile/plus.svg';
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
    <main className='content'>
      <section className='profile'>
        <div className='profile__position'>
          <button
            className='button profile__avatar-edit'
            type='button'
            onClick={onEditAvatar}
            onKeyDown={onEditAvatar}
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className='profile__avatar-image'
            />
          </button>

          <div className='profile__user-info'>
            <div className='profile__name-edit-position'>
              <h1 className='profile__user-info-name'>{currentUser.name}</h1>
              <button
                className='button profile__button-edit'
                type='button'
                onClick={onEditProfile}
                onKeyDown={onEditProfile}
              >
                <img
                  alt='Редактировать профиль'
                  className='profile__button-edit-vector'
                  src={edit}
                />
              </button>
            </div>
            <p className='profile__user-info-about'>{currentUser.about}</p>
          </div>
        </div>
        <button
          className='button profile__button-add'
          type='button'
          onClick={onAddPlace}
          onKeyDown={onAddPlace}
        >
          <img
            alt='Добавить карточку'
            className='profile__button-add-vector'
            src={plus}
          />
        </button>
      </section>
      
      <section className='card-container'>
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
