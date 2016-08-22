const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('client'));
app.use(express.static('_build'));


const pokemonList = JSON.parse(fs.readFileSync('pokemon.json'));
const pokeMap = new Map();

pokemonList.forEach(item => {
  pokeMap.set(item.name, item);
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/pokemon/:name', (req, res) => {
  const search = req.params.name;
  res.send(pokeMap.get(search));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});