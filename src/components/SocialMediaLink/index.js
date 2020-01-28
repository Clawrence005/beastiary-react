import React from 'react';
import './style.css';

function SocialMediaLink(props) {
  return (
    // <div className="social-media">

    <a href={props.linkSrc} className="social-media-link">
      <img src={props.image} alt={props.name} className="social-media-image" />
      <h3>
        {props.name}
      </h3>
    </a>
    // </div>
  )
}

export default SocialMediaLink;