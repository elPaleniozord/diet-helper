import { ApolloServer } from "apollo-server-micro"
import { schema } from './graphql/schema'
import { resolvers } from './graphql/resolvers'
import Cors from 'micro-cors'
import { PrismaClient } from '@prisma/client'
import { NextApiHandler } from "next"
import { getSession } from "next-auth/client"

//database connection
const prisma = new PrismaClient()
interface Context{
  prisma: PrismaClient
}

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async (ctx) => {
    const session = await getSession(ctx)
    //const token = req.headers && req.headers.cookie.match(/next-auth.session-token=([^;]+)/)[1] || '';
    return {
      prisma: prisma,
      session: session
    }
    //return {prisma, req}
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