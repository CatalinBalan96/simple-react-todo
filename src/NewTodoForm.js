import React from 'react';

const NewTodoForm = (props) => {
    return (
    <form onSubmit={props.formSubmitted}>
        <label htmlFor="newTodo">New Todo List</label>
        <input onChange={props.newTodoChanged} type="text" name="newTodo" id="newTodo" value={props.newTodo}/>
        <button type="submit">Add Todo</button>
    </form>
    )
}

export default NewTodoForm;