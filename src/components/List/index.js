import React from 'react';
import PropTypes from 'prop-types';
import './list.css';

const List = ({ children }) => {
  return <ul className="list">{children}</ul>;
};

List.propTypes = {
  // propTypes: PropTypes.shape({}),
};

export default List;
