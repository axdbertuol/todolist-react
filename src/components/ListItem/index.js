import React, { useContext, useState, useEffect } from 'react';
import './list-item.css';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import SimpleText from '../SimpleText';
import Button from '../Button';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Context as DataContext } from '../../contexts/DataContext';

const ListItem = ({ checked, text, id }) => {
  const [didCheck, setDidCheck] = useState(checked || false);
  const { removeTask, setTaskChecked } = useContext(DataContext);

  const onClickRemove = (e) => {
    e.preventDefault();
    removeTask(e.target.parentElement.id);
  };

  const handleCheck = (e) => {
    setDidCheck(!didCheck);
    setTaskChecked(id);
  };

  useLocalStorage();

  return (
    <li id={id} className="list-item">
      <Checkbox checked={didCheck} handleCheck={handleCheck} />
      <SimpleText text={text} checked={didCheck} />
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
};

export default ListItem;
