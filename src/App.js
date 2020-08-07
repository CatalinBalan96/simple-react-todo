import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
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
        <NewTodoForm 
        newTodo = {this.state.newTodo}
        formSubmitted={this.formSubmitted.bind(this)} 
        newTodoChanged={this.newTodoChanged.bind(this)} />
        
        <button onClick={() => this.allDone()}>All Done</button>
      <TodoList 
        todos={this.state.todos}
        toggleTodoDone={this.toggleTodoDone.bind(this)}
        removeTodo={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default App;