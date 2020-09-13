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
      bg="gray.500"
      color="white"
      {...props}
    >
      Pokedex
    </Flex>
  )
}

export default Header
