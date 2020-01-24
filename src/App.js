import React from 'react';
import './App.css';
import Navbar from './containers/Navbar';

function App() {
  return (
    <div className="App">
      {/* <nav className="Navbar">hfgfhfh</nav> */}
      <Navbar />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
