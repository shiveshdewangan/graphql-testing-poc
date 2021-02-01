import { GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer({
  typeDefs: `
  type Query {
      name: String!
      city: String!
      country: String!
  }
  `,
  resolvers: {
    Query: {
      name() {
        return "Shivesh";
      },
      city() {
        return "Sydney";
      },
      country() {
        return "Australia";
      },
    },
  },
});

server.start(() => {
  console.log("Server is running");
});
