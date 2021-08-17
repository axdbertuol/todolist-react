import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

const Checkbox = ({ checked, handleCheck }) => {
  return (
    <input
      className="checkbox"
      type="checkbox"
      checked={checked}
      onChange={handleCheck}
    />
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
};
export default Checkbox;
