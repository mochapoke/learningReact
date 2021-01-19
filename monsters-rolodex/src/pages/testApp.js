import React, { useEffect, useState } from 'react';

import { CardList } from '../components/card-list/card-list.component';
import { SearchBox } from '../components/search-box/search-box.component';

const TestApp = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredResult, setFilteredResult] = useState([]);

  const fetchItems = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setMonsters(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    const results = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    setFilteredResult(results);
  }, [searchField]);

  return (
    <div className='App'>
      <h1>Monster Roledex</h1>
      <SearchBox
        placeholder='search monsters'
        handleChange={(event) => setSearchField(event.target.value)}
      />
      <CardList monsters={filteredResult}></CardList>
    </div>
  );
};

export default TestApp;
