import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItemActionThunk } from './actions';

const App = ({ addItem }) => {
  const [item, setItem] = useState('');
  const onSubmitInput = (e) => {
    e.preventDefault();
    if (item) {
      addItem(item);
    }
    setItem('');
  }
  return (
    <div>
      <form onSubmit={(e) => onSubmitInput(e)}>
        <input type="text" name="number" value={item} onChange={(e) => setItem(e.target.value)} />
      </form>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (data) => { dispatch(addItemActionThunk(data)) }
  }
}
export default connect(null, mapDispatchToProps)(App);
