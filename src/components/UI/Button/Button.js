import React from 'react';

import './Button.css';

const Button = props => {
  console.log(props.valid)
  return (
    <button style={{backgroundColor : !props.valid ? "#f48ed2" : "#8b005d"}} type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
