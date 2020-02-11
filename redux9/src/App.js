import React from 'react';
import { connect } from 'react-redux';
import { getDataFromServerThunk } from './actions';

const App = ({ getInformation }) => {
  return (
    <div>
      <button onClick={() => getInformation()}>getdata</button>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getInformation: () => { dispatch(getDataFromServerThunk()) }
  }
}
export default connect(null, mapDispatchToProps)(App);
