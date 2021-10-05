import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import UserDetails from 'pages/UserDetails'
import Users from 'pages/Users'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'theme'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/users/:id">
            <UserDetails />
          </Route>
          <Route path="*">
            <Redirect to="/users" />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}
