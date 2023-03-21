import React from "react";
import { useTranslation } from "react-i18next";

import { SelectBox } from "shared/ui";
import { SuggestType } from "shared/types";
import { LanguageType, useLanguage } from "shared/providers/language/lib";

import { OptionsForSelect } from "../lib/SelectOptions";

export const SelectLanguage = () => {
  const { t: translation, i18n } = useTranslation();
  const { lang: language, changeLanguage: setLanguage } = useLanguage();

  const handleChangeLanguage = (value: SuggestType["id"]) => {
    const stringValue = value as LanguageType;
    i18n.changeLanguage(stringValue);
    setLanguage(stringValue);
  };

  const options = OptionsForSelect(translation);

  return (
    <SelectBox
      value={language}
      options={options}
      onChange={handleChangeLanguage}
    />
  );
};
