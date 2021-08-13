import React from 'react';
import './button.css';

const Button = ({ rounded, large, bgColor, color, style, text, type }) => {
  let className = rounded && 'btn-rnd';
  className += large && ' btn-lg';

  return (
    <button
      className={'btn ' + className}
      style={{
        ...(style || {}),
        backgroundColor: bgColor || 'white',
        color: color || 'black',
      }}
      type={type || 'button'}
    >
      {text}
    </button>
  );
};

export default Button;
