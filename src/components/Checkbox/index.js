import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

const Checkbox = ({ checked }) => {
  return <input className="checkbox" type="checkbox" checked={checked} />;
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
};
export default Checkbox;
