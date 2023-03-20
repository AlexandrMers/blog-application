import { createContext } from "react";

export type LanguageType = "ru" | "en";

export interface LanguageContext {
  lang?: LanguageType;
  changeLanguage?: (lang: LanguageContext["lang"], namespace?: string) => void;
}

export const LanguageContext = createContext<LanguageContext>({});
