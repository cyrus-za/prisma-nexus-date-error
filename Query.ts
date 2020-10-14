import { objectType } from "@nexus/schema";

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve() {
        return [{ name: 'bob'}]
      }
    })
  }
})