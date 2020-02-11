import React from 'react';
import { TextField, NumberField, EmailField, ButtonComp, RadioGroup, CheckBox } from './formcomponents';
import { FormContextProvider } from './formcontext';
import './studentregistration.css';

const StudentRegistrationForm = () => {
    return (
        <div className="form_container">
            <form>
                <FormContextProvider>
                    <TextField fieldname="firstname" placeholder="enter firstname" minlength="6" maxlength="10" errormessage="enter minimum of 6 characters and max of 10 characters" />
                    <TextField fieldname="lastname" placeholder="enter lastname" minlength="4" maxlength="10" errormessage="minimum length 4 and maximum length 10" />
                    <NumberField fieldname="phonenumber" placeholder="enter phonenumber" numberlength="10" />
                    <EmailField fieldname="email" placeholder="enter valid emailid" />
                    <RadioGroup fieldname="gender" labels="Male Female" />
                    <CheckBox fieldname="firstlang" label="Telugu" fieldvalue="telugu" />
                    <CheckBox fieldname="secondlang" label="English" fieldvalue="english" />
                    <ButtonComp shouldfill="firstname&&lastname&&phonenumber&&email" label="submit" />
                </FormContextProvider>
            </form>
        </div>
    );
}

export default StudentRegistrationForm;