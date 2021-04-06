import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function MenuMobile(props) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className={`menu-mobile__position ${props.isShowMenu}`}>
      <menu className='menu-mobile'>
        <span>{currentUser.email || ''}</span>
        <button className='button header__link menu-mobile__exit' onClick={props.loggedOut}>Выйти</button>
      </menu>
    </div>
  );
}

export default MenuMobile;
