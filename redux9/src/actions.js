import axios from 'axios';
const getDataFromServerAction = (data) => {
    return {
        type: "LOAD_DATA",
        item: data
    }
}

const getDataFromServerThunk = () => {
    return (dispatch, getState) => {
        axios.get("/tutorial/one.php").then((response) => {
            dispatch(getDataFromServerAction(response.data));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export { getDataFromServerThunk };