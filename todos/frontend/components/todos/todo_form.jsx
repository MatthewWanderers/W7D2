import React from 'react';
import { uniqueId } from '../../util.js';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, body } = this.state;
    const todoItem = {
      title,
      body,
      done: false
    };
    this.props.someCallback(todoItem);
    this.setState({ title: '', body: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Title
          <input
            type="text"
            value={this.state.title}
            onChange={event => this.setState({title: event.target.value})} />
        </label>

        <label> Body
          <input
            type="text"
            value={this.state.body}
            onChange={event => this.setState({body: event.target.value})} />
        </label>
        <button type='submit'>Add To-Do</button>
      </form>
    );
  }
}




export default TodoForm;
