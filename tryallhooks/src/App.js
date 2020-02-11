import React, { useState, useEffect, useMemo, useCallback } from 'react';


const App = () => {
  const [valueone, setValueOne] = useState(0);
  const [valuetwo, setValueTwo] = useState(0);

  const summemo = useCallback((a) => { console.log("by"); return valueone + valuetwo + a; }, [valueone, valuetwo]);
  const test = () => {
    console.log(summemo(10));
  }
  return (
    <div>
      <input type="text" name="valuone" onChange={(e) => setValueOne(parseInt(e.target.value))} />
      <input type="text" name="valuetwo" onChange={(e) => setValueTwo(parseInt(e.target.value))} />
      <button type="button" onClick={() => test()}>click</button>
      <h1>{}</h1>
    </div>
  );
}

export default App;
