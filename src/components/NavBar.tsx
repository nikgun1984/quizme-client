import React from 'react';
import logo from '../logo.png';

const NavBar: React.FC = () => {
	return (
		<nav>
    <div className="nav-wrapper purple accent-2 px1">
		<a href="/"><img src={logo} alt="" className="NavBar-logo" width="150"/></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Sign In</a></li>
        <li><a href="/">Sign Up</a></li>
      </ul>
    </div>
  </nav>
	)
}

export default NavBar;