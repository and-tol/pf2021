// Localization
// export const AppLanguages: string[] = ['eng', 'rus', 'lat'];
export enum Languages {
  Eng = 'eng',
  Rus = 'rus',
}

export enum LanguagesKeys {
  Lang = 'lang',
  Path = 'path',
}
export enum Path {
  Root = '/',
}

export interface AppLanguage {
  lang: string;
  path: string;
  isRealized: boolean;
}

export interface AppLanguages {
  eng: AppLanguage;
  rus: AppLanguage;
}

export const appLanguages: AppLanguages = {
  [Languages.Eng]: {
    [LanguagesKeys.Lang]: Languages.Eng,
    [LanguagesKeys.Path]: Path.Root,
    isRealized: true,
  },
  // [Languages.Rus]: {
  //   [LanguagesKeys.Lang]: Languages.Rus,
  //   [LanguagesKeys.Path]: `${Path.Root}${Languages.Rus}`,
  //   isRealized: false,
  // },
};
