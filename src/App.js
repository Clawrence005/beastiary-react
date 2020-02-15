import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar';
import NavName from './components/NavComponents/NavName';
import NavLink from './components/NavComponents/NavLink';
import NavBurger from './components/NavComponents/NavBurger';
import Footer from './containers/Footer';
import SocialMediaLinks from './components/SocialMediaLink';
import beasts from './beastobject.json';
import siteInfo from './siteobject.json';
import Beast from './components/BeastComponents/Beast';
import BeastGrid from './containers/BeastGrid';
import BeastHeader from './components/BeastComponents/BeastHeader';

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
      image: "https://images.pexels.com/photos/1224158/pexels-photo-1224158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      linkSrc: "https://www.colinlawrence.dev"
    }, {
      name: "Portfolio",
      id: 2,
      image: "https://images.pexels.com/photos/1224158/pexels-photo-1224158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      linkSrc: "https://www.google.com"
    }, {
      name: "Contact",
      id: 3,
      image: "https://images.pexels.com/photos/1224158/pexels-photo-1224158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
          <NavBurger />
        </Navbar>

        <BeastGrid >

          {this.state.beasts.map(beast => (
            <div className="beast-main-div">
              {/* <BeastHeader
                key={beast.id}
                name={beast.name} /> */}
              <Beast
                id={beast.id}
                key={beast.id}
                name={beast.name}
                image={beast.image}
                malicious={beast.malicious}
                summary={beast.summary}
              />
            </div>
          ))}

        </BeastGrid>
        <Footer>
          {this.state.socialMediaLinks.map(socialMediaLink => (
            <SocialMediaLinks
              key={socialMediaLink.id}
              linkSrc={socialMediaLink.linkSrc}
              alt={socialMediaLink.name}
              image={socialMediaLink.image}
              name={socialMediaLink.name}
            />
          ))}
        </Footer>
      </div>
    );
  }
}

export default App;
