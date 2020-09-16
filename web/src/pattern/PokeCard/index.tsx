import { Badge, Box, Image, Flex } from '@chakra-ui/core'
import React from 'react'

interface IPokemon {
  name: string
  number: string
  image: string
}
const PokeCard: React.FC<IPokemon> = ({ name, number, image }) => {
  return (
    <Flex
      minWidth="156px"
      maxWidth="156px"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      flexDirection="column"
      margin="8px"
      backgroundColor="gray.700"
    >
      <Box display="flex" alignSelf="center" paddingTop="8px">
        <Image src={image} alt={name} />
      </Box>
      <Box
        padding="3"
        alignSelf="center"
        width="100%"
        backgroundColor="gray.800"
      >
        <Box display="flex" flexDir="column" alignItems="center">
          <Box
            display="flex"
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
          >
            <Badge rounded="full" px="2" color="gray.400">
              {`Nº ${number}`}
            </Badge>
          </Box>

          <Box
            as="h4"
            display="flex"
            marginTop={2}
            lineHeight="tight"
            color="gray.500"
            letterSpacing="wide"
            textTransform="capitalize"
            fontSize={14}
          >
            {name}
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default PokeCard
