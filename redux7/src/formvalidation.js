import React, { Component } from 'react';

const StudentFormValidation = (WrapComp) => {
    return class extends Component {
        constructor() {
            super();
            this.isFieldNull = this.isFieldNull.bind(this);
        }
        isFieldNull(val) {
            if (val === '') {
                return true;
            }
            else {
                return false;
            }
        }
        minFieldLength(val) {
            if (val.length < 6) {
                return true;
            }
            else {
                return false;
            }
        }
        phoneNumberLength(val) {
            if (val.length !== 10) {
                return true;
            }
            else {
                return false;
            }
        }
        render() {
            return (
                <WrapComp isFormFieldNull={(val) => this.isFieldNull(val)} minFormFieldLength={(val) => this.minFieldLength(val)} phoneFieldLength={(val) => this.phoneNumberLength(val)} />
            );
        }
    }
}

export default StudentFormValidation;