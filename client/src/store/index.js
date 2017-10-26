import { createStore/*, applyMiddleware */} from 'redux';
import reducer from '../reducers'
//import checkUser from '../middlewares/checkUser'
//import reduxThunk from 'redux-thunk';

//const middleWare = applyMiddleware(reduxThunk,checkUser);

const store = createStore(reducer,/* middleWare*/  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//store.subscribe(() => console.warn('store has been changed'))
window.store = store;

export default store