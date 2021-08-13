import React, { useState, useEffect } from 'react';
import List from '../components/List';
import Header from '../components/Header';
import Input from '../components/Input';
import ListItem from '../components/ListItem';
import Button from '../components/Button';
import './homepage.css';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  const onClickInsert = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setTasks([...tasks, { text: e.target[0].value, checked: false }]);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks);
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
        {tasks.map(({ checked, text }, index) => (
          <ListItem checked={checked} text={text} key={index} />
        ))}
      </List>
    </div>
  );
};

export default HomePage;
