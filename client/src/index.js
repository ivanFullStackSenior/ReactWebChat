import React from 'react';
import {render} from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from './store';
import ws from '../util/ws';

window.ws = ws

localStorage.removeItem('auth');
render(
	<Provider key={Date.now()} store={store}>
		<App />
	</Provider>,
	document.getElementById('output'),
)



