import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonInfo from './PokemonInfo';
import ChooseButton from './ChooseButton';
import './styles.css';

const PokemonDetalle = () => {
  const [pokemon, setPokemon] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/25'); 
        setPokemon(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del Pokémon:', error);
      }
    };

    fetchPokemon();
  }, []); 

  const handleChoose = () => {
    setShowMessage(true);
  };

  let message;
  if (showMessage) {
    message = <p>Gracias por elegir a su Pokémon</p>;
  }

  return (
    <div className="pokemon-detalle">
      <h1>Detalles del Pokémon</h1>
      {pokemon ? (
        <>
          <PokemonInfo pokemon={pokemon} />
          <ChooseButton onChoose={handleChoose} />
          {message}
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default PokemonDetalle;
