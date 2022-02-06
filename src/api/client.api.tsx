import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, {headers}) => {
    return{
        headers: {
            ...headers,
        }
    }
})

const httpLink = createHttpLink({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
})


const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  
  export default client