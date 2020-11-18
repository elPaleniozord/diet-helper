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
      const {age, activity, bmr, gender} = args
      const upsertMany = Object.entries(args.input).map(entry => {

      })
      return prisma.userData.upsert({
        where: {id: session.id},
        create: {...args.input, user: session.id, userId: session.id},
        update: args.input,
      })
    },
  }
}