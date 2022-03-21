/**
 * Filename : client.ts \
 * Description : This file contains graphql client config \
 * Extentia: Copyright (c) 2022
 */

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: '<uri>',
    cache: new InMemoryCache(),
});

export default client;
