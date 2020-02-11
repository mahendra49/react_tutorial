const myreducer = (state, action) => {
    if (action.type === 'UPDATE_AGE') {
        const newstate = { ...state, age: action.newage };
        return newstate;
    }
    else if (action.type === 'UPDATE_NAME') {
        const newstate = { ...state, name: action.newname };
        return newstate;
    }
    return state;
}

export default myreducer;