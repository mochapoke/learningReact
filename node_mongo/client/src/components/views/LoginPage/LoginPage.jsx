import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

const LoginPage = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: email,
      password: password,
    };

    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        props.history.push('/');
      } else {
        alert('ERR!');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={onSubmitHandler}
      >
        <label>E-MAIL</label>
        <input
          type='email'
          value={email}
          onChange={onEmailHandler}
          placeholder='e-mail'
        ></input>
        <label>PASSWORD</label>
        <input
          type='password'
          value={password}
          onChange={onPasswordHandler}
          placeholder='password'
        ></input>
        <br />
        <button type='submit'>confirm</button>
      </form>
    </div>
  );
};

export default LoginPage;
