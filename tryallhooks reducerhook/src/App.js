import React, { useReducer } from 'react';

const App = () => {
  const myreducer = (state, action) => {
    if (action.type === 'ADD') {
      const newstate = [...state, action.value];
      return newstate;
    }
    else if (action.type === 'DELETE') {
      const newstate = [...state];
      newstate.splice(action.index, 1);
      return newstate;
    }
    return state;
  }
  const [mydata, dispatch] = useReducer(myreducer, [10, 20, 30, 40]);
  return (
    <div>
      <button type="button" onClick={() => dispatch({ type: "ADD", value: 50 })}>ADD</button>
      <button type="button" onClick={() => dispatch({ type: "DELETE", index: 2 })}>DELETE</button>
      {console.log(mydata)}
    </div>
  );
}
export default App;
