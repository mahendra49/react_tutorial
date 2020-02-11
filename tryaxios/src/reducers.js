const reducer = (state, action) => {
    if (action.type === 'GET_DATA') {
        return action.data;
    }
    return state;
}

export default reducer;