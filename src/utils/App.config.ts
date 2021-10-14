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
  about = "about",
  works = "works",
  contacts = "contacts",
}
export interface Section {
  id: string;
  sectionName: string;
  path: string;
}

export const sections: Section[] = [
  {
    id: IndexSectionsId.about,
    sectionName: "About",
    path: `/#${IndexSectionsId.about}`,
  },
  {
    id: IndexSectionsId.works,
    sectionName: "Works",
    path: `/#${IndexSectionsId.works}`,
  },
  {
    id: IndexSectionsId.contacts,
    sectionName: "Contacts",
    path: `/#${IndexSectionsId.contacts}`,
  },
];
