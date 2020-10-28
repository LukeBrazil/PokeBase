import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './api/index';
import Card from './components/Card/Card';
import UiCard from './components/Card/UiCard';
import MediaCard from './components/Card/MediaCard';
import './App.css';

// Material Ui
import Button from '@material-ui/core/Button';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [loading, setLoading] = useState(true);
  const mainUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(mainUrl);
      setNextPage(response.next)
      setPrevPage(response.previous);
      await loadingPokemon(response.results)
      setLoading(false)
    }
    fetchData()
  }, [])

  const fetchNext = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextPage);
    await loadingPokemon(data.results)
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  }
  const fetchPrevious = async () => {
    if (!prevPage) return;
    setLoading(true);
    let data = await getAllPokemon(prevPage);
    await loadingPokemon(data.results)
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  }

  const goHome = async () => {
    setLoading(true);
    let data = await getAllPokemon(mainUrl);
    await loadingPokemon(data.results)
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async (data) => {
    let singlePokemon = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord
    }))

    setPokemonData(singlePokemon)
    console.log(pokemonData)
  }

  return (
    <div>
    { loading ? <h1>Loading...</h1> : (
      <>
      <div><Button variant='contained' color='primary' onClick={fetchPrevious}>Previous</Button></div>
      <div><Button variant='contained' color='secondary' onClick={fetchNext}>Next</Button></div>
      <div><Button variant='contained' color='default' onClick={goHome}>Home</Button></div>
      <div className='grid-container'>
      {pokemonData.map((pokemon, i) => {
        return <MediaCard key={i} pokemon={pokemon} />
      })}
      </div>

      </>
      )}
      
      </div>
  );
}

export default App;
