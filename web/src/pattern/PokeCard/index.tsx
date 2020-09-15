import { Badge, Box, Image, Flex } from '@chakra-ui/core'
import React from 'react'

interface IPokemon {
  name: string
  image: string
}
const PokeCard: React.FC<IPokemon> = ({ name, image }) => {
  return (
    <Flex
      minW="156px"
      maxW="156px"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      flexDirection="column"
    >
      <Box alignSelf="center">
        <Image src={image} alt={name} />
      </Box>
      <Box p="3">
        <Box d="flex" alignItems="baseline" justifyContent="center">
          <Box
            d="flex"
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {name}
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default PokeCard
