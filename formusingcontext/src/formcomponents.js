import React, { useContext } from 'react';
import { FormDataContext } from './formcontext';
import { useFormFieldHook } from './formcustomhook';

const TextField = ({ fieldname, placeholder, minlength, maxlength, errormessage }) => {
    const [fielddata, formapi] = useFormFieldHook();
    const formcontrol = useContext(FormDataContext);
    const doValidation = (e) => {
        if ((!(formapi.minLength(e.target.value, minlength)) && !(formapi.maxLength(e.target.value, maxlength)))) {

            formapi.setFieldData({ ...fielddata, [fieldname + 'fieldError']: 0 });
            formcontrol.updateForm(fieldname, e.target.value);

        } else {
            formapi.setFieldData({ ...fielddata, [fieldname + 'fieldError']: 1 });
            formcontrol.updateForm(fieldname, '');
        }
    }
    return (
        <div>
            <input className="form_field" type="text" name={fieldname} placeholder={placeholder} onChange={(e) => doValidation(e)} />
            <p className="error_message">{(!(fielddata[fieldname + 'fieldError'] !== 1)) ? <span>{errormessage}</span> : <span></span>}</p>
            {/* {console.log(fieldname + JSON.stringify(formcontrol.forminfo))} */}
        </div>
    );
}
const NumberField = ({ fieldname, placeholder, numberlength }) => {
    const [fielddata, formapi] = useFormFieldHook();
    const formcontrol = useContext(FormDataContext);
    const doValidation = (e) => {
        if (formapi.phoneNumberLength(e.target.value, numberlength)) {

            formapi.setFieldData({ ...fielddata, [fieldname + 'fieldError']: 1 });
            formcontrol.updateForm(fieldname, '');

        } else {
            formapi.setFieldData({ ...fielddata, [fieldname + 'fieldError']: 0 });
            formcontrol.updateForm(fieldname, e.target.value);
        }
    }
    return (
        <div>
            <input className="form_field" type="number" name={fieldname} placeholder={placeholder} onChange={(e) => doValidation(e)} />
            <p className="error_message">{(!(fielddata[fieldname + 'fieldError'] !== 1)) ? <span>enter valid phonenumber</span> : <span></span>}</p>
        </div>
    );
}
const EmailField = ({ fieldname, placeholder }) => {
    const [fielddata, formapi] = useFormFieldHook();
    const formcontrol = useContext(FormDataContext);
    const doValidation = (e) => {
        if (formapi.isEmailValid(e.target.value)) {

            formapi.setFieldData({ ...fielddata, [fieldname + 'fieldError']: 1 });
            formcontrol.updateForm(fieldname, '');

        } else {
            formapi.setFieldData({ ...fielddata, [fieldname + 'fieldError']: 0 });
            formcontrol.updateForm(fieldname, e.target.value);
        }
    }
    return (
        <div>
            <input className="form_field" type="email" name={fieldname} placeholder={placeholder} onChange={(e) => doValidation(e)} />
            <p className="error_message">{(!(fielddata[fieldname + 'fieldError'] !== 1)) ? <span>enter valid email address</span> : <span></span>}</p>
        </div>
    );
}
const RadioGroup = ({ fieldname, labels }) => {
    const formcontrol = useContext(FormDataContext);
    const items = labels.split(" ");
    return (
        <div className="radio_group">
            <span>{fieldname}:</span>{items.map((item, index) => <RadioGroupItem key={index} itemname={item} fieldname={fieldname} uploadRadioItem={(data) => formcontrol.updateForm(fieldname, data)} />)}
            {console.log(formcontrol.forminfo)}
        </div>
    );
}
const RadioGroupItem = ({ fieldname, itemname, uploadRadioItem }) => {
    return (
        <span>
            <input type="radio" name={fieldname} value={itemname} onClick={(e) => uploadRadioItem(e.target.value)} /><label >{itemname}</label>
        </span>
    );
}
const CheckBox = ({ fieldname, fieldvalue, label }) => {
    const formcontrol = useContext(FormDataContext);
    return (
        <span className="checkbox_comp">
            <input type="checkbox" onClick={(e) => (e.target.checked) ? formcontrol.updateForm(fieldname, fieldvalue) : formcontrol.updateForm(fieldname, '')} name={fieldname} value={fieldvalue} /><label>{label}</label>
            {console.log(formcontrol.forminfo)}
        </span>
    );
}

const ButtonComp = ({ shouldfill, label }) => {
    const formcontrol = useContext(FormDataContext);
    const condition_parameters = shouldfill.split('&&');
    let flag;
    const isDisabled = () => {
        flag = 0;
        for (let index = 0; index < condition_parameters.length; index++) {
            if ((formcontrol.forminfo[condition_parameters[index]] === '') || !(formcontrol.forminfo[condition_parameters[index]])) {
                flag = 1;
                break;
            }
        }
        if (flag === 1) {
            return true;
        }
        else {
            return false;
        }


    }
    return (
        <div>
            {/* {console.log(condition_parameters)} */}
            <button className="form_button" disabled={isDisabled()}>{label}</button>
        </div>
    );
}
export { TextField, NumberField, EmailField, ButtonComp, RadioGroup, CheckBox };