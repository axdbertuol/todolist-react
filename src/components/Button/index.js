import React from 'react';
import './button.css';

const Button = ({
  rounded,
  large,
  bgColor,
  color,
  style,
  text,
  type,
  onClick,
}) => {
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
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
