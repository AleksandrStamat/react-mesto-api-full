import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/header/logo.svg';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Header(props) {
  const currentUser = useContext(CurrentUserContext);
  // Открыть/закрыть email пользователя в мобильной версии
  function openAuthInfo() {
    props.showMenu('mobile_position');
  }

  const { pathname } = useLocation();
  const linkText = `${pathname === '/signin' ? 'Регистрация' : 'Войти'}`;
  const linkPath = `${pathname === '/signin' ? '/signup' : '/signin'}`;

  return (

      <header className='header__position'>
        <div className='header'>
          <img src={logo} alt='Логотип «Mesto Russia»' className='header__logo'/>
          {props.loggedIn
            ? (<>
                <div className='header__info-desktop'>
                  <span>{currentUser.email || ''}</span>
                  <button className='button header__link' onClick={props.loggedOut}>Выйти</button>
                </div>

                <button
                  className={`header__menu  ${props.classHeaderMenu}`}
                  onClick={openAuthInfo}
                >
                  <span/>
                </button>

              </>
            )
            : (<Link to={linkPath} className="button header__link">{linkText}</Link>)
          }
        </div>
      </header>
  );
}

export default Header;
