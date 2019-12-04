import React from 'react';
import {HttpLink,ApolloClient, InMemoryCache} from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const Client = new ApolloClient({
  link: new HttpLink({
    uri: '/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
});
