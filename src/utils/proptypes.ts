import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  ReactNode,
  MouseEventHandler,
  ReactElement,
} from "react";

type userType = {
  id: string | undefined;
  email: string | undefined;
  name: string | undefined;
  role: string | undefined;
};

type userContextType = {
  user: userType;
  setUser: Dispatch<SetStateAction<userType>>;
};

type guardedRouteTypes = {
  path: string;
  isNestedRoute?: boolean;
  nestedRouteRedirectUrl?: string;
};

type routeType = {
  path: string;
  component: FunctionComponent;
  isGuarded: boolean;
  children?: routeType[];
  guardedRedirectUrl?: string;
};

type useModalProptypes = {
  modalContent?: ReactElement;
  title: string;
};

type modalContextType = {
  isOpen: boolean | null;
  content: ReactNode | null;
  title: string;
  setModalIsOpen: Dispatch<SetStateAction<boolean | null>>;
  setModalContent: Dispatch<SetStateAction<ReactNode | null>>;
  setModalTitle: Dispatch<SetStateAction<string>>;
};

type buttonProptypes = {
  children: ReactNode;
  onClickHandler: Function;
  variant?: string;
};

type inputProptypes = {
  id: string;
  name: string;
  placeholder: string;
};

type emptyListProptypes = {
  message: string;
  renderButton: boolean;
  buttonLabel: string;
  buttonActionHandler: MouseEventHandler<HTMLDivElement>;
};

type companyType = {
  NIT: string;
  name: string;
  address: string;
  telephone: string;
};

type companyListProptypes = {
  companies: companyType[];
  createCompanyHandler: MouseEventHandler<HTMLDivElement>;
};

type companyListCardProptypes = {
  company: companyType;
};

type productType = {
  id: string;
  name: string;
  price: string;
};

type productListProptypes = {
  products: any[];
  createProductHandler: Function;
  exportProductPDFHandler: Function;
};

type productListCardProptypes = {
  product: productType;
};

export type {
  userType,
  userContextType,
  guardedRouteTypes,
  routeType,
  modalContextType,
  buttonProptypes,
  emptyListProptypes,
  useModalProptypes,
  inputProptypes,
  companyType,
  companyListProptypes,
  companyListCardProptypes,
  productType,
  productListProptypes,
  productListCardProptypes,
};
