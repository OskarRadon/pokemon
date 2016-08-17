const request = require('request');
const fs = require('fs');

const POKEMON_API_URL = 'http://pokeapi.co/api/v2/pokemon/';

let pokemon = [];

function getAllPokemon(url) {
  if (!url) {
    console.log('Finished!');
    console.log(pokemon);

    fs.writeFile('pokemon.json', JSON.stringify(pokemon), (err) => {
      if (err) {
        console.log('error writing file', err);
      }
      console.log('It\'s saved!');
    });

    return;
  }

  request(url, (err, response, body) => {
    if (err || response.statusCode !== 200) {
      console.log('Error', err, response.statusCode);
      return;
    }

    const responseBody = JSON.parse(body);
    pokemon = pokemon.concat(responseBody.results);

    console.log(responseBody.next);

    getAllPokemon(responseBody.next);
  });
}

getAllPokemon(POKEMON_API_URL);
