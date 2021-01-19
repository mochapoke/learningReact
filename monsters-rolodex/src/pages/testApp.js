import React, { useEffect, useState } from 'react';
import '../App.css';

import { CardList } from '../components/card-list/card-list.component';
import { SearchBox } from '../components/search-box/search-box.component';

const TestApp = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResult, setFilteredResult] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredResult(filteredMonsters);
  };

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      setMonsters(data);
    };
    fetchItems();
  }, []);

  return (
    <div className='App'>
      <h1>Monster Roledex</h1>
      <SearchBox placeholderw='search monsters' handleChange={handleChange} />

      {!searchTerm ? (
        <CardList monsters={monsters}></CardList>
      ) : (
        <CardList monsters={filteredResult}></CardList>
      )}
    </div>
  );
};

export default TestApp;
