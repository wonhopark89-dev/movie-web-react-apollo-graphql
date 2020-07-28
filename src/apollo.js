import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql2.now.sh/",
  // make isLiked from client
  // uri: "http://localhost:4000",
  // apollo client id format = type:id
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      patato: (_, { id }, { cache }) => {
        console.log(cache);
        console.log(id);
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: true,
          },
        });
      },
    },
  },
});

export default client;
