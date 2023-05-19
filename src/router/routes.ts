import {
  LoginPage,
  HomePage,
  CompanyPage,
  CompanyProductsPage,
  CompanyInfoPage,
  EditCompanyPage,
} from "pages";
import { routePaths } from "utils/constants";
// eslint-disable-next-line
import { routeType } from "utils/proptypes";

const routes: routeType[] = [
  {
    path: routePaths.LOGIN_PAGE,
    component: LoginPage,
    isGuarded: false,
  },
  {
    path: routePaths.HOME_PAGE,
    component: HomePage,
    isGuarded: true,
  },
  {
    path: routePaths.COMPANY_DETAIL_PAGE,
    component: CompanyPage,
    isGuarded: true,
    guardedRedirectUrl: routePaths.COMPANY_PRODUCTS_PAGE,
    children: [
      {
        path: routePaths.COMPANY_PRODUCTS_PAGE,
        component: CompanyProductsPage,
        isGuarded: true,
      },
      {
        path: routePaths.COMPANY_INFO_PAGE,
        component: CompanyInfoPage,
        isGuarded: true,
      },
      {
        path: routePaths.EDIT_COMPANY_PAGE,
        component: EditCompanyPage,
        isGuarded: true,
      },
    ],
  },
];

export default routes;
