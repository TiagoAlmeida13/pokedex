import React, { Component, useState, useEffect, useCallback } from "react";

import PokemonCard from '../components/PokemonCard';
import api  from '../services/pokemons';

import '../css/cardPokemon.css'

export default class AllPokemon extends Component{


  state = {
    pokemons: [],
    number_pokemons: 9,
    max_number_pokemons: 750
  }

   handlePokemonListDefault = async () => {

    const response = await api.get('/pokemon', {
      params: {
        limit: this.state.number_pokemons
      },
    });
    
    this.setState({
      pokemons: response.data.results
    });
  }

   

  loadMorePoke = async() => {
    const response = await api.get('/pokemon', {
      params: {
        limit: this.state.number_pokemons + 741
      },
    });
    this.setState({
      pokemons: response.data.results
    });

  }

  getColor = () => {

    for(var i = 1; i <= this.state.number_pokemons; i++){
      api.get(`/pokemon/${i}`).then(res => {

        const div = document.querySelector('.cardPokemon')
        div.setAttribute('class', res.data.types[0].type.name)
      })
    }

    

  }


  componentDidMount() {
    this.handlePokemonListDefault();
    this.getColor();
  }

  render() {
    return (      
      <div>
        <div className={'card'}>
          {
            this.state.pokemons.map((pokemon, index) => {
              return <PokemonCard key={index} {...pokemon}/>;
            })
          }
        </div>
    </div>
  
    )
    
  }
}