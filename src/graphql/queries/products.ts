import { gql } from "@apollo/client";

const QUERY_GET_ALL_PRODUCTS_FROM_COMPANY = gql`
  query Query($nit: String!) {
    allProductsFromCompany(NIT: $nit) {
      id
      name
      price
    }
  }
`;

export { QUERY_GET_ALL_PRODUCTS_FROM_COMPANY };
