import * as C from '../actions/constants';

export const todos = (state=[], action={type: null}) => {
  switch(action.type){
    case C.ADDED_TODO:
      return [ ...state, action.toDo];
    case C.UPDATED_TODO:
      return state.map(todo => todo === action.old_value? action.new_value : todo );
    case C.REMOVED_TODO:
      return state.filter( todo => todo !== action.todo );
    default:
      return state;
  }
}
