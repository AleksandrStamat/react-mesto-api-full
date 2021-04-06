import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

function Register(props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(email, password);
    setPassword('');
    setEmail('');
  }

  return (
    <div className='register'>
      <p className='register__heading'>Регистрация</p>
      <form className='register__form' onSubmit={handleSubmit}>
        <input
          className='register__input'
          id='email'
          name='email'
          type='email'
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='Email'
        />
        <input
          className='register__input'
          id='password'
          name='password'
          type='password'
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='Пароль'
        />
        <button
          className='button register__submit-button'
          type='submit'
          onSubmit={handleSubmit}
        >
          Зарегистрироваться
        </button>
      </form>
      <Link className='register__link' to='/signin'>
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}

export default withRouter(Register);
