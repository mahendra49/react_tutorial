import React, { useState } from 'react';

const App = () => {
  const [todos, setToDos] = useState([
    { item: "I have to take class" },
    { item: " Go Home" },
    { item: "Have some tea" },
    { item: "Watch movie" },
    { item: "get sleep" }
  ]);
  const addItem = (item) => {
    const newtodos = [...todos, { item }];
    setToDos(newtodos);
  }
  const deleteItem = (index) => {
    const newtodos = [...todos];
    newtodos.splice(index, 1);
    setToDos(newtodos);
  }
  return (
    <div>
      <ul>
        {todos.map((todo, index) => <ToDoList key={index} index={index} todo={todo} deleteItem={arg => deleteItem(arg)} />)}
      </ul>
      <AppendToDo addItem={arg => addItem(arg)} />
    </div>
  );
}
const ToDoList = ({ index, todo, deleteItem }) => {
  return (
    <li>
      {index} ) {todo.item}  <button type="button" onClick={() => deleteItem(index)}>remove</button>

    </li>
  );
}
const AppendToDo = ({ addItem }) => {
  const [item, setItem] = useState('');
  const itemHandler = (e) => {
    e.preventDefault();
    if (item != null) {
      addItem(item);
    }
    setItem('');
  }
  return (
    <form onSubmit={e => itemHandler(e)}>
      <input type="text" name="item" value={item} onChange={(e) => setItem(e.target.value)} />
    </form>
  );
}
export default App;

