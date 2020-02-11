import React, { useState, useEffect } from 'react';

const FiveMax = () => {
  const [value, setValue] = useState('');
  useEffect(() => {
    if (value.length > 5) {
      throw new Error("More than five characters");
    }
  });
  return (
    <div>
      <form>
        <input type="text" name="value" value={value} onChange={e => setValue(e.target.value)} />
      </form>
    </div>

  );
}
const Shield = ({ children }) => {
  console.log(children);
  const [errorinfo, setErrorInfo] = useState({ error: false, info: null });
  const componentDidCatch = (error, info) => {
    setErrorInfo({ error, info });
  }
  useEffect(() => {
    if (errorinfo.error) {
      return (
        <div>
          <h1>More than five charcters</h1>
          <details>
            {errorinfo.info.componentStack}
          </details>
        </div>
      );
    }
  }, [errorinfo]);
  return children;
}

const App = () => {
  return (
    <div>
      <Shield>
        <FiveMax value1="hai" />
      </Shield>
      <Shield>
        <FiveMax value1="hai2" />
      </Shield>
    </div>
  );
}
export default App;

