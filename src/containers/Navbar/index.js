import React from 'react';
import './style.css';
// import NavBurger from '../../components/NavComponents/NavBurger';
// import NavName from '../../components/NavComponents/NavName';

function Navbar(props) {
  return (<div className="navbar-main">
    {props.children}
  </div>)
}

export default Navbar;