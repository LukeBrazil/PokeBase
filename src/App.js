import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { fetchAllPokemon } from './api'
export default function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');
  
  useEffect(() => {
    async function getAllPokemon() {
      let response = await fetchAllPokemon();
      setNextPage(response.next)
      setPreviousPage(response.previous)
      setPokemonData(response.data.results); 
    }
    getAllPokemon();
  })

  return (
    <div>
      {pokemonData.map((pokemon, i) => {
        return <ul>
          <li key={i}>{pokemon.name}</li>
        </ul>
      })}
    </div>
  )
}
