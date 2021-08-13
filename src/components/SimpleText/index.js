import React from 'react';
import PropTypes from 'prop-types';
import './simple-text.css';

const SimpleText = ({ text, checked, style = {} }) => {
  return (
    <p
      className="simple-text"
      style={{ ...style, textDecoration: checked ? 'line-through' : '' }}
    >
      {text || ''}
    </p>
  );
};

SimpleText.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
};
export default SimpleText;
