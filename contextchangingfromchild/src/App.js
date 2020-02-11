import React, { useState, useContext } from 'react';
import { DataProvider } from './contextdata';

const App = () => {
  const [count, setCount] = useState(0);
  const provider_data = {
    count: count,
    changeCount: () => {
      setCount(count + 1);
    }
  }
  return (
    <div>
      <DataProvider.Provider value={provider_data}>
        <InterMediateComp />
      </DataProvider.Provider>
    </div>
  );
}
const InterMediateComp = () => {
  const data = useContext(DataProvider);
  return (
    <div>
      <h1>count from intermediate compnent:{data.count}</h1>
      <NestedComponent />
    </div>
  );
}
const NestedComponent = () => {
  const data = useContext(DataProvider);
  return (
    <div>
      <button type="button" onClick={() => data.changeCount()}>change{data.count}</button>
      {console.log(data.count)}
    </div>
  );
}
export default App;
