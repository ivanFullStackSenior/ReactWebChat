import { MESSAGE } from '../constants'

export default (state = [], action = null) => {
	const {type, payload} = action;
	
	switch (type) {
		case MESSAGE: 
			return state.concat({
				author: payload.author,
				text: payload.text,
				time: payload.time,
				color: payload.color
			})
	}
	return state
}