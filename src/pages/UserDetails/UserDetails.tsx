import MainLayout from 'layouts/MainLayout'
import { Box, Button, Center, Image, SimpleGrid, Text } from '@chakra-ui/react'
import TextInfo from 'components/TextInfo'
import UserCard from 'components/UserCard'
import useUserDetails, {
  UseDetailsStatus,
} from 'pages/UserDetails/useUserDetails'
import { useHistory } from 'react-router-dom'

export default function UserDetails() {
  const { user, status } = useUserDetails()
  const history = useHistory()

  if (status === UseDetailsStatus.LOADING) {
    return (
      <Center minH="80vh">
        <Text fontSize="2xl">Loading user details...</Text>
      </Center>
    )
  }

  if (status === UseDetailsStatus.NOT_FOUND) {
    return (
      <Center minH="80vh">
        <Box textAlign="center">
          <Text fontSize="2xl">User not found!</Text>
          <Button onClick={() => history.goBack()}>Go back</Button>
        </Box>
      </Center>
    )
  }

  return (
    <MainLayout>
      <Box p={8}>
        <Box display="flex" gridGap={4} alignItems="center">
          <Image src={user?.picture} alt={user?.name} />
          <Box display="flex" flexDir="column">
            <TextInfo label="name" value={user?.name} />
            <TextInfo label="age" value={user?.age} />
            <TextInfo label="email" value={user?.email} />
          </Box>
        </Box>
        <br />
        <Text fontSize="2xl">Friends:</Text>
        <br />
        <SimpleGrid
          columns={{ sm: 2, md: 2, lg: 3, xl: 5, '2xl': 6 }}
          spacing="6"
          textAlign="center"
          rounded="lg"
          color="white"
        >
          {user?.friends.map(u => (
            <UserCard key={u.name} simpleUser={u} />
          ))}
        </SimpleGrid>
      </Box>
    </MainLayout>
  )
}
