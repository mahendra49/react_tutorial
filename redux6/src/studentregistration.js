import React from 'react';
import { connect } from 'react-redux';

const StudentForm = ({ studentinfo, formUpload }) => {
    return (
        <div>
            <form>
                <input type="text" name="firstname" onChange={(e) => formUpload(e.target.name, e.target.value)} placeholder="firstname" />
                <input type="text" name="lastname" onChange={(e) => formUpload(e.target.name, e.target.value)} placeholder="lastname" />
                <input type="text" name="phonenumber" onChange={(e) => formUpload(e.target.name, e.target.value)} placeholder="phonenumber" />
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        formUpload: (fieldname, fieldvalue) => { dispatch({ type: "STUDENT_REGISTRATION", field_name: fieldname, field_value: fieldvalue }) }
    }
}
export default connect(null, mapDispatchToProps)(StudentForm)