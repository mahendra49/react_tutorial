import React from 'react';
import { connect } from 'react-redux';
import StudentData from './studentinfo';
import TeacherData from './teacherinfo';
const App = () => {
  return (
    <div>
      <TeacherData />
      <StudentData />
    </div>
  );
}
export default connect(null, null)(App);
