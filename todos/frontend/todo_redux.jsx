import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { receiveTodo, fetchTodos } from './actions/todo_actions.js';
import Root from './components/root';
import { allTodos } from './reducers/selectors.js';

document.addEventListener('DOMContentLoaded', () => {

const store = configureStore();
window.store = store;
window.getState = store.getState;
window.receiveTodo = receiveTodo;
window.allTodos = allTodos(window.getState());
window.fetchTodos = fetchTodos;

  ReactDOM.render(
      <Root store={ store }/>,
      document.getElementById('root')
    );
});



//remove me later
