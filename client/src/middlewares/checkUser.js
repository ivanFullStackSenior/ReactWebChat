/*import {ADD_NEW_USER, CONNECT_NEW_USER} from '../constants';
import { addUser } from '../AC';

//Пример работа миддлВара. вызывать в консоли диспатчем
export default store => next => action => {
	if (action.type === CONNECT_NEW_USER) {
		let fakeRequest = () => new Promise( resolve => {
			setTimeout( () => {
				resolve()
			}, 2000)
		});
		fakeRequest().then( () => {
			store.dispatch(addUser())
		})
	}
	return next(action);
	
}*/