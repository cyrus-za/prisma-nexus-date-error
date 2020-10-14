import { makeSchema } from "@nexus/schema";
import { User } from "./User";
import { Query } from "./Query";
import { GQLDate } from "./Date";
import { nexusPrisma } from "nexus-plugin-prisma";

export const schema = makeSchema({
  types: [
    GQLDate,
    Query,
    User,
  ],
   typegenAutoConfig: {
    sources: [
      {
        source: require.resolve('.prisma/client/index.d.ts'),
        alias: 'prisma',
      },
    ]
  },
   plugins: [
    nexusPrisma({
      scalars: {
      // DateTime,
      // Json,
      },
    }),
  ],

});
