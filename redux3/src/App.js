import React, { useState } from 'react';
import { connect } from 'react-redux';
import { nameAction } from './storeactions/ActionCreator';

const App = ({ name, nameChanger }) => {
  const [localname, changeLocalName] = useState("");
  const changeName = (e) => {
    changeLocalName(e.target.value);
  }
  return (
    <div>
      <h1>My name is {name}</h1>
      <form>
        <input type="text" name="myname" onChange={(e) => { changeName(e) }} />
        <button type="button" onClick={() => { nameChanger(localname) }}>change</button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { name: state.name }
}
const mapDispatchToProps = (dispatch) => {
  return {
    nameChanger: (temp_name) => { dispatch(nameAction(temp_name)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
