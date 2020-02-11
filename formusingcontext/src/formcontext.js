import React, { useState } from 'react';

const FormDataContext = React.createContext({
    forminfo: {},
    updateForm: () => { }
});

const FormContextProvider = (props) => {
    let count = 0;
    const [formData, setFormData] = useState({});
    const updateForm = (fieldname, fieldvalue) => {
        count = count + 1;
        setFormData({ ...formData, [fieldname]: fieldvalue });
        console.log(count);
    }
    const providingData = {
        forminfo: formData,
        updateForm,
    }
    return (
        <FormDataContext.Provider value={providingData}>
            {props.children}
        </FormDataContext.Provider>
    );

}

export { FormDataContext, FormContextProvider }