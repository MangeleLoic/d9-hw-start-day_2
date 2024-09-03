import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavourite } from '../redux/favouritesSlice';

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Preferiti</h1>
      <ul>
        {favourites.map((company) => (
          <li key={company.id}>
            <span>{company.name}</span>
            <button onClick={() => dispatch(removeFavourite(company))}>
              Rimuovi dai preferiti
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
