import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar';
import NavName from './components/NavComponents/NavName';
import NavLink from './components/NavComponents/NavLink';
import Footer from './containers/Footer';
import beasts from './beastobject.json';
import siteInfo from './siteobject.json';
import Beast from './components/Beast';
import BeastGrid from './containers/BeastGrid';

class App extends Component {
  state = {
    siteInfo, beasts,
    links: [{
      name: "webpage",
      id: 1,
      linkSrc:
        "https://www.colinlawrence.dev"
    }, {
      name: "Portfolio",
      id: 2,
      linkSrc: "https://www.google.com"
    }, {
      name: "Contact",
      id: 3,
      linkSrc: "https://www.yahoo.com"
    }],

    socialMediaLinks: [{
      name: "webpage",
      id: 1,
      imgSrc: "#",
      linkSrc: "https://www.colinlawrence.dev"
    }, {
      name: "Portfolio",
      id: 2,
      imgSrc: "#",
      linkSrc: "https://www.google.com"
    }, {
      name: "Contact",
      id: 3,
      imgSrc: "#",
      linkSrc: "https://www.yahoo.com"
    }]
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



          {/* {this.state.siteInfo.map(siteInfo => (
            <NavName>     {siteInfo.navName}</NavName>
          ))} */}

          {this.state.links.map(link => (
            <NavLink
              linkName={link.name}
              key={link.id}
              id={link.id}
              linkSrc={link.linkSrc}
            />))}

        </Navbar>

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
