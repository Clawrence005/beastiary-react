import React from 'react'
import "./style.css"
function Beast(props) {
  return (
    <div className="beast-div">
      <h2>{props.name}</h2>

      <img
        className="beast-image"
        key={props.id}
        src={props.image}
        alt={"image-" + props.name}
        width="55px"
        height="55px"
      />
      <p>{props.summary}</p>
      <h4> {props.malicious}</h4>

    </div>
  )
}

export default Beast;