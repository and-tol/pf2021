import { AppConfigLang } from '../config/App.config';

export const onAppConfig = (
  locale: string | undefined
): AppConfigLang | undefined => {
  let t: AppConfigLang | undefined = undefined;

  if (!locale) {
    t = AppConfigLang.en;
  }

  switch (locale) {
    case 'ru':
      t = AppConfigLang.ru;
      break;
    case 'ru-Ru':
      t = AppConfigLang.ru;
      break;
    case 'en':
      t = AppConfigLang.en;
      break;
    case 'en-Us':
      t = AppConfigLang.en;
      break;

    default:
      break;
  }

  return t;
};
