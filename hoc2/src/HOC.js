import React, { Component } from 'react';

// export default function Hoc(WrapComponent, data) {
//     return class extends Component {
//         constructor() {
//             super();
//             this.state = {
//                 data: data
//             }
//         }
//         render() {
//             return (
//                 { this.state.data.map((obj, i) => <WrapComponent person={obj.id} {...this.props} />) }
//             );
//         }
//     }


// }
const Hoc = (WrapComponent, data) => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }
    render() {
        return (
            <WrapComponent persons={this.state.data} {...this.props} />
        );
    }
}
export default Hoc;