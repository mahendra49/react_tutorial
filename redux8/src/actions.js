
const evenNumberAction = (data) => {
    return {
        type: 'EVEN_NUMBER',
        item: data
    }
}

const evenNumberThunk = (data) => {
    return (dispatch, getState) => {
        if (data % 2 === 0) {
            dispatch(evenNumberAction(data))
        }
        else {
            return;
        }
    }
}

export { evenNumberThunk };