import { useTranslation } from "react-i18next";

export const ArticlesPage = () => {
  const { t } = useTranslation("articles_page");

  return (
    <div>
      <div>{t("articles_title")}</div>
    </div>
  );
};
