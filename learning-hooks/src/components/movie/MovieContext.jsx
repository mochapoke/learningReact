import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Poter',
      price: '$10',
      id: 232123,
    },
    {
      name: 'Game of Throne',
      price: '$10',
      id: 1232154,
    },
    {
      name: 'Inception',
      price: '$12',
      id: 976337,
    },
  ]);

  // Provider가 하는 일은 기본적으로 위의 useState정보를
  // <MovieContext.Provider> 내부의 컴포넌트에 전달하는 거임
  // {props.children} 의미는:
  // render all the child components
  // whatever it's wrapped in between these(<MovieContext>)
  // 그리고 App.js에서 MoviProvider가 wrapp 하는 거임
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
