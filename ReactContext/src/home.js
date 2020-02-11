import React, { useContext, Component } from 'react';
import UserContext from './UserContext';
class Home extends Component {
    static contextType = UserContext;
    constructor() {
        super();
        this.state = { user: '' }
    }
    componentWillMount() {
        const userData = this.context;
        this.setState({ user: userData.name });
        console.log(userData.name);
    }
    render() {
        return (
            <div>
                <h1>Welcome to {this.state.user}</h1>
            </div>
        );
    }
}
export default Home;