import { gql } from "@apollo/client";

const MUTATION_CREATE_PRODUCT = gql`
  mutation Mutation($name: String!, $price: String!, $companyId: String!) {
    createProduct(name: $name, price: $price, companyId: $companyId) {
      id
      name
      price
    }
  }
`;

const MUTATION_DELETE_PRODUCT = gql`
  mutation Mutation($deleteProductId: String!) {
    deleteProduct(id: $deleteProductId)
  }
`;

export { MUTATION_CREATE_PRODUCT, MUTATION_DELETE_PRODUCT };
