import React from 'react';
import './style.css';

function IsMalicious(props) {
  return (
    <div className="beast-malicious">
      {props.malicious === true ? (
        <p >** This beast is known to be malicious to humans</p>
      ) : (
          <p>* This beast is known to be friendly to humans</p>
        )
      }
    </div >
  )
};

export default IsMalicious;