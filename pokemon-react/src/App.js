import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 class="title">Pokedex</h1>

        <h2 class="Orbitron">Welcome to Pokedex!</h2>

        <section class="search">
          <p>Search for a pokemon by name.</p>
          <form class="poke-search" method="post">
            <input type="text" name="name" value="" class="searchbar" />
            <input name="name" value="Search" type="submit" />
          </form>
          <i class="fa fa-spinner fa-pulse fa-3x fa-fw loading-spinner"></i>
        </section>

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
      </div>
    );
  }
}

export default App;
