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
} from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import UserItem from 'components/UserItem'
import useSearchBar from 'components/SearchBar/useSearchBar'

export default function SearchBar() {
  const {
    showSearch,
    users,
    setShowSearch,
    name,
    onChangeName,
    onKeyUpToClose,
  } = useSearchBar()

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
              onKeyDown={onKeyUpToClose}
              autoFocus
              border={0}
              focusBorderColor="none"
              value={name}
              name="search"
              onChange={e => onChangeName(e.target.value)}
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
