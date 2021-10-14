// Localization
// export const AppLanguages: string[] = ['eng', 'rus', 'lat'];
export interface AppLanguage {
  lang: string;
  path: string;
}

export interface AppLanguages {
  eng: AppLanguage;
  rus: AppLanguage;
}
export const appLanguages: AppLanguages = {
  eng: {
    lang: "eng",
    path: "/",
  },
  rus: {
    lang: "rus",
    path: "/rus",
  },
};
