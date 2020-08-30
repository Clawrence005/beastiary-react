import React from 'react'
import BeastSummary from '../BeastSummary';
import BeastHeader from '../BeastHeader';
import IsMalicious from '../IsMalicious';
import "./style.css"

function Beast(props) {
  const malicious = props.malicious;

  return (
    <div className="beast-content-div">
      <BeastHeader key={props.id}
        name={props.name} />

      <img
        className="beast-image"
        key={props.id}
        src={props.image}
        alt={"image-" + props.name}
        width="55px"
        height="55px"
      />

      {/* <p>{props.summary}</p> */}
      <BeastSummary key={props.id}
        summary={props.summary} />
      {/* {malicious ? (
        <p>I'm malicious component</p>
      ) : (
          <p>I'm friendly component</p>
        )} */}
      <IsMalicious key={props.id}
        malicious={malicious}
      />
    </div>
  )
}

export default Beast;