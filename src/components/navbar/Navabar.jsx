import React, { useState } from 'react';
// NavLink is used for internal linking giving single page smooth navigation
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navabar() {
  const [showNavbar, setShowNavbar] = useState(false); // const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <h1>Sahil C Rai</h1>
        </div>
        <div onClick={handleShowNavbar}></div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navabar;
