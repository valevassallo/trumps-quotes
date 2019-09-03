import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Quote from './components/Quote'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Donald Trump's Random Quote</h1>
        <Quote />
      </div>
    </ApolloProvider>
  );
}

export default App;
