export const resolvers = {
  Query: {
    todos:(_parent, _args, _context) => {
      return db
        .select('*')
        .from('todos'
        .orderBy('id'))
    },
    todo: (_parent, {id}, _context) => {
      return db
        .select('*')
        .from('todos')
        .where({id})
        .first()
    }
  }
}