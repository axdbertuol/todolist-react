import React from 'react';
import PropTypes from 'prop-types';
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
      onClick={onClick || (() => {})}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  rounded: PropTypes.bool,
  large: PropTypes.bool,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
