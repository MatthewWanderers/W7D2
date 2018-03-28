import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, createTodo } = this.props;
    return (
      <div>
        <ul>
          {todos.map((todo) => {
            return <TodoListItem todo={todo} key={todo.title.concat(todo.id)}/>;
          })}
        </ul>
        <TodoForm someCallback={createTodo}/>
      </div>
    );
  }
}

export default TodoList;
