import React, { useContext } from 'react';
import './list-item.css';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import SimpleText from '../SimpleText';
import Button from '../Button';
import { Context as DataContext } from '../../contexts/DataContext';

const ListItem = ({ checked, text, id }) => {
  const { state, removeTask } = useContext(DataContext);
  const onClickRemove = (e) => {
    e.preventDefault();
    // console.log(e);
    removeTask(e.target.parentElement.id);
  };
  return (
    <li id={id} className="list-item">
      <Checkbox checked={checked} />
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
  checked: PropTypes.bool,
  text: PropTypes.string,
  key: PropTypes.string,
};

export default ListItem;
