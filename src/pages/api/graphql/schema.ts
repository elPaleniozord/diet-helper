import { gql } from 'apollo-server-micro'

export const schema = gql`
  type Query {
    todos: [Todo]!
    todo(id: ID!): Todo
    user(id: ID!): User
    settingsFetch: Settings
  }
  type Todo {
    id: ID!
    description: String!
    done: Boolean!
  }
  type User {
    name: String
  }
  type Settings {
    id: Int
    name: String
    userId: String
    height: Int
    weight: Int
    age: Int
    gender: String
    goal: Int
    kcal: Int
    prot: Int
    carb: Int
    fats: Int
  }

`
