import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  fonts: {
    body: 'Roboto, sans-serif',
  },
})

export default theme
