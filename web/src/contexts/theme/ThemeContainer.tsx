import { ChakraProvider } from '@chakra-ui/core'
import React from 'react'

import customTheme from '../../styles/theme'

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      {children}
    </ChakraProvider>
  )
}

export default ThemeProvider
