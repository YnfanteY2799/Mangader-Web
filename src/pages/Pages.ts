import Main from "./Main/Main";

export type Routes = {
  route?: string;
  Component?: any;
  childs?: Array<{ route?: string; component?: any }>;
};

const Pages: Array<Routes> = [{ route: "/", Component: Main }];

export default Pages;
