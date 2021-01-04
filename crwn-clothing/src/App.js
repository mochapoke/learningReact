import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'

const HatsPage = () => (
  <div>
    <Link to='/'>home</Link>
    <h1>HATS PAGE</h1>
  </div>
)

const itemDetail = props => {
  console.log(props);
  return(
    <div>
      <button onClick={ () => props.history.push('/hats')}>HatsPage</button>
      <h1>HATS DETAIL PAGE: {props.match.params.itemID} </h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/hats/:itemID' component={itemDetail} />
      </Switch>
    </div>
  );
}

export default App;
