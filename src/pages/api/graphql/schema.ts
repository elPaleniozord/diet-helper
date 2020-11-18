import { gql } from 'apollo-server-micro'

export const schema = gql`
  type Settings {
    activity: String
    age: Float
    gender: String
    weight: Float
    height: Float
    goal: String    
    bmr: Float
    tdee: Float
    kcal: Float
    prot: Float
    fats: Float
    carb: Float
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
    age: Float
    gender: String
    weight: Float
    height: String
    goal: String    
    bmr: Float
    tdee: Float
    kcal: Float
    prot: Float
    fats: Float
    carb: Float
  }

  scalar Void
`
