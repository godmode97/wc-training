import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './resources/css/index.css';
import storeFactory from './store';
import * as serviceWorker from './serviceWorker';
import { FormContainer } from './containers';

ReactDOM.render(
  <Provider store={storeFactory()}>
    <FormContainer />
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
