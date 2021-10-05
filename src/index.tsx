import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import dotenv from 'dotenv'
import { ApolloProvider } from '@apollo/client'
import graphqlClient from 'utils/GraphqlClient'
import App from './App'
import reportWebVitals from './reportWebVitals'

dotenv.config()

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={graphqlClient}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
