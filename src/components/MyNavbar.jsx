import React from 'react';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand ms-3" to="/favourites">Preferiti</Link> 
      </div>
    </nav>
  );
};

export default MyNavbar;

