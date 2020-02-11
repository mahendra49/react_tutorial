import React from 'react';
import { connect } from 'react-redux';
import './table.css';
const DrawTable = ({ persons }) => {
    return (
        <div>
            {
                (persons.length !== 0) ?
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Firstname</th>
                                <th>LastName</th>
                                <th>Age</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {persons.map((person, index) => <DrawRow key={index} index={index} person={person} />)}
                        </tbody>
                    </table>
                    : ""
            }
        </div>
    );
}
const DrawRow = ({ person, index }) => {
    return (
        <tr>
            <td>{person.id}</td>
            <td>{person.firstname}</td>
            <td>{person.lastname}</td>
            <td>{person.age}</td>
            <td>{person.email}</td>
        </tr>

    );
}
const mapStateToProps = (state) => {
    return {
        persons: state
    }
}

export default connect(mapStateToProps, null)(DrawTable);