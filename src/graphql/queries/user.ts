import { gql } from "@apollo/client";

const QUERY_GET_USER_ROLE = gql`
  query Query($email: String!) {
    getUserRole(email: $email) {
      role
    }
  }
`;

export { QUERY_GET_USER_ROLE };
