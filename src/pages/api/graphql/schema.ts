import { gql } from 'apollo-server-micro'

export const schema = gql`
  type Settings {
    activity: String
    age: Int
    gender: String
    weight: Int
    height: Int
    goal: String    
    bmr: Int
    tdee: Int
    kcal: Int
    prot: Int
    fats: Int
    carb: Int
  }

  type Query {
    fetchSettings: Settings
  }
  
  type Mutation {
    updateSettings(input: SettingsInput): Message
  }

  type Message {
    type: String
    text: String
  }

  input SettingsInput {
    activity: String
    age: Int
    gender: String
    weight: Int
    height: Int
    goal: String    
    bmr: Int
    tdee: Int
    kcal: Int
    prot: Int
    fats: Int
    carb: Int
  }

  scalar Void
`
