const myReducer = (state, action) => {

    if (action.type === 'CHANGE_NAME') {
        return { name: action.anothername }
    }
    return state;
}

export default myReducer;