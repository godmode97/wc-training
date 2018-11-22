import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const combinedReducers = combineReducers({
  todoItems: reducers.todos
});

const clientLogger = store => next => action => {
  if (action.type) {
      const result = next(action);
      console.groupCollapsed('dispatching', action.type);
      console.log('prev state', store.getState());
      console.log('action', action);
      console.log('next state', store.getState());
      console.groupEnd();
      return result;
  } else {
      return next(action);
  }
};

const serverLogger = store => next => action => {
  console.log('\n  dispatching server action\n');
  console.log(action);
  console.log('\n');
  return next(action);
};

const middleware = server => [
  (server) ? serverLogger : clientLogger,
  thunk
];

const storeFactory = (server = false) =>
    applyMiddleware(...middleware(server))(createStore)(
      combinedReducers);

export default storeFactory;
