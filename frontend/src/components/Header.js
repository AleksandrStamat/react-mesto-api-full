import React from 'react';
import logo from '../images/header/logo.svg';
import burger from '../images/header/burger-icon.svg';
import close from '../images/header/close-icon.svg';
import NavBar from './NavBar';

function Header(props) {
  const [burgerOpen, setBurgerOpen] = React.useState(false);

  function handleBurgerChange(e) {
    setBurgerOpen(!burgerOpen);
  }

  return (
    <header className='header'>
      {burgerOpen && (
        <div className='header__bar-for-small'>
          <NavBar loggedOut={props.loggedOut} email={props.email} />
        </div>
      )}
      <div className='header__wrapper'>
        <img className='header__logo' src={logo} alt='Место-логотип' />
        <div className='header__burger'>
          {burgerOpen ? (
            <img
              className='header__burger-close'
              src={close}
              alt='закрыть'
              onClick={handleBurgerChange}
            />
          ) : (
            <img
              className='header__burger-icon'
              src={burger}
              alt='бургер'
              onClick={handleBurgerChange}
            />
          )}
        </div>
        <div className='header__bar-for-big'>
          <NavBar loggedOut={props.loggedOut} />
        </div>
      </div>
    </header>
  );
}

export default Header;
