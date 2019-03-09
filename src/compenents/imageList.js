import React from 'react';

const ImageList = (props) => {

	const images = props.images.map((image)=>{
		return <img key={image.id} src={image.urls.regular}/>;
	});

	//console.log(images);
	return <div> your images : {images} </div>;
};

export default ImageList;