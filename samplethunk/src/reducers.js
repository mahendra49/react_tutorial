const reducer = (state, action) => {

    if (action.type === 'ADD_ITEM') {
        const newstate = [...state, action.value];
        return newstate;
    }
    return state;
}

export default reducer;