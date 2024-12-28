import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/commission">Commission</Link>
        </li>
        <li className="nav-item">
          <Link to="/project">Project</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;