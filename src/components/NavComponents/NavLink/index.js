import React from 'react';

function NavLink(props) {
  return (
    <div className="nav-link" >

      <a href={props.linkSrc}>
        <h2>{props.linkName}</h2>
      </a>
    </div>
  )
}

export default NavLink;