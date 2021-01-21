import React, { useEffect } from 'react';
import { auth } from '../_actions/user_action';
import { useDispatch } from 'react-redux';

function Auth(SpecificComponent, option, adminRoute = null) {
  // option:
  // null = 아무나 출입 가능
  // true = 로그인한 유저만 출입 가능
  // false = 로그인한 유저는 출입 불가능

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        console.log(res);

        if (!res.payload.isAuth) {
          if (option) {
            props.history.push('/login');
          }
        } else {
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push('/');
          } else {
            if (option === false) props.history.push('/');
          }
        }
      });

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}

export default Auth;
