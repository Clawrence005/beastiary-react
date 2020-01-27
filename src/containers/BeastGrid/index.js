import React, { Component } from 'react';
import "./styles.css";

function BeastGrid(props) {
  return <div className="beast-grid">
    {props.children}
  </div>
}
export default BeastGrid;
