import { appLanguages } from "./Locale.config";

export const AppConfig = {
  site_name: "Portfolio",
  title: "My Landing Page",
  description:
    "Starter code for my Nextjs Boilerplate Landing Page with Module CSS",
  locale: appLanguages.eng.lang,
  keywords: "",
};

export enum IndexSectionsId {
  About = "about",
  Works = "works",
  Contacts = "contacts",
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
    id: IndexSectionsId.Works,
    sectionName: "Works",
    path: `/#${IndexSectionsId.Works}`,
  },
  {
    id: IndexSectionsId.Contacts,
    sectionName: "Contacts",
    path: `/#${IndexSectionsId.Contacts}`,
  },
];
