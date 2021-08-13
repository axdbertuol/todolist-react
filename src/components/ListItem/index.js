import React from 'react';
import './list-item.css';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import SimpleText from '../SimpleText';
import Button from '../Button';

const ListItem = ({ checked, text, key }) => {
  return (
    <li className="list-item">
      <Checkbox checked={checked} />
      <SimpleText text={text} checked={checked} />
      <Button
        rounded
        // bgColor={'red'}
        color={'red'}
        style={{ marginRight: '1rem', marginLeft: 'auto' }}
        text={'X'}
      />
    </li>
  );
};

ListItem.propTypes = {
  checked: PropTypes.bool,
  text: PropTypes.string,
  key: PropTypes.string,
};

export default ListItem;
