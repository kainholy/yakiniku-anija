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

export type Menu = {
  id: string;
  title: string;
  menu: MenuItem[];
  menu_noeye: MenuItem[];
};

export type ApiResponse = {
  contents: Menu[];
  totalCount: number;
  offset: number;
  limit: number;
};
