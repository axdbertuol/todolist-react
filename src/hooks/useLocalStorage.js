import { useEffect, useContext } from 'react';
import { Context as DataContext } from '../contexts/DataContext';

const useLocalStorage = () => {
  const {
    state: { tasks },
  } = useContext(DataContext);

  useEffect(() => {
    if (tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  return;
};

export default useLocalStorage;
