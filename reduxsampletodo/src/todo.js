import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItemAction, deleteItemAction } from './actions';

const ToDoList = ({ todos, addItem, deleteItem }) => {
    return (
        <div>
            <ul>
                {todos.map((todo, index) => <ToDoItem key={index} index={index} todo={todo} removeItem={(index) => deleteItem(index)} />)}
            </ul>
            <AddToDoItem addNewItem={(item) => addItem(item)} />
        </div>
    );
}
const ToDoItem = ({ index, todo, removeItem }) => {
    return (
        <li>
            {todo.text}
            <button type="button" onClick={() => removeItem(index)}>X</button>
        </li>
    );
}
const AddToDoItem = ({ addNewItem }) => {
    const [temptodo, setTempToDo] = useState('');
    const onToDoSubmit = (e) => {
        e.preventDefault();
        if (temptodo) {
            addNewItem(temptodo);
        }
        setTempToDo('');
    }
    return (
        <div>
            <form onSubmit={(e) => onToDoSubmit(e)}>
                <input type="text" name="todo" value={temptodo} onChange={(e) => setTempToDo(e.target.value)} />
            </form>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        todos: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => { dispatch(addItemAction(item)) },
        deleteItem: (index) => { dispatch(deleteItemAction(index)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
