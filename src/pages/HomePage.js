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
  } = useContext(DataContext);

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
      // console.log(tasksFromLocalStorage);
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
          tasks.map(({ checked, text, id }, index) => (
            <ListItem checked={checked} text={text} key={index} id={id} />
          ))}
      </List>
    </div>
  );
};

export default HomePage;
