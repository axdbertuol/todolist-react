import createDataContext from './createDataContext';

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
    default:
      return state;
  }
};

const addTask = (dispatch) => (task) => {
  dispatch({ type: 'add_task', payload: task });
};
const removeTask = (dispatch) => (id) => {
  dispatch({ type: 'remove_task', payload: id });
};

export const { Context, Provider } = createDataContext(
  dataReducer, // reducer
  { addTask, removeTask }, // functions
  { tasks: [] } // state
);
