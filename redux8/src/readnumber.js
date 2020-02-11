import React, { useState } from 'react';
import { connect } from 'react-redux';
import { evenNumberThunk } from './actions';

const ReadEvenNumber = ({ uploadData }) => {
    const [tempcount, setTempCount] = useState('');
    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); if (tempcount) { uploadData(tempcount); } setTempCount('') }}>
                <input type="text" name="evennumber" value={tempcount} placeholder="enter even number" onChange={(e) => setTempCount(e.target.value)} />
            </form>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        uploadData: (data) => { dispatch(evenNumberThunk(data)) }
    }
}
export default connect(null, mapDispatchToProps)(ReadEvenNumber);