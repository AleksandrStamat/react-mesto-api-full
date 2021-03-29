import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, withRouter } from 'react-router-dom';
import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/utils';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmPopup from './ConfirmPopup';
import Preloader from './Preloader';
import Login from './Login.js';
import Register from './Register.js';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from './ProtectedRoute.js';
import * as auth from '../utils/auth.js';

function App() {
  const history = useHistory();
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cardDelete, setCardDelete] = useState({});
  const [isSiteLoading, setSiteLoading] = useState(true);
  const [isLoading, setLoading] = useState();
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({
    isImageOpen: false,
    link: '',
    name: '',
  });
  // Проверить токен
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .checkToken(jwt)
        .then(({ email }) => {
          if (email) {
            getUserInfo(jwt);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setSiteLoading(false);
    }
    // eslint-disable-next-line
  }, []);

  function getUserInfo(token) {
    api
      .getAllNeededData(token)
      .then(([user, items]) => {
        setCards(items);
        setCurrentUser(user);
        setLoggedIn(true);
        history.push('/');
      })
      .catch((err) => console.log(`Ошибка при загрузке данных: ${err}`))
      .finally(() => setTimeout(() => setSiteLoading(false), 1000));
  }
  // Обновление данных профиля
  function handleUpdateUser(data) {
    const token = localStorage.getItem('jwt');
    setLoading(true);
    api
      .changeProfile(data, token)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
        setLoading(false);
      })
      .catch((err) => console.log(`Ошибка при обновлении данных: ${err}`));
  }

  // Обновление аватара
  function handleUpdateAvatar(data) {
    const token = localStorage.getItem('jwt');
    setLoading(true);
    api
      .changeAvatar(data, token)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
        setTimeout(() => setLoading(false), 200);
      })
      .catch((err) => console.log(`Ошибка при обновлении аватара: ${err}`));
  }

  // Добавление карточки
  function handleAddPlace({ name, link }) {
    const token = localStorage.getItem('jwt');
    setLoading(true);
    api
      .addCard({ name, link }, token)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
        setTimeout(() => setLoading(false), 200);
      })
      .catch((err) => console.log(`Ошибка при добавлении карточки: ${err}`));
  }
  // Удалить карточку после подтверждения
  function handleConfirm() {
    const token = localStorage.getItem('jwt');
    setLoading(true);
    api
      .deleteCard(cardDelete._id, token)
      .then(() => {
        const newCards = cards.filter((card) => card !== cardDelete);
        closeAllPopups();
        setCards(newCards);
        setTimeout(() => setLoading(false), 200);
      })
      .catch((err) => console.log(`Ошибка при загрузке: ${err}`))
      .finally(() => setLoading(false));
  }

  // Кликнуть на удаление карточки
  function handleCardDelete(card) {
    setConfirmPopupOpen(true);
    setCardDelete(card);
  }

  // Лайк/дизлайк
  function handleCardLike(card) {
    const status = card.likes.some((i) => i === currentUser._id);
    const token = localStorage.getItem('jwt');
    api
      .toggleLike(card._id, status, token)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => console.log(`Ошибка при загрузке лайков: ${err}`));
  }

  // Открыть AvatarPopup
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  // Открыть EditProfilePopup
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  // Открыть AddPlacePopup
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  // Открыть увеличенное фото
  function handleCardClick({ link, name }) {
    setSelectedCard({ isImageOpen: true, link, name });
  }

  // Закрыть все попапы
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setConfirmPopupOpen(false);
    setInfoTooltipOpen(false);
    setSelectedCard({
      isImageOpen: false,
      link: '',
      name: '',
    });
  }
  // Вход
  function handleLogin(email, password) {
    auth
      .authorization(email, password)
      .then(({ token }) => {
        if (token) {
          localStorage.setItem('jwt', token);
          setLoggedIn(true);
          getUserInfo(token);
        }
      })
      .catch((err) => {
        console.log(err);
        setInfoTooltipOpen(true);
        setStatus(false);
      });
  }
  // Выход
  function handleLogout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
  }
  // Регистрация
  function handleRegister(email, password) {
    auth
      .register(email, password)
      .then((res) => {
        if (res) {
          setInfoTooltipOpen(true);
          setStatus(true);
          history.push('/signin');
        }
      })
      .catch((error) => {
        console.log(error);
        setInfoTooltipOpen(true);
        setStatus(false);
      });
  }

  // закрытие по esc
  const closePopupsByEsc = (e) => {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page' onKeyUp={closePopupsByEsc}>
        <Header loggedOut={handleLogout} loggedIn={loggedIn} />
        {isSiteLoading ? (
          <Preloader />
        ) : (
          <>
            <Switch>
              <Route path='/signin'>
                <Login handleLogin={handleLogin} />
              </Route>
              <Route path='/signup'>
                <Register handleRegister={handleRegister} />
              </Route>
              <ProtectedRoute
                exact
                path='/'
                loggedIn={loggedIn}
                component={Main}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                cards={cards}
              />
            </Switch>
            <Footer />
          </>
        )}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
          isLoading={isLoading}
        />
        <ConfirmPopup
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          onConfirmDelete={handleConfirm}
          isLoading={isLoading}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />
        <ImagePopup image={selectedCard} onClose={closeAllPopups} />
        <InfoTooltip
          status={status}
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
