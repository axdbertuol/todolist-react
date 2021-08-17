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
  // const [tasks, setTasks] = useState([]);
  const {
    state: { tasks },
    addTask,
    setTasksFromLocalStorage,
  } = useContext(DataContext);

  const onClickInsert = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
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
      setTasksFromLocalStorage(JSON.parse(localStorage.getItem('tasks')));
    }
  }, []);

  // Triggers everytime tasks is changed
  useEffect(() => {
    if (tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('localStorage updated with', tasks);
    }
  }, [tasks]);

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
