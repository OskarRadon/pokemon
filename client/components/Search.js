import React from 'react';


export default class Search extends React.Component {
	// handleChange(e) {
	// 	const input = e.target.value;
	// 	this.props.moodSwing(input);
	// }

	render() {
		return (
			<section class="search">
				<p>Search for a pokemon by name.</p>
				<form class="poke-search" method="post">
					<input type="text" name="name" value="" class="searchbar" />
					<input name="name" value="Search" type="submit" />
				</form>
				<i class="fa fa-spinner fa-pulse fa-3x fa-fw loading-spinner"></i>
			</section>
		);
	}
}
