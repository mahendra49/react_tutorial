import { useState } from 'react';

const useFormFieldHook = () => {
    const [fielddata, setFieldData] = useState({
        field_content: '',
        fieldError: 0
    });
    const minLength = (val, len) => {
        if (val.length >= len) {
            return 0;
        }
        else {
            return 1;
        }

    }
    const maxLength = (val, len) => {
        if (val.length <= len) {
            return 0;
        }
        else {
            return 1;
        }
    }
    const formapi = { setFieldData, minLength, maxLength };
    return [fielddata, formapi];

}

export { useFormFieldHook };