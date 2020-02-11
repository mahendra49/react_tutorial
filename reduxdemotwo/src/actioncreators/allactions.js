const actionAgeUp = () => {
    return {
        type: 'INC'
    }
}
const mythunk = () => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(actionAgeUp())
        }, 2000);
        console.log("I am from thunk" + JSON.stringify(getState()));
    }
}
const actionAgeDown = () => {
    return {
        type: 'DEC'
    }
}

export { actionAgeUp, actionAgeDown, mythunk };