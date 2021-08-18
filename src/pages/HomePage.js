import React, { useState, useEffect, useContext } from 'react';
import List from '../components/List';
import Header from '../components/Header';
import Input from '../components/Input';
import ListItem from '../components/ListItem';
import Button from '../components/Button';
import { Context as DataContext } from '../contexts/DataContext';
import useLocalStorage from '../hooks/useLocalStorage';
import { getRandomInt } from '../utils';
import './homepage.css';

const HomePage = () => {
  const {
    state: { tasks },
    addTask,
    setTasksFromLocalStorage,
    removeTask,
    setTaskChecked,
  } = useContext(DataContext);

  const onClickRemove = (e) => {
    e.preventDefault();
    removeTask(e.target.parentElement.id);
  };

  const onClickInsert = (e) => {
    e.preventDefault();
    //TODO: check if id exists

    //  This function will trigger the useEffect down below
    addTask({
      id: 'task' + getRandomInt(0, 10000000),
      text: e.target[0].value,
      checked: false,
    });
  };

  // get data from localStorage on mount
  useEffect(() => {
    if (localStorage.getItem('tasks')) {
      const tasksFromLocalStorage = localStorage.getItem('tasks');
      setTasksFromLocalStorage(JSON.parse(tasksFromLocalStorage));
    }
  }, []);

  // Triggers everytime tasks is changed
  useLocalStorage();

  return (
    <div className="mainContainer">
      <Header />
      <form onSubmit={onClickInsert}>
        <div>
          <Input />
          <Button type="submit" rounded large bgColor="green" text="Inserir" />
        </div>
      </form>
      <List>
        {tasks &&
          tasks.map(({ checked, text, id }, index) => {
            const handleCheck = (e) => {
              checked = e.target.checked;
              // seta o checked no state deste objeto
              setTaskChecked(id);
            };
            return (
              <ListItem
                onClickRemove={onClickRemove}
                handleCheck={handleCheck}
                checked={checked}
                text={text}
                key={index}
                id={id}
              />
            );
          })}
      </List>
    </div>
  );
};

export default HomePage;
