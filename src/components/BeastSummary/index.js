import React from 'react';
import './style.css';

function BeastSummary(props) {
  return (
    <div className="beast-summary"> <p>{props.summary}</p></div>

  )
};

export default BeastSummary;