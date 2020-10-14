import {objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('name')
    t.date('createdAt', {
      resolve() {
        return new Date()
      }
    })
  }
})