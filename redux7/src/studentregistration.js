import React, { useState } from 'react';
import StudentFormValidation from './formvalidation';
import { connect } from 'react-redux';
import './studentformstyle.css';

const StudentRegistrationForm = ({ isFormFieldNull, minFormFieldLength, phoneFieldLength, loadDataToStore }) => {
    const [formdata, setFormData] = useState({
        firstname: "",
        firstnamemessage: '',
        lastname: "",
        lastnamemessage: '',
        phonenumber: "",
        phonenumbermessage: ''
    });
    return (

        <div className="student_reg_form">
            <form onSubmit={(e) => { e.preventDefault(); loadDataToStore(formdata); }}>
                <input
                    type="text"
                    name="fname"
                    onChange={(e) => { (minFormFieldLength(e.target.value)) ? setFormData({ ...formdata, firstname: e.target.value, firstnamemessage: false }) : setFormData({ ...formdata, firstname: e.target.value, firstnamemessage: true }) }}
                    placeholder="Enter FirstName" />
                <p className="error_message">{(formdata.firstnamemessage === false) ? <span>first name should be minmun of 6 characters</span> : <span> </span>}</p>

                <input type="text"
                    name="lname"
                    onChange={(e) => { (minFormFieldLength(e.target.value)) ? setFormData({ ...formdata, lastname: e.target.value, lastnamemessage: false }) : setFormData({ ...formdata, lastname: e.target.value, lastnamemessage: true }) }}
                    placeholder="Enter LastName" />
                <p className="error_message">{(formdata.lastnamemessage === false) ? <span>last name should be minmun of 6 characters</span> : <span> </span>}</p>

                <input type="text"
                    name="phonenumber"
                    onChange={(e) => { (phoneFieldLength(e.target.value)) ? setFormData({ ...formdata, phonenumber: e.target.value, phonenumbermessage: false }) : setFormData({ ...formdata, phonenumber: e.target.value, phonenumbermessage: true }) }}
                    placeholder="Enter phone number" />
                <p className="error_message">{(formdata.phonenumbermessage === false) ? <span>phone number should contain 10 digits</span> : <span>     </span>}</p>
                <button disabled={(formdata.firstnamemessage && formdata.lastnamemessage && formdata.phonenumbermessage) ? false : true}>submit</button>
            </form>
            {console.log(formdata)}
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadDataToStore: (data) => { dispatch({ type: "FORM_UPLOAD", data: { firstname: data.firstname, lastname: data.lastname, phonenumber: data.phonenumber } }) }
    }
}
const StudentForm = connect(null, mapDispatchToProps)(StudentRegistrationForm);
export default StudentFormValidation(StudentForm);