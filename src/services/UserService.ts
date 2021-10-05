import graphqlClient from 'utils/GraphqlClient'
import { gql } from '@apollo/client'

const findUsers = (name?: string) => {
  return graphqlClient.query({
    query: gql`
      query {
        list(name: "${name || ''}") {
          _id
          name
          picture
          age
          company
          email
          eyeColor
        }
      }
    `,
  })
}

const findById = (id: string) => {
  return graphqlClient.query({
    query: gql`
      query {
        user(id: "${id}") {
          _id
          name
          picture
          age
          company
          email
          eyeColor
          friends {
            _id
            name
            picture
            age
            company
            email
            eyeColor
          }
        }
      }
    `,
  })
}

const UserService = {
  findUsers,
  findById,
}

export default UserService
