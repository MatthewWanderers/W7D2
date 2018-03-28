import * as APIUtils from '../util/todo_api_util';


export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';



export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const fetchTodos = () => dispatch => {
  APIUtils.fetchTodos().then(todos => dispatch(receiveTodos(todos)));
};

export const createTodo = (todo) => dispatch => {
  APIUtils.createTodo(todo).then(
    (todoResponse) => dispatch(receiveTodo(todoResponse))
  );
};
