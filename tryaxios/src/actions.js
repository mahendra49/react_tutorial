import axios from 'axios';

const getDataAction = (info) => {
    return {
        type: 'GET_DATA',
        data: info
    }
}

const getThunk = () => {
    return (dispatch, getState) => {
        axios.get('/tryaxios/some.php').then((response) => {
            dispatch(getDataAction(response.data));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export { getThunk };