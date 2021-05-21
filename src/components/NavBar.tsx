import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import logo from '../logo.png';

const NavBar: React.FC = () => {
	return (
    <>
      <nav>
        <div className="nav-wrapper purple accent-2 px1">
          <Link to="/"><img src={logo} alt="" className="px1 align-center" width="150"/></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/create-set">Create Study Set</NavLink></li>
            <li><Link to=""><i className="material-icons">search</i></Link></li>
            <li><NavLink to="/login">Sign In</NavLink></li>
            <li><NavLink to="/register">Sign Up</NavLink></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png" alt="" className="circle responsive-img align-center z-depth-5" width="30"></img></li>
          </ul>
        </div>
      </nav>
    </>
	)
}

export default NavBar;