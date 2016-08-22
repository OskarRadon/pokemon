import React from 'react';


export default class SelectedPokemon extends React.Component {
	render() {
		return (
			<section class="search-results">
				<p class="error-message"></p>
				<img class="pokeSprite" src="" alt="" />
				<div class="stats">
					<div class="hp"><p>HP</p></div>
					<div class="attack"><p>Attack</p></div>
					<div class="defense"><p>Def</p></div>
					<div class="special-attack"><p>Special Attack</p></div>
					<div class="special-defense"><p>Special Defense</p></div>
					<div class="speed"><p>Speed</p></div>
				</div>
				<button type="button" class="add">Add to team</button>
			</section>
		);
	}
}
