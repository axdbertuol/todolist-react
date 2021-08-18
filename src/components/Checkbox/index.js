import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

const Checkbox = ({ checked, handleCheck }) => {
  console.log('checkbox checked', checked);
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
  checked: PropTypes.bool.isRequired,
  handleCheck: PropTypes.func.isRequired,
};
export default Checkbox;
