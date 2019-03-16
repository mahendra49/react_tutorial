//action creators

import jsonPlaceholder from '../api/jsonPlaceholder';


//redux thunk will handle this
export const fetchPosts =  ()=> {
	
	return async (dispatch) => {

		const response = await jsonPlaceholder.get('/posts');

		//console.log(response.data);

		//dispatch manaually
		dispatch({
			type   :"FETCH_POSTS",
			payload: response.data
		});
	}	

};


//same as above using es2016 arrow function with explicit return 

export const fetchUser = (id) => async dispatch => {
	const response = await jsonPlaceholder.get(`/user/${id}`);
	dispatch({
		type:"FETCH_USER",
		payload:response.data
	});
};