import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Head from '../src/infra/components/Head'
import Header from '../src/pattern/Header'

interface IPokemon {
  name: string
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  useEffect(() => {
    async function loadPokemons() {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=5'
      )

      setPokemons(response.data.results)
    }

    loadPokemons()
  }, [])

  return (
    <>
      <Head>Pokedex</Head>
      <Header />
      <main>
        {pokemons &&
          pokemons.map((pokemon, i) => {
            return <h4 key={i}>{pokemon.name}</h4>
          })}
      </main>
    </>
  )
}

export default Home
