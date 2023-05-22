const httpMethods = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
};

const userTypes = {
  USER: "USER",
  ADMIN_USER: "ADMIN",
};

const apiEndoints = {};

const routePaths = {
  HOME_PAGE: "/",
  LOGIN_PAGE: "login",
  COMPANY_DETAIL_PAGE: "/company",
  COMPANY_PRODUCTS_PAGE: ":id",
  COMPANY_INFO_PAGE: "info/:id",
  EDIT_COMPANY_PAGE: "edit/:id",
};

const pageLabels = {
  LOGIN: {},
  HOME: {
    EMPTY_LIST_LABEL: "There are no companies to show",
    CREATE_COMPANY_LABEL: "Create Company",
  },
  COMPANY_DETAIL: {
    EMPTY_LIST_LABEL: "There are no products to show",
    CREATE_COMPANY_LABEL: "Create Product",
  },
};

const componentLabels = {
  NAVBAR: {
    LOGOUT_LABEL: "Logout",
  },
  BUTTON: {
    CONFIRMATION_VARIANT: "CONFIRMATION",
    CANCELATION_VARIANT: "CANCELATION",
  },
};

const pageData = {
  LOGIN: {},
};

export {
  httpMethods,
  apiEndoints,
  userTypes,
  routePaths,
  pageLabels,
  pageData,
  componentLabels,
};
