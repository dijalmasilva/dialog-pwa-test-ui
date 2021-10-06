import { useEffect, useState } from 'react'
import { SimpleUser } from 'types/SimpleUser'
import { useBoolean } from '@chakra-ui/react'
import UserService from 'services/UserService'

export default function useSearchBar() {
  const [users, setUsers] = useState<SimpleUser[]>([])
  const [showSearch, setShowSearch] = useBoolean()
  const [name, setName] = useState<string>('')

  const onKeyUpToClose = (ev: any) => {
    if (ev.keyCode === 27) {
      setShowSearch.off()
      setUsers([])
    }
  }

  const onChangeName = (newName: string) => {
    setName(newName)
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

  return {
    users,
    showSearch,
    onChangeName,
    onKeyUpToClose,
    setShowSearch,
    name,
  }
}
