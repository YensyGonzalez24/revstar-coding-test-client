import { gql } from "@apollo/client";

const MUTATION_CREATE_COMPANY = gql`
  mutation Mutation(
    $nit: String!
    $name: String!
    $address: String!
    $telephone: String!
  ) {
    createCompany(
      NIT: $nit
      name: $name
      address: $address
      telephone: $telephone
    ) {
      NIT
      address
      name
      telephone
    }
  }
`;

const MUTATION_UPDATE_COMPANY = gql`
  mutation Mutation(
    $nit: String!
    $name: String!
    $address: String!
    $telephone: String!
  ) {
    updateCompany(
      NIT: $nit
      name: $name
      address: $address
      telephone: $telephone
    ) {
      NIT
      name
      address
      telephone
    }
  }
`;

const MUTATION_DELETE_COMPANY = gql`
  mutation Mutation($nit: String!) {
    deleteCompany(NIT: $nit)
  }
`;

export {
  MUTATION_CREATE_COMPANY,
  MUTATION_UPDATE_COMPANY,
  MUTATION_DELETE_COMPANY,
};
