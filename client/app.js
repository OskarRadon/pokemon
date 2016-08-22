import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/Search';

const app = document.getElementById('app');

ReactDOM.render(
	<main>
		<h1 class="title">Pokedex</h1>

      <h2 class="Orbitron">Welcome to Pokedex!</h2>

	  <Search />

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

      <section class="team">
        <div id="pokemon0">
          <img src="" alt="" />
        </div>

        <div id="pokemon1">
          <img src="" alt="" />
        </div>

        <div id="pokemon2">
          <img src="" alt="" />
        </div>

        <div id="pokemon3">
          <img src="" alt="" />
        </div>

        <div id="pokemon4">
          <img src="" alt="" />
        </div>

        <div id="pokemon5">
          <img src="" alt="" />
        </div>
      </section>
      <button type="button" class="remove">Remove selected</button>
	</main>,
app);

// import _ from 'lodash';
// import $ from 'jquery';

// function displayTeam(team) {
//   _.forEach($('.team').children(), (pokeDiv, index) => {
//     const src = team[index] ? team[index].sprites.front_default : '';
//     $($(pokeDiv).children()[0]).attr('src', src);
//   });
// }

// function addToTeam(team, displayed) {
//   if (team.length < 6 && displayed) {
//     team.push(displayed);
//   }
// }

// $(() => {
//   const POKEMON_API_URL = 'http://localhost:3000/pokemon/';

//   let displayed = null; // the currently displayed pokemon
//   let selected = null; // the currently selected pokemon in team
//   const team = []; // list of pokemon in team

//   function display(pokemon) {
//     console.log(pokemon);
//     displayed = pokemon;
//     // stop loading animation
//     $('.loading-spinner').hide();
//     // display sprite
//     $('.search-results .pokeSprite').attr('src', pokemon.sprites.front_default);
//     // display stats
//     pokemon.stats.forEach(stat => {
//       $(`.${stat.stat.name}`).css({ width: `${4 * stat.base_stat}px` });
//     });
//   }

//   $('.team img').click(e => {
//     $('.team img').removeClass('selected');
//     $(e.target).toggleClass('selected');
//   });

//   $('.team div').click(e => {
//     const id = e.target.closest('div').id;
//     // last char of id is the number. Corresponds with index in team array
//     const idNum = id[id.length - 1];
//     selected = idNum;
//   });

//   $('.remove').click(() => {
//     if (selected !== null) {
//       team.splice(selected, 1);
//       displayTeam(team);
//       selected = null;
//     }
//     $('.team img').removeClass('selected');
//   });

//   $('.search form').submit(e => {
//     e.preventDefault();
//     // clear error message in case it existed from a previous search
//     $('.search-results .error-message').html('');
//     // start loading animation
//     $('.loading-spinner').show();

//     const searchString = $('.poke-search input:first').val();

//     $.get(POKEMON_API_URL + searchString, display)
//       .fail(() => {
//         // stop loading animation
//         $('.loading-spinner').hide();
//         // display error message
//         $('.search-results .error-message').html('Pokemon not found.');
//       });
//   });

//   $('.add').click(() => {
//     addToTeam(team, displayed);
//     displayTeam(team);
//   });
// });
