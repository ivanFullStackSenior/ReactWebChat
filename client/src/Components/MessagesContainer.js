import React, {Component} from 'react';
import MListHeader from './MListHeader';
import MLHistory from './MLHistory';
import MStxtArea from './MStxtArea';

import { connect } from 'react-redux';

class MessagesContainer extends Component {
	constructor() {
		super();
		this.chatWrapp = null;
		this.ul = null
	}
	componentDidUpdate() {
		this.chatWrapp.scrollTop = this.ul.scrollHeight
	}
	
	render() {
		return (
			<div className="chat">
				<MListHeader />
				
				<div className="chat-history" ref={ (chatWrapp) => this.chatWrapp = chatWrapp}>
					<ul ref={ ul => this.ul = ul }>
						{this.props.messages.map( msg => {
							return <MLHistory key={msg.time} {...msg} />
						})}
					</ul>
				</div>
				
				<MStxtArea />
			</div> 
		)
	}
}
export default connect( state => {
	return {
		messages: state.messagesReducer
	}
})(MessagesContainer)