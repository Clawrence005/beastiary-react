import React from 'react';

function IsMalicious(props) {
  return (
    <div beast-malicious>
      {props.malicious === true ? (
        <p>This beast is known to be malicious to humans;</p>
      ) : (
          <p>This beast is known to be friendly to humans;</p>
        )}
    </div>
  )
};

export default IsMalicious;