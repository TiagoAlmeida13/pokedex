import React from 'react';
import '../css/cardPokemon.css'

const PokemonCard = (props) => {
  return (
    <div className={"cardPokemon"}>
        <h3 className={'nomePokemon'}>{props.name}</h3>
        <img className={'imagemPokemon' }
            src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${props.name}.gif`}
            alt={`Imagem do ${props.name}`} 
        />
    </div>    
  );
};

export default PokemonCard;