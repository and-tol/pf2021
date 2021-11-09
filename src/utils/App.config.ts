import { appLanguages } from "./Locale.config";

export const AppConfig = {
  site_name: "Portfolio",
  title: "Andrey Tolstoy",
  description: "Projects an CV",
  locale: appLanguages.eng.lang,
  keywords: "",
};

export enum IndexSectionsId {
  About = "about",
  Projects = "projects",
  Contact = "contact",
}
export interface Section {
  id: string;
  sectionName: string;
  path: string;
}

export const sections: Section[] = [
  {
    id: IndexSectionsId.About,
    sectionName: "About",
    path: `/#${IndexSectionsId.About}`,
  },
  {
    id: IndexSectionsId.Projects,
    sectionName: "Projects",
    path: `/#${IndexSectionsId.Projects}`,
  },
  {
    id: IndexSectionsId.Contact,
    sectionName: "Contact",
    path: `/#${IndexSectionsId.Contact}`,
  },
];
export enum IndexPagesId {
  About = "about",
  Projects = "projects",
  Contact = "contact",
}
export interface Page {
  id: string;
  page: string;
  path: string;
}
export const pages: Page[] = [
  {
    id: IndexPagesId.About,
    page: "About",
    path: `/`,
  },
  {
    id: IndexPagesId.Projects,
    page: "Projects",
    path: `/${IndexPagesId.Projects}`,
  },
  {
    id: IndexPagesId.Contact,
    page: "Contact",
    path: `/${IndexPagesId.Contact}`,
  },
];
