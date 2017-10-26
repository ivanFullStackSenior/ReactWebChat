import {ADD_NEW_USER , CONNECTED_NEW_USER, USER_DISCONNECT, MESSAGE } from '../constants';


export function addNewUser() {
	return {
		type: ADD_NEW_USER
	}
}
//for WebSocket (ws)
export function connectedNewUser(userName, userId = null) {
	return {
		type: CONNECTED_NEW_USER,
		payload: {
			userName,
			userId
		}
	}
}
export function userDisconnect(userId) {
	return {
		type: USER_DISCONNECT,
		userId
	}
}

export function receiveNewNessage({text, author, time, color}) {
	return {
		type: MESSAGE,
		payload: {
			author,
			text,
			time,
			color
		}
	}
}