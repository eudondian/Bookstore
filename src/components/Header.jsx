import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      <li><Link to="/">Book</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
  </nav>
);

export default Header;
