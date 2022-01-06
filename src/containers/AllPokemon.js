import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import { getPokemons } from '../services/pokemons';
import '../css/cardPokemon.css'

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  return (
    <div>
      <div className={'card'}>
        {Object.entries(pokemons)[3] &&
          Object.entries(pokemons)[3][1].map((pokemon, index) => {
            return <PokemonCard key={index} {...pokemon}/>;
          })}
      </div>
    </div>
  );
};

export default AllPokemon;