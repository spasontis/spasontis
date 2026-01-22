import { useTranslations } from "next-intl";

export const HomePage = () => {
  const t = useTranslations("translation.home.text");
  return (
    <div>
      <h1>{t("homePage")}</h1>
    </div>
  );
};
