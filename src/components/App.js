import React, { Component } from 'react';
import '../css/App.scss';
import Form from './Form';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super(props);

    this.state = {
      todos: {},
    };
  }

  addToDo = todo => {
    const todos = { ...this.state.todos };
    const timestamp = Date.now();
    todos[`todo=${timestamp}`] = todo;

    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List</h1>
        </header>
        <p className="App-intro">A small application to practice react</p>
        <Form />
        <TodoList />
      </div>
    );
  }
}

export default App;
