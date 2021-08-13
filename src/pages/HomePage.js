import React from 'react';
import List from '../components/List';
import Header from '../components/Header';
import Input from '../components/Input';
import './homepage.css';

const HomePage = () => {
  return (
    <div className="mainContainer">
      <Header />
      <Input />
      <List></List>
    </div>
  );
};

export default HomePage;
