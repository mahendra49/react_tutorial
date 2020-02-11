import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StudentRegistration = () => {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string().min(6, 'enter minimum 6 characters').required('reuired'),
            lastname: Yup.string().min(4, "enter minimum of 4 characters").required('required'),
            email: Yup.string().email('enter valid emailid').required('required')
        }),
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
        }
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input type="text" id='firstname' name='firstname' value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <p>{((formik.touched.firstname) && formik.errors.firstname) ? <span>{formik.errors.firstname}</span> : <span> </span>}</p>
                </div>
                <div>
                    <input type="text" id='lastname' name='lastname' value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <p>{((formik.touched.lastname) && formik.errors.lastname) ? <span>{formik.errors.lastname}</span> : <span> </span>}</p>
                </div>
                <div>
                    <input type="email" id='email' name='email' values={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <p>{((formik.touched.email) && formik.errors.email) ? <span>{formik.errors.email}</span> : <span> </span>}</p>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default StudentRegistration;