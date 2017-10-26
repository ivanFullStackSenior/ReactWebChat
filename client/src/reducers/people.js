import { CONNECTED_NEW_USER, USER_DISCONNECT } from '../constants';
//import faker from 'faker';


export default (state = [], action) => {
	const {type, payload} = action;
	
	switch (type) {
		case CONNECTED_NEW_USER:
			//const id = faker.random.uuid();
			return state.concat({
				userName: payload.userName,
				userId: payload.userId
			});
		case USER_DISCONNECT:
			return state.filter( u => {
				return u.userId !== action.userId
			});
		default:
			return state
	}
}