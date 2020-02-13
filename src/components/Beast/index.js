import React from 'react'
import "./style.css"
function Beast(props) {
  const malicious = props.malicious;

  return (
    <div className="beast-content-div">

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
      {malicious ? (
        <p>I'm malicious component</p>
      ) : (
          <p>I'm friendly component</p>
        )}

    </div>
  )
}

export default Beast;