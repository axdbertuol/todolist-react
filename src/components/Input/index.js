import React from 'react';
import './input.css';

const Input = () => {
  return (
    <input
      type="text"
      id="inputTodo"
      value=""
      placeholder="Insira uma tarefa aqui!"
      maxlength="50"
    />
  );
};

export default Input;
