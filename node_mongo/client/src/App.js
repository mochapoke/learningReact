import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LandingPage from './components/views/LandingPage/LandingPage';

import Auth from './hoc/auth';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Auth(LandingPage, null)} />
        <Route exact path='/register' component={Auth(RegisterPage, false)} />
        <Route exact path='/login' component={Auth(LoginPage, false)} />
      </Router>
    </div>
  );
}

export default App;
