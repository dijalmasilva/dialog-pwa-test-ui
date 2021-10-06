import { Box, Image, Text } from '@chakra-ui/react'
import { SimpleUser } from 'types/SimpleUser'
import { GrReturn } from 'react-icons/gr'
import useHistoryUser from 'hooks/useHistoryUser'

type UserItemProps = {
  user: SimpleUser
}

export default function UserItem({ user }: UserItemProps) {
  const seeUserDetails = useHistoryUser(user._id)

  return (
    <Box
      onClick={seeUserDetails}
      cursor="pointer"
      width="100%"
      py={4}
      px={2}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      rounded="md"
      mb={4}
      bgColor="purple.700"
    >
      <Box gridGap={4} display="flex" flex="row" alignItems="center">
        <Image
          src={user.picture}
          alt={user.name}
          height="80px"
          roundedLeft="md"
        />
        <Box>
          <Text> {user.name} </Text>
          <Text> {user.email} </Text>
        </Box>
      </Box>
      <Box>
        <GrReturn size="2em" color="#A0AEC0" />
      </Box>
    </Box>
  )
}
