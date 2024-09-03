import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults } from '../redux/actions';
import { addFavourite } from '../redux/favouritesSlice';

const Home = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search);

  const handleSearch = () => {
    dispatch(fetchSearchResults(query));
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cerca azienda..."
      />
      <button onClick={handleSearch}>Cerca</button>
      <ul>
        {searchResults.map((company) => (
          <li key={company.id}>
            <span>{company.name}</span>
            <button onClick={() => dispatch(addFavourite(company))}>
              Aggiungi ai preferiti
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
