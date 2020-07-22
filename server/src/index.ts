import { ApolloServer, gql } from "apollo-server";

type Book = {
  title: string
  author: string
};

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

const resolvers = {
  Query: {
    books: (): Book[] => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

console.clear();
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
