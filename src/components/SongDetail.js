import React from 'react';
import { connect } from 'react-redux';

//pass props or destructure props as {song}

const SongDetail = ({song})=>{
	//console.log(song);
	if(!song){
		return <div>Select a song</div>; 
	}
	return <div>{song.title}</div>;
};

const mapStateToProps = (state)=>{
	//console.log(state);
	return {song : state.selectedsong};
};

export default connect(mapStateToProps)(SongDetail);