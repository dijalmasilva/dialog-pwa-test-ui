import { SimpleUser } from 'types/SimpleUser'
import { Box, Image, VStack } from '@chakra-ui/react'
import TextInfo from 'components/TextInfo'
import { useHistory } from 'react-router-dom'

type UserCardProps = {
  simpleUser: SimpleUser
}

export default function UserCard({ simpleUser }: UserCardProps) {
  const history = useHistory()

  const seeUserDetails = () => {
    history.push(`/users/${simpleUser._id}`)
  }

  return (
    <VStack
      onClick={seeUserDetails}
      _hover={{ boxShadow: 'outline' }}
      cursor="pointer"
      boxShadow="base"
      rounded="md"
      bg="purple.900"
    >
      <Image
        src={simpleUser.picture}
        alt={simpleUser.name}
        width="100%"
        roundedTop="md"
      />
      <Box textAlign="left" width="100%" p={2}>
        <TextInfo label="name" value={simpleUser.name} />
        <TextInfo label="age" value={simpleUser.age} />
        <TextInfo label="eyeColor" value={simpleUser.eyeColor} />
        <TextInfo label="company" value={simpleUser.company} />
        <TextInfo label="email" value={simpleUser.email} />
      </Box>
    </VStack>
  )
}
