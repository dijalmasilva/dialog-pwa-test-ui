import {
  Box,
  Button,
  Center,
  Divider,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Kbd,
  Text,
  useBoolean,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaSearch, IoClose } from 'react-icons/all'
import { SimpleUser } from 'types/SimpleUser'
import UserItem from 'components/UserItem'
import UserService from 'services/UserService'

export default function SearchBar() {
  const [users, setUsers] = useState<SimpleUser[]>([])
  const [showSearch, setShowSearch] = useBoolean()
  const [name, setName] = useState<string>('')

  const onKeyUp = (ev: any) => {
    if (ev.keyCode === 27) {
      setShowSearch.off()
      setUsers([])
    }
  }

  useEffect(() => {
    if (name) {
      UserService.findUsers(name).then(res => {
        setUsers(res.data.list)
      })
    } else {
      setUsers([])
    }
  }, [name])

  if (showSearch) {
    return (
      <Box
        width="100vw"
        height="100vh"
        position="fixed"
        top={0}
        left={0}
        bgColor="rgba(0, 0, 0, .9)"
      >
        <Box
          marginTop={100}
          marginX="auto"
          py={10}
          px={5}
          width="60%"
          minW={300}
          bgColor="purple.900"
          rounded="md"
          position="relative"
          maxHeight="80vh"
          overflowY="auto"
        >
          <Box position="absolute" top="1" right="1">
            <IconButton
              variant="ghost"
              size="sm"
              aria-label="close-search"
              onClick={setShowSearch.off}
            >
              <IoClose />
            </IconButton>
          </Box>
          <InputGroup size="lg">
            <InputLeftElement>
              <FaSearch />
            </InputLeftElement>
            <Input
              onKeyDown={onKeyUp}
              autoFocus
              border={0}
              focusBorderColor="none"
              value={name}
              name="search"
              onChange={e => setName(e.target.value)}
              placeholder="Search the users by name"
            />
          </InputGroup>
          {users.length > 0 && (
            <>
              <Divider />
              <Box width="100%" flexDir="column">
                <br />
                {users.map(user => (
                  <UserItem key={user.name} user={user} />
                ))}
              </Box>
            </>
          )}
        </Box>
      </Box>
    )
  }

  return (
    <Button
      accessKey="k"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      onClick={setShowSearch.on}
      width={300}
      cursor="text"
      outline="none"
    >
      <Center gridGap={4}>
        <FaSearch color="#A0AEC0" />
        <Text color="gray.400">Search</Text>
      </Center>
      <Box mb={1}>
        <Text as="span" color="gray.400">
          <Kbd>alt</Kbd> + <Kbd>k</Kbd>
        </Text>
      </Box>
    </Button>
  )
}
