import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar';
import Footer from './containers/Footer';
import beasts from './dataobject.json';
import Beast from './components/Beast';

class App extends Component {
  state = {
    beasts
  }

  render() {

    return (
      <div className="App">
        <Navbar />

        {this.state.beasts.map(beast => (
          <Beast
            id={beast.id}
            key={beast.key}
            name={beast.name}
            image={beast.image}
          />
        ))}
        <Beast />
        <Footer />
      </div>
    );
  }
}

export default App;
