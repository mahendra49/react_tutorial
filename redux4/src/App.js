import React, { useState } from 'react';
import { connect } from 'react-redux';
import delete_image from './images/delete.png';
import './App.css';
const App = ({ todos, addItem, deleteItem }) => {
  return (
    <div className="container">
      <ul className="todolist">
        {todos.map((todo, index) => <ListItem key={index} itemIndex={index} todo={todo} removeItem={(index) => deleteItem(index)} />)}
      </ul>
      <AddToDo addToDoItem={(item) => addItem(item)} />
    </div>
  );
}
const ListItem = ({ itemIndex, todo, removeItem }) => {
  return (
    <li className="todoitem">
      <img className="delete_image" src={delete_image} alt="delete" width="10" height="10" onClick={() => removeItem(itemIndex)} />
      {todo.text}
      {/* <button type="button" onClick={() => removeItem(itemIndex)}>Delete</button> */}

    </li>
  );
}
const AddToDo = ({ addToDoItem }) => {
  const [formitem, setFormItem] = useState('');
  const formSubmit = (e) => {
    if (formitem != null) {
      addToDoItem(formitem);
    }
    setFormItem('');
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={(e) => formSubmit(e)}>
        <input type="text" name="atodo" value={formitem} onChange={(e) => setFormItem(e.target.value)} placeholder="add todo" />
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
    addItem: (formdata) => { dispatch({ type: "ADD_ITEM", item: formdata }) },
    deleteItem: (index) => { dispatch({ type: "DELETE_ITEM", remove_index: index }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
