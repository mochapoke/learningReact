import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LandingPage from './components/views/LandingPage/LandingPage';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/register'>RegisterPage</Link>
            </li>
            <li>
              <Link to='/login'>LoginPage</Link>
            </li>
          </ul>
        </div>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/login' component={LoginPage} />
      </Router>
    </div>
  );
}

export default App;
