import { Flex } from '@chakra-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Head from '../src/infra/components/Head'
import Header from '../src/pattern/Header'
import PokeCard from '../src/pattern/PokeCard'

interface IPokemon {
  name: string
  number: string
  image: string
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  useEffect(() => {
    async function loadPokemons() {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=50'
      )
      const pokemonsLoaded = response.data.results.map(({ name, url }) => {
        const link = new URL(url)
        const number = link.pathname.split('/')[4]
        return {
          name,
          number: number.padStart(3, '0'),
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
        }
      })

      setPokemons(pokemonsLoaded)
    }

    loadPokemons()
  }, [])

  return (
    <>
      <Head>Pokedex</Head>
      <Header />
      <Flex
        as="main"
        wrap="wrap"
        alignContent="center"
        alignItems="center"
        justifyItems="center"
        justifyContent="center"
        align="center"
        margin="1em"
      >
        {pokemons &&
          pokemons.map((pokemon, i) => {
            return (
              <PokeCard
                key={i}
                name={pokemon.name}
                number={pokemon.number}
                image={pokemon.image}
              />
            )
          })}
      </Flex>
    </>
  )
}

export default Home
