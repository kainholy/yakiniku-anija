// types/menu.ts

export type Image = {
  url: string;
  height: number;
  width: number;
};

export type MenuItem = {
  fieldId: string;
  title: string;
  price: number;
  image?: Image;
};

export type Menulist = {
  id: string;
  title: string;
  menu: MenuItem[];
  menu_noeye: MenuItem[];
};

export type ApiResponse = {
  contents: Menulist[];
  totalCount: number;
  offset: number;
  limit: number;
};
