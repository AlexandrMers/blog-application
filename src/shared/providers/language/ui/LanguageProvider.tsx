import React, { Suspense, PropsWithChildren, useState } from "react";
import { LanguageContext, LanguageType } from "../lib";

export const LANGUAGE_KEY_LOCAL_STORAGE = "language";

const defaultLanguage =
  (localStorage.getItem(LANGUAGE_KEY_LOCAL_STORAGE) as LanguageType) || "ru";

// ~ import config of config library
import "../config";

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [lang, setLang] = useState<LanguageContext["lang"]>(defaultLanguage);

  const changeLanguage = (lang: LanguageType) => {
    setLang(lang);
    localStorage.setItem(LANGUAGE_KEY_LOCAL_STORAGE, lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        changeLanguage,
      }}
    >
      <Suspense fallback="Loading translations ...">{children}</Suspense>
    </LanguageContext.Provider>
  );
};
