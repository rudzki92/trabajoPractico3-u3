import React from 'react';

const PokemonInfo = ({ pokemon }) => {
  if (!pokemon) {
    return <p>Cargando información del Pokémon...</p>;
  }

  return (
    <div className="pokemon-info">
      <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {pokemon.height*10} cm</p>
      <p>Peso: {pokemon.weight/10} kg</p>
      <p>Tipos: {pokemon.types.map(type => type.type.name).join(', ')}</p>
    </div>
  );
};

export default PokemonInfo;
