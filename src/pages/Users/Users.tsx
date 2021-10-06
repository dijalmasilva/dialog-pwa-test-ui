import { useEffect, useState } from 'react'
import UserService from 'services/UserService'
import { SimpleUser } from 'types/SimpleUser'
import MainLayout from 'layouts/MainLayout'
import UserCard from 'components/UserCard'
import { SimpleGrid } from '@chakra-ui/react'

export default function Users() {
  const [users, setUsers] = useState<SimpleUser[]>([])

  useEffect(() => {
    UserService.findUsers().then(res => {
      setUsers(res.data.list)
    })
  }, [])

  return (
    <MainLayout>
      <SimpleGrid
        columns={{ sm: 2, md: 2, lg: 3, xl: 5, '2xl': 6 }}
        spacing="6"
        p="8"
        textAlign="center"
        rounded="lg"
        color="white"
      >
        {users.map(user => (
          <UserCard key={user.name} simpleUser={user} />
        ))}
      </SimpleGrid>
    </MainLayout>
  )
}
