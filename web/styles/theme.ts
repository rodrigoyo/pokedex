import { theme } from '@chakra-ui/core'
import { merge } from '@chakra-ui/utils'

const customTheme = merge(theme, {
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac'
    }
  }
})

export default customTheme
