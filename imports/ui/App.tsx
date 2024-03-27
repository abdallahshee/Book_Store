import React from 'react';
import {QueryClient,QueryClientProvider} from 'react-query'
import BooksComponent from './BooksComponent';
import { ChakraProvider } from '@chakra-ui/react';

const queryClient=new QueryClient()
export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
  <div>
    <h1>Welcome to Express Meteor!</h1>
    <BooksComponent/>

  </div>
  </ChakraProvider>
  </QueryClientProvider>
);
