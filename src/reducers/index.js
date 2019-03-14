import { combineReducers } from 'redux';

const songsReducer = ()=>{
 	return [
 		{title:"holla",duration:"4.05"},	
 		{title:"holla1",duration:"4.10"},
 		{title:"holla2",duration:"4.15"}	
 	];
};

const selectedSongReducer = (selectedsong = null , action)=>{
  	if(action.type==='SONG_SELECTED'){
  		return action.payload;
  	}

  	return selectedsong;
};

export default combineReducers({
	songs 			: songsReducer,
	selectedsong    : selectedSongReducer
});