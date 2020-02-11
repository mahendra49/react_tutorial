import React, { useContext } from 'react';
import UserContext from './UserContext';

const Contact = () => {
    const userAddress = useContext(UserContext);
    console.log(userAddress.address);
    return (
        <div>
            <h1>Address:{userAddress.address}</h1>
        </div>
    );
}
export default Contact;
