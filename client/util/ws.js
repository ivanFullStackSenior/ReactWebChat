import { connectedNewUser, userDisconnect, receiveNewNessage } from '../src/AC';
import { CONNECTED_NEW_USER, USER_DISCONNECT, MESSAGE } from '../src/constants'
import  store  from '../src/store';

export default ((wsUrl) => {
	let ws = new WebSocket(wsUrl);
	
	ws.onopen = () => {
		console.log('WS HAS Opened!')
	}
	
	//const { dispatch } = store
	ws.onmessage = (message) => {
		const messageObj = JSON.parse(message.data);
		console.log('messageObject', message)
		
		switch(messageObj.type) {
			case CONNECTED_NEW_USER:
				//call action
				let {userName, userId} = messageObj
				store.dispatch(connectedNewUser(userName, userId))
				break;
			case USER_DISCONNECT:
				store.dispatch(userDisconnect(messageObj.userId))
				break;
			case MESSAGE:
				console.log(messageObj.data)
				store.dispatch(receiveNewNessage(messageObj.data))
				break;
		}
	}
	let countReconnect = 0;
	const emit = (message) => {
		if (countReconnect > 5) return
		
		if ( ws.readyState === ws.CONNECTING ) {
			setTimeout( () => {
				emit(message);
				countReconnect++;
			}, 500);
			return
		}
		
		ws.send(message);
		countReconnect = 0;
	}
	
	return {emit};
})('ws://localhost:3000')