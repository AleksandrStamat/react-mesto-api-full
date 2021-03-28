import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

function Login(props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    props.handleLogin(email, password);
  }
  return (
    <div className='login'>
      <p className='login__heading'>Вход</p>
      <form className='login__form' onSubmit={handleSubmit}>
        <input
          className='login__input'
          id='email'
          name='email'
          type='email'
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='Email'
        />
        <input
          className='login__input'
          id='password'
          name='password'
          type='password'
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='Пароль'
        />
        <button
          className='login__submit-button'
          type='submit'
          onSubmit={handleSubmit}
        >
          Войти
        </button>
      </form>
      <Link className='login__link' to='/signup'>
        Ещё не зарегистрированы? Регистрация
      </Link>
    </div>
  );
}

export default withRouter(Login);
