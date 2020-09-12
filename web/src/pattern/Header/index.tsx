import { Flex } from '@chakra-ui/core'
import React from 'react'

const Header: React.FC = props => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      {...props}
    >
      POKEDEX
    </Flex>
  )
}

export default Header
