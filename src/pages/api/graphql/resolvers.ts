export const resolvers = {
  Query: {
    fetchSettings: (parent, args, {prisma, session}) => {
      console.log('auth', session)
      return prisma.user.findOne({
        where: {
          email: session.user.email
        }
      })
        .then(user => {
          console.log(user)
          return user
        })
        .catch(err => {
          console.log(err)
          return err
        })

    }
  },
  Mutation: {
    updateSettings: (parent, args, {prisma, session}) => {
      return prisma.userData.upsert({
        where: { id: session.id },
        create: {...args.input, user: {
          connect: {id: session.id}
        }},
        update: args.input
      })
    },
  }
}