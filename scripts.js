$(function() {

  // represents the currently selected pokemon
  var selected = null;
  var team = [];

  $('form').submit(function(e) {
    e.preventDefault();

    var result = $('input:first').val();
    console.log()

    $.get('http://pokeapi.co/api/v2/pokemon/' + result, (pokemon) => {
      selected = pokemon;
      $('.results img').attr('src', pokemon.sprites.front_default);
      // console.log(pokemon.stats);
      statFiller(pokemon.stats);
    });
  });

  $('.add').click((e) => {
    addToTeam(team, selected);
    displayTeam(team);
  });

});

function statFiller(stats) {
  stats.forEach((stat) => {
    $('.' + stat.stat.name).css({ 'width' : 3 * stat.base_stat + 'px'})
  });
}

function displayTeam(team) {
  console.log(team);
  _.forEach($('.team').children(), (pokeDiv, index) => {
    console.log(pokeDiv);
    if (team[index]) {
      $($(pokeDiv).children()[0]).attr('src', team[index].sprites.front_default);
    }
  });
}

function addToTeam(team, selected) {
  if (team.length < 6) {
    team.push(selected);
  }
}
