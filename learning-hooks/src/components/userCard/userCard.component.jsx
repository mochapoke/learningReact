import React, { useState } from 'react';

import './userCard.styles.scss';

const Card = () => {
  const [name, setName] = useState('mocha');
  return (
    <div className='card-container'>
      <div className='card'>
        <h1 className='name'>{name}</h1>
      </div>
      <button onClick={() => setName('Yui')}>click to change your name</button>
    </div>
  );
};

export default Card;
