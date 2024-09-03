import React from 'react';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favourites">Preferiti</Link>
    </nav>
  );
};

export default MyNavbar;
