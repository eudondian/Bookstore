import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Header = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul className="nav-links">
      <li><Link className="links" to="/">Book</Link></li>
      <li><Link className="links" to="/categories">Categories</Link></li>
    </ul>
    <CgProfile className="avatar" />
  </nav>
);

export default Header;
