import React from 'react';
import { UserProvider } from './UserContext';
import Home from './home';
import Contact from './contact';
const App = () => {
  const user = { name: "Ram", address: "ram@gmail.com" };
  return (
    <UserProvider value={user}>
      <Home />
      <Contact />
    </UserProvider>
  );
}
export default App;

