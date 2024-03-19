export interface Menu {
  name: string;
  url: string;
}

export const MENU_DATA: Menu[] = [
  {
    name: "Главный",
    url: "/",
  },
  {
    name: "Туры",
    url: "/tour",
  },
  {
    name: "Акции",
    url: "/promotion",
  },
  {
    name: "О компании",
    url: "/about",
  },
  {
    name: "Контакты",
    url: "/contact",
  },
];
