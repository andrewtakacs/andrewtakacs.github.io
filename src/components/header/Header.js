// src/components/Header/Header.js
import React from 'react';
import './Header.css'; // Importing the CSS for Header

const Header = () => {
  return (
    <div className="header">
      <h1>@</h1>
      <div className="menu-icon" id="menuIcon">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;