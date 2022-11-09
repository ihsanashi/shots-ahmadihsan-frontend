import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://2ciw864r.apicdn.sanity.io/v1/graphql/production/default',
  cache: new InMemoryCache(),
});

export { HOME_DATA } from './home';
export { ASSET_DATA } from './asset';
