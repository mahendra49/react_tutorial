import React, { Component } from 'react';

const UpdateHoc = (WrapComponent) =>
    class extends Component {
        constructor() {
            super();
            this.state = {
                count: 0
            }
            this.countInc = this.countInc.bind(this);
        }
        countInc() {
            this.setState((prevState) => {
                return { count: prevState.count + 1 }
            });
        }
        render() {
            return (
                <WrapComponent count={this.state.count} countInc={this.countInc} />
            );
        }
    }


export default UpdateHoc;