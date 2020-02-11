import React from 'react';
import { connect } from 'react-redux';
import StudentForm from './studentregistration'
const App = ({ studentdata }) => {
  return (
    <div>
      <StudentForm />
      <div>
        <h1>Student data</h1>
        <h5>FirstName:{studentdata.firstname}</h5>
        <h5>LastName:{studentdata.lastname}</h5>
        <h5>PhoneNumber:{studentdata.phonenumber}</h5>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    studentdata: state
  }
}
export default connect(mapStateToProps, null)(App);
