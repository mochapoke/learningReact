import React from 'react';

import './App.css';

import Card from './components/userCard/userCard.component';
import Effect from './components/effect/effect.components';
import { MovieProvider } from './components/movie/MovieContext';
import AddMovie from './components/movie/AddMovie';

import Nav from './components/movie/nav';
import MovieList from './components/movie/MovieList';

function App() {
  return (
    <MovieProvider>
      <div className='App'>
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
