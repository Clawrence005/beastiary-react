import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar';
import NavName from './components/NavComponents/NavName';
import Footer from './containers/Footer';
import beasts from './beastobject.json';
import siteInfo from './siteobject.json';
import Beast from './components/Beast';
import BeastGrid from './containers/BeastGrid';

class App extends Component {
  state = {
    siteInfo, beasts

  }

  render() {

    return (
      <div className="App">

        <Navbar >
          {this.state.siteInfo.map(siteInfo => (
            <NavName
              navName={siteInfo.navName}
            />
          ))}
        </Navbar>

        {/* <Navbar>
          <NavName
            navName={this.state.siteInfo.navName}
          />
        </Navbar> */}
        <BeastGrid >
          {this.state.beasts.map(beast => (
            <Beast
              id={beast.id}
              key={beast.id}
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
