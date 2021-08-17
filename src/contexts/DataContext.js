import createDataContext from './createDataContext';
import PropTypes from 'prop-types';

/**
 * The data reducer
 *
 * @param {object} state - The state object
 * @param {object} action - The action object
 */

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'add_task':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'remove_task':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'set_tasks_from_local_storage':
      return {
        ...state,
        tasks: action.payload,
      };
    case 'set_task_checked':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            task.checked = action.payload.checked;
          }
          return task;
        }),
      };
    default:
      return state;
  }
};

const addTask = (dispatch) => (task) => {
  dispatch({ type: 'add_task', payload: task });
};

addTask.propTypes = {
  tasks: PropTypes.object.isRequired,
};
const removeTask = (dispatch) => (id) => {
  dispatch({ type: 'remove_task', payload: id });
};
removeTask.propTypes = {
  id: PropTypes.string.isRequired,
};

const setTasksFromLocalStorage = (dispatch) => (tasks) => {
  dispatch({ type: 'set_tasks_from_local_storage', payload: tasks });
};

setTasksFromLocalStorage.propTypes = {
  tasks: PropTypes.array.isRequired,
};

const setTaskChecked = (dispatch) => (id, checked) => {
  dispatch({ type: 'set_task_checked', payload: { id, checked } });
};

export const { Context, Provider } = createDataContext(
  dataReducer, // reducer
  { addTask, removeTask, setTasksFromLocalStorage, setTaskChecked }, // functions  (actions)
  { tasks: [] } // state
);
