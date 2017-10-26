import React from 'react';
import ws from '../../util/ws';
import '../style/style.scss';

export default (Component) => class authHOC extends React.Component {
	auth = () => {
		if ( localStorage.getItem('auth') ) return true
		
		let name = prompt('Enter your name');
		if( !name || !name.trim().length) return false;
		
		localStorage.setItem('auth', name);
		ws.emit(name);
		
		return true;
	}
	noName = () => {
		return(
			<div className="no-name">
				You don't enter your name
				<button onClick={() => location.reload()} >Try again?</button>
			</div>
		)
	}
	render() {
		return (
			this.auth() ? <Component/> : this.noName()
		)
	}
}
//HOC - higher order component