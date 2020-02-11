const myreducer = (state, action) => {

    if (action.type === 'ADD_ITEM') {
        const newstate = [...state, { text: action.item }];
        return newstate;
    }
    else if (action.type === 'DELETE_ITEM') {
        const newstate = [...state];
        newstate.splice(action.remove_index, 1)
        return newstate;
    }
    return state;
}

export default myreducer;