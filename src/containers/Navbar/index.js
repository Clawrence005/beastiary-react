import React from 'react';
import NavBurger from '../../components/NavComponents/NavBurger';
import NavName from '../../components/NavComponents/NavName';

function Navbar() {
  return (
    <nav className="Navbar">
      <NavName />
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Link A
        </a>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Link B
        </a>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Link C
        </a>
      <NavBurger />
    </nav>
  )
}

export default Navbar;