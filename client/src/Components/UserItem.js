import React from 'react';

function UserItem({people}) {
	return (
		<li className="clearfix" >
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
			<div className="about">
				<div className="name">{people}</div>
				<div className="status">
					<i className="fa fa-circle online"></i> online
				</div>
			</div>
		</li>
	);
}
export default UserItem