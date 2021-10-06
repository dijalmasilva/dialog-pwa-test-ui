import { useHistory } from 'react-router-dom'

export default function useHistoryUser(id: string) {
  const history = useHistory()

  return () => {
    history.push(`/users/${id}`)
  }
}
