import React from 'react';
import { connect } from 'react-redux';

const StudentData = ({ studentinfo }) => {
    return (
        <div>
            <h1>Student Information</h1>
            <h5>studentId:{studentinfo.id}</h5>
            <h5>studentName:{studentinfo.name}</h5>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        studentinfo: state.student
    }
}
export default connect(mapStateToProps, null)(StudentData);