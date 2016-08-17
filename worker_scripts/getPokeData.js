const request = require('request');
const fs = require('fs');

const urlsJSON = JSON.parse(fs.readFileSync('pokemonURLs.json'));

const urls = urlsJSON.map(pokemon => pokemon.url);

const pokemonList = [];

function getPokeData(index) {
  if (index >= urls.length) {
    fs.writeFile('pokemon.json', JSON.stringify(pokemonList), (errFile) => {
      if (errFile) {
        console.log('\nerror writing file\n', errFile);
      }
      console.log('\nDONE!');
    });
    return;
  }

  request(urls[index], (err, response, body) => {
    if (err || response.statusCode !== 200) {
      console.log('\nError\n', err);
      return;
    }

    const pokemon = JSON.parse(body);
    console.log(pokemon.name);
    pokemonList.push(pokemon);
    getPokeData(index + 1);
  });
}

getPokeData(0);
