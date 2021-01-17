import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>My Movie Collections : {movies.length}</h3>
    </div>
  );
};

export default Nav;
