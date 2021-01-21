import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';

const RegisterPage = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onNameHandler = (e) => {
    setName(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert('비밀번호 불일치');
    }

    let body = {
      email: email,
      password: password,
      name: name,
    };

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.registerSuccess) {
        props.history.push('/login');
      } else {
        alert('fail to sign up!');
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
        <label>Email</label>
        <input
          type='email'
          value={email}
          placeholder='email'
          onChange={onEmailHandler}
        />

        <label>Name</label>
        <input
          type='text'
          value={name}
          placeholder='name'
          onChange={onNameHandler}
        />

        <label>Password</label>
        <input
          type='password'
          value={password}
          placeholder='password'
          onChange={onPasswordHandler}
        />

        <label>confirm Password</label>
        <input
          type='password'
          value={confirmPassword}
          placeholder='password'
          onChange={onConfirmPasswordHandler}
        />
        <button type='submit'>회원 가입</button>
      </form>
    </div>
  );
};

export default RegisterPage;
