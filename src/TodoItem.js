import React from 'react';
import TodoList from './TodoList';

const TodoItem = (props) => {
    const {todo, index} = props;
    return (
        <li>
        <input onChange={(e) => props.toggleTodoDone(e, index)} type="checkbox" checked={todo.done}/>
        {/* <span style={{
          textDecoration: todo.done ? 'line-through': 'inherit'
          }}>{todo.title}</span> */}
          <span className={todo.done ? 'done' : ''}>{todo.title}</span>
          <button onClick={() => props.removeTodo(index)}>Remove</button>
      </li>
    )
}

export default TodoItem;
