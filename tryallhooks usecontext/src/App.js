import React, { useContext } from 'react';
import { DataContext, TestContext } from './mycontext';

const App = () => {
  
  return (
    <div>
      <DataContext.Provider value="This is new advanced context">
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
