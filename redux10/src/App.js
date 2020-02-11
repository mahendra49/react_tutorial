import React from 'react';
import { connect } from 'react-redux';
import { getDataFromServerThunk } from './actions';
import DrawTable from './table';
import './App.css';

const App = ({ getInformation }) => {
  return (
    <div className="container">
      <button onClick={() => getInformation()}>getdata</button>
      <DrawTable />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getInformation: () => { dispatch(getDataFromServerThunk()) }
  }
}
export default connect(null, mapDispatchToProps)(App);
