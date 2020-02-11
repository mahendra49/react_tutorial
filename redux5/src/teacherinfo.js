import React from 'react';
import { connect } from 'react-redux';

const TeacherData = ({ teacherinfo }) => {
    return (
        <div>
            <h1>Teacher Information</h1>
            <h5>TeacherId:{teacherinfo.id}</h5>
            <h5>TeacherName:{teacherinfo.name}</h5>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        teacherinfo: state.teacher
    }
}
export default connect(mapStateToProps, null)(TeacherData);