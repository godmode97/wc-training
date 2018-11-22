import React, { Component } from 'react';
import ToDoListItems from './layouts/todo_list_items';
import '../resources/css/styles.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: '',
      defaultValue: ''
    }

    this.onHandleTextChange = this.onHandleTextChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleTextChange(event){
    this.setState({ value: event.target.value })
  }

  onHandleSubmit(event){
    event.preventDefault();
    this.props.toDoAdded(this.state.value);
    this.setState({ value: "" })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={ this.onHandleSubmit }>
          <input type="text"
                 placeholder="Add To Do..."
                 onChange={ this.onHandleTextChange }
                 value={this.state.value}
          />
        </form>
        <ToDoListItems datasource={this.props.state.todoItems} />
      </div>
    );
  }
}

export default App;
