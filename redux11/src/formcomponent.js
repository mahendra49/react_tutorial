import React from 'react';
import { useFormFieldHook } from './formcustomhook';

const FieldComp = ({ fieldname, minlength, maxlength, placeholder }) => {
    const [fielddata, formapi] = useFormFieldHook();
    return (
        <div>
            {console.log(minlength + "  " + maxlength)}
            <input type="text" name={fieldname} placeholder={placeholder} onChange={(e) => formapi.minLength(e.target.value, minlength) ? formapi.setFieldData({ ...fielddata, fieldError: 1, field_content: e.target.value }) : formapi.setFieldData({ ...fielddata, fieldError: 0, field_content: e.target.value })} />
            <p>{(fielddata.fieldError === 0) ? <span></span> : <span>enter valid information</span>}</p>
            {console.log(formapi)}
            {console.log(fielddata)}
        </div>
    );
}

export { FieldComp };