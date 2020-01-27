import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar';
import Footer from './containers/Footer';
import beasts from './dataobject.json';
import Beast from './components/Beast';
import BeastGrid from './containers/BeastGrid';

class App extends Component {
  state = {
    beasts
  }

  render() {

    return (
      <div className="App">
        <Navbar />
        <BeastGrid >
          {this.state.beasts.map(beast => (
            <Beast
              id={beast.id}
              key={beast.key}
              name={beast.name}
              image={beast.image}
            />
          ))}
        </BeastGrid>
        <Footer />
      </div>
    );
  }
}

export default App;
