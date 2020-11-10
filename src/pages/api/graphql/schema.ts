import { gql } from 'apollo-server-micro'

export const schema = gql`
  type Query {
    todos: [Todo]!
    todo(id: ID!): Todo
  }
  type Todo {
    id: ID!
    description: String!
    done: Boolean!
  }
`
