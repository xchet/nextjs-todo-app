import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

const GRAPHQL_URL = 'https://todo-mongo-graphql-server.herokuapp.com/';
const link = createHttpLink({
  fetch,
  uri: GRAPHQL_URL
});

export default withApollo(({ initialState }) => (
  new ApolloClient({
    link,
    cache: new InMemoryCache().restore(initialState || {})
  })
));
