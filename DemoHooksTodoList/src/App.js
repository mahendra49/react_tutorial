import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [todos, setToDos] = useState([
    { item: "Have to take class" },
    { item: "Go Home" },
    { item: "React articles" },
    { item: "Have luch" },
  ]);
  const addItem = (item) => {
    const newtodos = [...todos, { item: item }];
    setToDos(newtodos);
  }
  const deleteItem = (index) => {
    const newtodos = [...todos];
    newtodos.splice(index, 1);
    setToDos(newtodos);
  }
  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => <TodoList key={index} index={index} todo={todo} deleteItem={arg => deleteItem(arg)} />)}
      </ul>
      <AddToDo addAnotherItem={arg => addItem(arg)} />
    </div>
  );
}
const TodoList = ({ index, todo, deleteItem }) => {
  console.log(todo);
  return (
    <div>
      <li>
        {todo.item}
      </li>
      <button type="button" onClick={() => deleteItem(index)}>Remove</button>
    </div>
  );
}
const AddToDo = ({ addAnotherItem }) => {
  console.log(addAnotherItem);
  const [item, setItem] = useState('');
  const itemHandler = (e) => {
    e.preventDefault();
    if (item != null) {
      addAnotherItem(item);
    }
    setItem('');
  }
  return (
    <form onSubmit={(e) => itemHandler(e)}>
      <input type="text" name="item" value={item} onChange={e => setItem(e.target.value)} />
    </form>
  );
}
export default App;

