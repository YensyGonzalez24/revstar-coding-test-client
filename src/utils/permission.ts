import { routePaths, userTypes } from "./constants";

const userPerimissionProfiles = [
  {
    type: userTypes.USER,
    defaultRedirectUrl: routePaths.HOME_PAGE,
    permittedRoutes: [
      routePaths.HOME_PAGE,
      routePaths.COMPANY_DETAIL_PAGE,
      routePaths.COMPANY_PRODUCTS_PAGE,
      routePaths.COMPANY_INFO_PAGE,
    ],
    customActions: null,
  },
  {
    type: userTypes.ADMIN_USER,
    defaultRedirectUrl: routePaths.HOME_PAGE,
    permittedRoutes: [
      routePaths.HOME_PAGE,
      routePaths.COMPANY_DETAIL_PAGE,
      routePaths.COMPANY_PRODUCTS_PAGE,
      routePaths.COMPANY_INFO_PAGE,
      routePaths.EDIT_COMPANY_PAGE,
    ],
    customActions: {
      HOME_PAGE: {
        allowCompanyCreation: true,
      },
      COMPANY_DETAIL_PAGE: {
        allowProductCreation: true,
      },
    },
  },
];

export { userPerimissionProfiles };
