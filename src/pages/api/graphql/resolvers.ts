export const resolvers = {
  Query: {
    user:(parent, args, {prisma}) => {
      return prisma.user.findMany(args.id).then(user=>{
        return user[0]
      })
    },
    settingsFetch: (parent, args, {prisma, session}) => {
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
  }
}