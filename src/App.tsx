import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { Comments } from './components/Comments';
import { Post } from './components/Post';
import { Posts } from './components/Posts';
import { UserProvider } from './contexts/user';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:8080/v1/graphql',
  }),
);
const httpLink = new HttpLink({
  uri: 'http://localhost:8080/v1/graphql',
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export const App: FC = () => {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <UserProvider>
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/post" element={<Post />}>
                <Route path=":postId" element={<Comments />} />
              </Route>
            </Routes>
          </UserProvider>
        </BrowserRouter>
      </ApolloProvider>
    </React.StrictMode>
  );
};
