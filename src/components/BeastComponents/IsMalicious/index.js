import React from 'react';

function IsMalicious(props) {
  return (
    <div>
      {props.malicious === true ? (
        <p>I'm malicious componentwwewww</p>
      ) : (
          <p>I'm dewdwedwerwe component</p>
        )}
    </div>
  )
};

export default IsMalicious;