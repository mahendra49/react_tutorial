
const toDoReducer = (state, action) => {
    if (action.type === 'ADD_TODO') {
        const newstate = [...state, { text: action.text }];
        return newstate;
    }
    else if (action.type === 'DELETE_TODO') {
        const newstate = [...state];
        newstate.splice(action.delindex, 1);
        return newstate;
    }
    return state;
}
export default toDoReducer;