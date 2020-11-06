import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'

import { NextApiHandler } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
console.log('xxx')
const options = {
  providers: [
    Providers.Facebook({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Google({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Email({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        }
      },
      from: process.env.SMTP_FROM
    })
  ],
  adaper: Adapters.Prisma.Adapter({
    prisma
  }),
  secret: process.env.SECRET
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)

export default authHandler