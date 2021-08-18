import React from 'react';
import './list-item.css';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import SimpleText from '../SimpleText';
import Button from '../Button';

const ListItem = ({ checked, text, id, handleCheck, onClickRemove }) => {
  return (
    <li id={id} className="list-item">
      <Checkbox checked={checked} handleCheck={handleCheck} />
      <SimpleText text={text} checked={checked} />
      <Button
        rounded
        color={'red'}
        style={{ marginRight: '1rem', marginLeft: 'auto' }}
        text={'X'}
        onClick={onClickRemove}
      />
    </li>
  );
};

ListItem.propTypes = {
  checked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleCheck: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

export default ListItem;
