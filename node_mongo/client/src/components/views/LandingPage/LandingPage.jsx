import React, { useEffect } from 'react';
import axios from 'axios';

const LandingPage = (props) => {
  useEffect(() => {
    axios.get('/api/hello').then((res) => console.log(res.data));
  }, []);

  const onClickHandler = () => {
    axios.get('/api/users/logout').then((res) => {
      //      console.log(res.data);
      if (res.data.success) {
        props.history.push('/login');
      } else {
        alert('로그아웃하는데 실패함');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <h2>Landing Page</h2>
      <button onClick={onClickHandler}>Log Oot</button>
    </div>
  );
};

export default LandingPage;
