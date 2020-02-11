import React, { useState } from 'react';
import { connect } from 'react-redux';
import { nameAction } from './actioncreators';

const App = ({ name, age, updateName }) => {
  const [tempname, setTempName] = useState('');
  const onFormsubmit = (e) => {
    e.preventDefault();
    if (tempname) {
      updateName(tempname);
    }
    setTempName('');
  }
  return (
    <div>
      <form onSubmit={(e) => onFormsubmit(e)}>
        <input type="text" name="firstname" value={tempname} onChange={(e) => setTempName(e.target.value)} />
      </form>
      {name}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    age: state.age
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (data) => { dispatch(nameAction(data)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
