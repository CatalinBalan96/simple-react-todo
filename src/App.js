import React from 'react';
import './App.css';
import {Component} from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello, my name is Catalin',
      newTodo: '',
      todos: [{
        title: 'Learn React',
        done: false
      }, {
        title: 'Learn JSX',
        done: false
      }]
    };
  }

  formSubmitted(e) {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({
      title: this.state.newTodo,
      done: false
    })
    this.setState({
      newTodo: '',
      todos
    });
  }

  newTodoChanged(e) {
    this.setState({
      newTodo: e.target.value
    });
  }

  render() {
    return(
      <div className="app">   
        <h4 className="title">{this.state.message}</h4>
        <form onSubmit={(e) => this.formSubmitted(e)}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={(e) => this.newTodoChanged(e)} type="text" name="newTodo" id="newTodo" value={this.state.newTodo}/>
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {this.state.todos.map(todo => {
            return <li key={todo.title}>{todo.title}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;