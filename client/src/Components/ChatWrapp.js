import React, { Component } from 'react';
import PeopleList from './PeopleList';
import MessagesContainer from './MessagesContainer';
import authHOC from '../decorators/authHOC';

class ChatWrapp extends Component {
	render() {
		return (
			<div>
				<PeopleList />
				<MessagesContainer />
			</div>
		)
	}
}

export default authHOC(ChatWrapp)