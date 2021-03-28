import React, { useContext } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function HeaderBar(props) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className='header__bar-container'>
      <Switch>
        <Route exact path='/'>
          <div className='header__container'>
            <p className='header__email'>{currentUser.email || ''}</p>
            <Link
              to='/signin'
              className='header__link'
              onClick={props.loggedOut}
            >
              Выйти
            </Link>
          </div>
        </Route>
        <Route path='/signin'>
          <Link to='/signup' className='header__link'>
            Регистрация
          </Link>
        </Route>

        <Route path='/signup'>
          <Link to='/signin' className='header__link'>
            Войти
          </Link>
        </Route>
      </Switch>
    </div>
  );
}

export default HeaderBar;
