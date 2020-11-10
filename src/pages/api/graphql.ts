import { ApolloServer } from "apollo-server-micro"
import { schema } from './graphql/schema'
import { resolvers } from './graphql/resolvers'
import Cors from 'micro-cors'
import { PrismaClient } from '@prisma/client'
import { NextApiHandler } from "next"

//database connection
const prisma = new PrismaClient()
interface Context{
  prisma: PrismaClient
}
function createContext(): Context {
  return {prisma}
}

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ()=>{
    return prisma
  }
})

const handler: NextApiHandler = apolloServer.createHandler({ path: '/api/graphql' })

export const config = {
  api: {
    bodyParser: false
  }
}
//cors settings for using api from the front end
const cors = Cors({
  allowMethods: ["POST", "OPTIONS"]
})

export default cors(handler)