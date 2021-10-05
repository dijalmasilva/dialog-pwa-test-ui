import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import UserService from 'services/UserService'
import { User } from 'types/User'
import MainLayout from 'layouts/MainLayout'
import {
  Box,
  Center,
  Image,
  SimpleGrid,
  Text,
  useBoolean,
} from '@chakra-ui/react'
import TextInfo from 'components/TextInfo'
import UserCard from 'components/UserCard'

export default function UserDetails() {
  const params = useParams() as { id: string }
  const { id } = params
  const [loading, setLoading] = useBoolean(true)
  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    if (id) {
      setLoading.on()
      UserService.findById(id)
        .then(res => {
          setUser(res.data.user)
          setLoading.off()
        })
        .catch(() => {
          setLoading.off()
          setUser(undefined)
        })
    }
  }, [id])

  if (loading) {
    return (
      <Center minH="80vh">
        <Text>Loading user details...</Text>
      </Center>
    )
  }

  if (!user) {
    return (
      <Center minH="80vh">
        <Text>User not found!</Text>
      </Center>
    )
  }

  return (
    <MainLayout>
      <Box p={8}>
        <Box display="flex" gridGap={4} alignItems="center">
          <Image src={user.picture} alt={user.name} />
          <Box display="flex" flexDir="column">
            <TextInfo label="name" value={user.name} />
            <TextInfo label="age" value={user.age} />
            <TextInfo label="email" value={user.email} />
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
          {user.friends.map(user => (
            <UserCard key={user.name} simpleUser={user} />
          ))}
        </SimpleGrid>
      </Box>
    </MainLayout>
  )
}
