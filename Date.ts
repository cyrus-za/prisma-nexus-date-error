import { scalarType } from "@nexus/schema";

const GQLDate = scalarType({
  name: "DateTime",
  description: "Date custom scalar type",
  asNexusMethod: "date",
  parseValue(value: any) {
    return value ? new Date(value) : null;
  },
  serialize(value: any) {
    return value ? new Date(value) : null;
  },
  parseLiteral(ast: any) {
    return ast.value ? new Date(ast.value) : null;
  },
});

export { GQLDate };
