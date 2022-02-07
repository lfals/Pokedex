import { gql } from "@apollo/client";

const POKEMON = gql`
query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export default POKEMON