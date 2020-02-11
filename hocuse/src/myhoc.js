import React, { Component } from 'react';
// const Hoccounter = (Wrapcomponent) => class extends Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         }
//         this.incCounter = this.incCounter.bind(this);
//     }
//     incCounter() {
//         this.setState(prevState => {
//             return { count: prevState.count + 1 }
//         });
//     }
//     render() {
//         return (
//             <Wrapcomponent count={this.state.count} incCounter={this.incCounter} />
//         );
//     }
// }
function Hoccounter(Wrapcomponent) {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                count: 0
            }
            this.incCounter = this.incCounter.bind(this);
        }
        incCounter() {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            });
        }
        render() {
            return (
                <Wrapcomponent count={this.state.count} incCounter={this.incCounter} />
            );
        }
    }
}

export default Hoccounter;