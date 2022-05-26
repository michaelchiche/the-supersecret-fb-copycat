import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  createClient,
  defaultExchanges,
  Provider,
  subscriptionExchange,
} from 'urql';
import { createClient as createWSClient } from 'graphql-ws';
import { Comments } from './components/Comments';
import { Post } from './components/Post';
import { Posts } from './components/Posts';

const wsClient = createWSClient({
  url: 'ws://localhost:8080/v1/graphql',
});

const client = createClient({
  url: 'http://localhost:8080/v1/graphql',
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: operation => ({
        subscribe: sink => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    }),
  ],
});

export const App: FC = () => {
  return (
    <React.StrictMode>
      <Provider value={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/post" element={<Post />}>
              {/* <Route index element={} /> */}
              <Route path=":postId" element={<Comments />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};
