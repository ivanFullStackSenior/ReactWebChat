import React from 'react';
import ws from '../../util/ws';

class MStxtArea extends React.Component {
	render() {
		return (
			<div className="chat-message clearfix">
				<textarea ref={this.node} onKeyPress={this.sendData} name="message-to-send" id="message-to-send" placeholder = "Type your message" rows="3"></textarea>
				<button onClick={this.sendDataVieClick}>Send</button>
			</div>
		)
	}
	node = (node) => {
		this.txtAr = node;
	}
	sendData = (ev) => {
		let input = this.txtAr.value.trim();
		if (ev.which !== 13 || !input || input == '') return;
		ws.emit(input);
		ev.target.value = '';
	}
	sendDataVieClick = (ev) => {
		let input = this.txtAr.value.trim();
		if (ev.which !== 13 || !input || input == '') return;
		ws.emit(input)
		this.txtAr.value = ''
	}
}
export default MStxtArea