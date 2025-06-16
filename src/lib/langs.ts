import { type LanguageCode } from 'deepl-node';

export { LanguageCode };
export type Lang = LanguageCode | 'tw' | 'vi';

export interface Language {
  // language abbreviation code with region
  code: string;
  // language abbreviation code without region
  lang: Lang;
  // language name in native language
  language: string;
  // language name in Chinese
  zhLanguage: string;
}

export const languages: Language[] = [
  // {
  //   code: "es-ES",
  //   lang: "es",
  //   language: "Español",
  //   zhLanguage: "西班牙语",
  // },
  {
    code: "en-US",
    lang: "en",
    language: "English",
    zhLanguage: "英语",
  },
  // {
  //   code: "pl-PL",
  //   lang: "pl",
  //   language: "Polski",
  //   zhLanguage: "波兰语",
  // },
  // {
  //   code: "ko-KR",
  //   lang: "ko",
  //   language: "한국어",
  //   zhLanguage: "韩语",
  // },
];

export const langs = languages.map((lang) => lang.lang);