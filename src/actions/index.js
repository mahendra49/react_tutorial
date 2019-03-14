//action creator
export const selectSong = (song)=>{

	//return a action iee.. a object
	return {
		type    : 'SONG_SELECTED',
		payload :  song
	};
};




