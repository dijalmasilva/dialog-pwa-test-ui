import { useHistory } from 'react-router-dom'

export default function useHistoryUsers() {
  const history = useHistory()

  return () => {
    history.push(`/users`)
  }
}
