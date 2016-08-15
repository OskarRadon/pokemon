import _ from 'lodash';
import $ from 'jquery';

function displayTeam(team) {
  _.forEach($('.team').children(), (pokeDiv, index) => {
    const src = team[index] ? team[index].sprites.front_default : '';
    $($(pokeDiv).children()[0]).attr('src', src);
  });
}

function addToTeam(team, displayed) {
  if (team.length < 6 && displayed) {
    team.push(displayed);
  }
}

$(() => {
  const POKEMON_API_URL = 'http://pokeapi.co/api/v2/pokemon/';

  let displayed = null; // the currently displayed pokemon
  let selected = null; // the currently selected pokemon in team
  const team = []; // list of pokemon in team

  function display(pokemon) {
    displayed = pokemon;
    // stop loading animation
    $('.loading-spinner').hide();
    // display sprite
    $('.search-results .pokeSprite').attr('src', pokemon.sprites.front_default);
    // display stats
    pokemon.stats.forEach(stat => {
      $(`.${stat.stat.name}`).css({ width: `${4 * stat.base_stat}px` });
    });
  }

  $('.team img').click(e => {
    $('.team img').removeClass('selected');
    $(e.target).toggleClass('selected');
  });

  $('.team div').click(e => {
    const id = e.target.closest('div').id;
    // last char of id is the number. Corresponds with index in team array
    const idNum = id[id.length - 1];
    selected = idNum;
  });

  $('.remove').click(() => {
    if (selected !== null) {
      team.splice(selected, 1);
      displayTeam(team);
      selected = null;
    }
    $('.team img').removeClass('selected');
  });

  $('.search form').submit(e => {
    e.preventDefault();
    // clear error message in case it existed from a previous search
    $('.search-results .error-message').html('');
    // start loading animation
    $('.loading-spinner').show();

    const searchString = $('.poke-search input:first').val();

    $.get(POKEMON_API_URL + searchString, display)
      .fail(() => {
        // stop loading animation
        $('.loading-spinner').hide();
        // display error message
        $('.search-results .error-message').html('Pokemon not found.');
      });
  });

  $('.add').click(() => {
    addToTeam(team, displayed);
    displayTeam(team);
  });
});
