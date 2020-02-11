import React from 'react';
import { connect } from 'react-redux';
import { mythunk, actionAgeDown } from './actioncreators/allactions';
const App = ({ age, increaseAge, decreaseAge }) => {
  return (
    <div>
      <button type="button" onClick={() => increaseAge()}>age up</button>
      <span>{age}</span>
      <button type="button" onClick={() => decreaseAge()}>age down</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increaseAge: () => dispatch(mythunk()),
    decreaseAge: () => dispatch(actionAgeDown())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
