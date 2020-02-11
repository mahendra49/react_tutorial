const addItemAction = (data) => {
    return { type: "ADD_ITEM", value: data }
}
const addItemActionThunk = (data) => {
    return (dispatch, getState) => {
        if (data % 2 === 0) {
            dispatch(addItemAction(data));
        }
        return;
    }
}
export { addItemActionThunk };