import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  ReactNode,
  MouseEventHandler,
  ReactElement,
} from "react";

type useUserTypes = {
  userId: string;
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

type headerType = {
  authorization?: string;
};

type paginationDataType = {
  page?: number;
  pageSize?: number;
};

type propsBasicLayoutType = {
  children?: ReactNode;
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

type emptyListProptypes = {
  message: string;
  renderButton: boolean;
  buttonLabel: string;
  buttonActionHandler: MouseEventHandler<HTMLDivElement>;
};

type companyListProptypes = {
  data?: Object[];
  createCompanyHandler: MouseEventHandler<HTMLDivElement>;
};

type inputProptypes = {
  id: string;
  name: string;
  placeholder: string;
};

type productListProptypes = {
  createProductHandler: Function;
  exportProductPDFHandler: Function;
};

export type {
  useUserTypes,
  guardedRouteTypes,
  routeType,
  headerType,
  paginationDataType,
  propsBasicLayoutType,
  modalContextType,
  buttonProptypes,
  emptyListProptypes,
  companyListProptypes,
  useModalProptypes,
  inputProptypes,
  productListProptypes,
};
