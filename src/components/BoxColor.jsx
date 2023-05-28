import React from 'react';

function BoxColor(props) {

  return (
    <div className="Content">
      <div className="box" style={{ background: `rgb(${props.r}, ${props.g}, ${props.b})` }}>
        <p>RGB {props.r} {props.g} {props.b}</p>
      </div>
    </div>
  );
}

export default BoxColor;
