import React from 'react';

function MLHistory({author, text, color}) {
	//const {author, text} = this.props;
	return (
		<li className="clearfix">
			<div className="message-data align-right">
				<span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
				<span className="message-data-name" >{author}</span> <i className="fa fa-circle me"></i>

			</div>
			<div className="message other-message float-right" style={{backgroundColor: color}}>
				{text}
			</div>
		</li>
	)
}
export default MLHistory