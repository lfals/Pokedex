import { gql } from "@apollo/client";

const POKEMON_LIST = gql`
    query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        results {
          url
          name
          image
        }
      }
    }
`;

export default POKEMON_LIST