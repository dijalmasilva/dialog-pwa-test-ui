import { Box, Text } from '@chakra-ui/react'
import SearchBar from 'components/SearchBar'
import useHistoryUsers from 'components/Header/useHistoryUsers'

export default function Header() {
  const goToHome = useHistoryUsers()

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
