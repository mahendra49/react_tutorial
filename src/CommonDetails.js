import React from 'react';


//props.children is used if we pass a component and dont name it

const commonDetails = (props)=>{
	return (
		<div className="ui comments">
		  <div className="comment">
		   <h1>{props.author}</h1>
		    <a className="avatar">
		      <img src="/images/avatar/small/elliot.jpg"/>
		    </a>
		    <div className="content">
		      <a className="author">Elliot Fu</a>
		    </div>
		  </div>
		</div>
	);

}

export default commonDetails;



