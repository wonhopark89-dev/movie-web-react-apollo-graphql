import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql2.now.sh/",
  // make isLiked from client
  // uri: "http://localhost:4000",
  resolvers: {
    Movie: {
      isLiked: () => false
    }
  }
});

export default client;
