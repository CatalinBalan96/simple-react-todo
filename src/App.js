import React from 'react';
import './App.css';


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

  newTodoChanged(e) {
    this.setState({
      newTodo: e.target.value
    });
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

  toggleTodoDone(e, index) {
    const todos = [...this.state.todos]; //copy the array (create a copy of the array)
    todos[index] = {
      ...todos[index],
      done: e.target.checked //update done property on copied todo
    }; //copy the todo also use Object.assign
    todos[index].done = e.target.checked; //update done property on copied todo
    console.log(todos);
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]; //copy the array (create a copy of the array)
    todos.splice(index,1);
    this.setState({
      todos
    });
  }
  
  allDone(){
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });
    this.setState({
      todos
    })
  } 

  render() {
    return(
      <div className="app">   
        <h4 className="title">{this.state.message}</h4>
        <form onSubmit={(e) => this.formSubmitted(e)}>
          <label htmlFor="newTodo">New Todo List</label>
          <input onChange={(e) => this.newTodoChanged(e)} type="text" name="newTodo" id="newTodo" value={this.state.newTodo}/>
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={() => this.allDone()}>All Done</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (<li key={todo.title}>
              <input onChange={(e) => this.toggleTodoDone(e, index)} type="checkbox" checked={todo.done}/>
              {/* <span style={{
                textDecoration: todo.done ? 'line-through': 'inherit'
                }}>{todo.title}</span> */}
                <span className={todo.done ? 'done' : ''}>{todo.title}</span>
                <button onClick={() => this.removeTodo(index)}>Remove</button>
            </li>)
          })}
        </ul>
      </div>
    );
  }
}

export default App;