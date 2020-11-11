export const resolvers = {
  Query: {
    user:(parent, args, {prisma}) => {
      return prisma.user.findMany(args.id).then(user=>{
        return user[0]
      })
    },
    settingsFetch: (parent, args, ctx) => {
      console.log('auth', ctx.req.authorization)
    }
  }
}