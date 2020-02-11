import React from 'react';
import { connect } from 'react-redux';
import { getThunk } from './actions';

const App = ({ data, getData }) => {
  return (
    <div>
      <button type="button" onClick={() => getData()}>getdata</button>
      <h1>Message:: {data}</h1>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => { dispatch(getThunk()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
