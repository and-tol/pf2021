export const AppConfig = {
  site_name: "Portfolio",
  title: "My Landing Page",
  description:
    "Starter code for my Nextjs Boilerplate Landing Page with Module CSS",
  locale: "ru",
  keywords: "",
};

// export const AppLanguages: string[] = ['eng', 'rus', 'lat'];

export interface AppLanguages {
  lang: string;
  path: string;
}
export interface Sections {
  id: string;
  sectionName: string;
}

export const sections: Sections[] = [
  {
    id: "about",
    sectionName: "About",
  },
  {
    id: "works",
    sectionName: "Works",
  },
  {
    id: "contacts",
    sectionName: "Contacts",
  },
];
export const appLanguages: AppLanguages[] = [
  {
    lang: "eng",
    path: "/",
  },
  {
    lang: "rus",
    path: "/rus",
  },
];
