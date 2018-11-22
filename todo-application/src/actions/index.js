
import * as actions from './action_creators';

export const toDoAdded = (todo) => (dispatch) => dispatch(actions.addToDos(todo));
export const toDoUpdated = (todo) => (dispatch) => dispatch(actions.updateToDos(todo));
export const toDoRemoved = (todo) => (dispatch) => dispatch(actions.removeToDos(todo));
