import { Box, Text } from '@chakra-ui/react'
import SearchBar from 'components/SearchBar'
import { useHistory } from 'react-router-dom'

export default function Header() {
  const history = useHistory()

  const goToHome = () => {
    history.push(`/users`)
  }

  return (
    <Box
      flexWrap="wrap"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px="8"
      pt="8"
    >
      <Text
        cursor="pointer"
        onClick={goToHome}
        fontSize="3xl"
        fontWeight="bold"
      >
        MySocial
      </Text>
      <SearchBar />
    </Box>
  )
}
