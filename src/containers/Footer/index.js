import React from 'react'
import './style.css';

function Footer(props) {
  return (
    <footer className="footer-div">
      {props.children}
    </footer>
  )
}
export default Footer;