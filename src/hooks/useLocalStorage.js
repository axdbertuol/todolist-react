import { useEffect, useState, useContext } from 'react';
import { Context as DataContext } from '../contexts/DataContext';

const useLocalStorage = () => {
  const {
    state: { tasks },
  } = useContext(DataContext);

  useEffect(() => {
    if (tasks) {
      console.log('tasks', tasks);

      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  return;
};

export default useLocalStorage;
