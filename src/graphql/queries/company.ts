import { gql } from "@apollo/client";

const QUERY_GET_ALL_COMPANIES = gql`
  query GetCompanies {
    allCompanies {
      telephone
      name
      address
      NIT
    }
  }
`;

const QUERY_GET_COMPANY_BY_ID = gql`
  query Query($nit: String!) {
    getCompany(NIT: $nit) {
      NIT
      address
      name
      telephone
    }
  }
`;

export { QUERY_GET_ALL_COMPANIES, QUERY_GET_COMPANY_BY_ID };
