
import * as C from './constants';

export const addToDos = (toDo) => ({
  type: C.ADDED_TODO,
  toDo
});

export const removeToDos = (toDo) => ({
  type: C.REMOVED_TODO,
  toDo
});

export const updateToDos = ({previous, next}) => ({
  type: C.UPDATED_TODO,
  value: {
    previous, next
  }
})
