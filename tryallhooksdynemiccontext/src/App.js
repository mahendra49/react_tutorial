import React, { useState, useContext } from 'react';
import { DataContext, TestContext } from './mycontext';

const App = () => {
  const [info, setInfo] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setInfo(info + 1)}>click</button>
      <DataContext.Provider value={info}>
        <Menu />
      </DataContext.Provider>
    </div>
  );
}
const Menu = () => {
  return (
    <div>
      <h1>This is menu</h1>
      <DataContext.Consumer>
        {(value) => console.log("I consumed")}
      </DataContext.Consumer>
      <SubMenu />
    </div>
  );
}
const SubMenu = () => {
  return (
    <div>
      <h1>This is submenu</h1>
      {console.log("I am sub menu")}
      <MenuItem />
    </div>
  );
}
const MenuItem = () => {
  const data = useContext(DataContext);
  return (
    <div>
      <h1>This is menu</h1>
      {data}
    </div>
  );
}
export default App;
