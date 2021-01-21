import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LandingPage from './components/views/LandingPage/LandingPage';

// import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/login' component={LoginPage} />
      </Router>
    </div>
  );
}

export default App;
