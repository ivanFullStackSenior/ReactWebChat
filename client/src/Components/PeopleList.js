import React, {Component} from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import PeoplesSearch from './PeoplesSearch';


class PeopleList extends Component {
	render() {
		return (
			<div className="people-list" id="people-list">
				<PeoplesSearch />
				<ul className="list">
					{this.props.peoples.map( people => {
						return (
							<UserItem key={people.userId} people={people.userName} />
						);
					})}
				</ul>
			</div>
		)
	}
}
export default connect( state => {
	return {
		peoples: state.peopleReducer
	}
})(PeopleList)