import React,{useContext} from 'react';
import { NavLink,Link,useHistory } from 'react-router-dom';
import logo from '../logo.png';
import AppContext from "../appContext";
import {Menu, MenuItem, Button} from '@material-ui/core';
import { makeStyles, createStyles,Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuPaper:{
      marginTop: '50px'
    },
    fontColor:{
      color: '#8e24aa'
    }
  }),
);

const NavBar: React.FC = () => {
  const {token,setToken} = useContext(AppContext);
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    history.push("/login");
    setToken('');
  }
	return (
    <>
      <nav>
        <div className="nav-wrapper purple accent-2 px1">
          <Link to="/"><img src={logo} alt="" className="px1 align-center" width="150"/></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {token && <li><NavLink to="/create-set">Create Study Set</NavLink></li>}
            <li><Link to=""><i className="material-icons">search</i></Link></li>
            {!token && (
              <>
                <li><NavLink to="/login">Sign In</NavLink></li>
                <li><NavLink to="/register">Sign Up</NavLink></li>
              </>
            )}
            {token && <li>
                        <Button aria-controls="menu" aria-haspopup="true" onClick={handleMenuOpen}>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png" alt="" className="circle responsive-img align-center z-depth-5" width="30"></img>
                        </Button>
                      </li>
            }
          </ul>
        </div>
      </nav>
      <Menu
          className={classes.menuPaper}
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
      >
          <MenuItem className={classes.fontColor}>My Studysets</MenuItem>
          <MenuItem className={classes.fontColor}>My Favorite Studysets</MenuItem>
          <MenuItem className={classes.fontColor} onClick={handleLogout}>Log Out</MenuItem>
      </Menu>
    </>
	)
}

export default NavBar;