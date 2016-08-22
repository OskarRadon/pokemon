import React from 'react';

import TeamMember from './TeamMember';

export default class Search extends React.Component {

	render() {
		return (
			<section class="team">
				<TeamMember key="0" />
				<TeamMember key="1" />
				<TeamMember key="2" />
				<TeamMember key="3" />
				<TeamMember key="4" />
				<TeamMember key="5" />
				<button type="button" class="remove">Remove selected</button>
			</section>
		);
	}
}



