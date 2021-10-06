import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { User } from 'types/User'
import UserService from 'services/UserService'

export enum UseDetailsStatus {
  LOADING,
  NOT_FOUND,
  FOUND,
}

export default function useUserDetails() {
  const params = useParams() as { id: string }
  const { id } = params
  const [user, setUser] = useState<User | undefined>(undefined)
  const [status, setStatus] = useState<UseDetailsStatus>(
    UseDetailsStatus.LOADING
  )

  useEffect(() => {
    if (id) {
      setStatus(UseDetailsStatus.LOADING)
      UserService.findById(id)
        .then(res => {
          setUser(res.data.user)
          setStatus(UseDetailsStatus.FOUND)
        })
        .catch(() => {
          setStatus(UseDetailsStatus.NOT_FOUND)
          setUser(undefined)
        })
    }
  }, [id])

  return { user, status }
}
