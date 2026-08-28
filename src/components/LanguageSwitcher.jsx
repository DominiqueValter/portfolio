import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  return (
    <button onClick={toggle} className="lang-switcher">
      {i18n.language === "pt" ? "EN" : "PT"}
    </button>
  );
}
