import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(1);
//   useEffect(() => {
//     console.log(`Count:${count}`);
//   });
//   return (
//     <div>
//       <h1>This is count:{count}</h1>
//       <button onClick={() => setCount(count + 1)}>increment</button>
//     </div>
//   );
// }

const App = () => {
  const [person, setPerson] = useState({ id: "", uname: "" });
  useEffect(() => {
    console.log({ person });
  });
  return (
    <div>
      <form>
        <input type="text" name="id" value={person.id} onChange={e => setPerson({ id: e.target.value, uname: person.uname })} placeholder="enter id" />
        <input type="text" name="uname" value={person.uname} onChange={e => setPerson({ id: person.id, uname: e.target.value })} placeholder="enter name" />
      </form>
    </div>
  );
}
export default App;

