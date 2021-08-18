import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

const Checkbox = ({ checked, handleCheck }) => {
  console.log('checkbox checked', checked);
  return (
    <input
      className="checkbox"
      type="checkbox"
      // value={checked}
      checked={checked}
      onChange={handleCheck}
    />
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
};
export default Checkbox;
