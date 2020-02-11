import React from 'react';
import { FieldComp } from './formcomponent';

const StudentRegistrationForm = () => {
    return (
        <div>
            <form>
                <FieldComp fieldname="firstname" minlength="6" maxlength="10" placeholder="enter firstname" />
            </form>
        </div>
    );
}

export default StudentRegistrationForm;

