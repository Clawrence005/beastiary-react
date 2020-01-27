import React from 'react';

function SocialMediaLink(props) {
  return (
    <div className="social-media">
      <img src={props.imgSrc} alt={props.name} />
      <a href={props.linkSrc}>
        <h3>
          {props.linkName}
        </h3>
      </a>
    </div>
  )
}