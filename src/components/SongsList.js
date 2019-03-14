import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongsList extends React.Component {

	renderList(){
		//console.log(this.props);
		return this.props.songs.map((song)=>{
			return(
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className='ui button primary' onClick={()=>this.props.selectSong(song)} >
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});

	}

	render(){
		//console.log(this.props);
		return <div className="ui divided list">{this.renderList()}</div>
	}
}

const mapStatetoProps = (state) => {
	//console.log(state);

	return {songs : state.songs};
};


export default connect(mapStatetoProps , {
	selectSong : selectSong
})(SongsList);
