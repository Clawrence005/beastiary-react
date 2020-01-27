import React from 'react';
import "./style.css";

function BeastGrid(props) {
  return <div className="beast-grid">
    {props.children}
  </div>
}
export default BeastGrid;
