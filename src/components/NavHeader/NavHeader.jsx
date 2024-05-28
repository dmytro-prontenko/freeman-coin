import * as Styled from "./NavHeader.styled.js";
import { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const NavHeader = () => {
  const [lang, setLang] = useState(i18next.language);
  const { t } = useTranslation();

  useEffect(() => {
    void i18next.changeLanguage(lang);
  }, [lang]);

  const changeLanguage = () => {
    setLang(lang === "GB" ? "RU" : "GB");
  };
  return (
    <Styled.HeaderHiWrapper id={"header"}>
      <Styled.NavHeader
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        exit={{ y: 1000 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Styled.NavHeaderLink href={"#about"}>
          {t("about")}
        </Styled.NavHeaderLink>
        <Styled.NavHeaderLink href={"#tokenomics"}>
          {t("tokenomics")}
        </Styled.NavHeaderLink>
        <Styled.NavHeaderLink href={"#road_map"}>
          {t("roadmap")}
        </Styled.NavHeaderLink>
        <Styled.NavHeaderLink href={"#how_to_buy"}>
          {t("how_to_buy")}
        </Styled.NavHeaderLink>
        <Styled.NavHeaderLink href={"#earn"}>{t("earn")}</Styled.NavHeaderLink>
        <Styled.NavHeaderLink href={"#join"}>
          {t("socials")}
        </Styled.NavHeaderLink>
      </Styled.NavHeader>
      <Styled.HeaderLangWrapper>
        <Styled.FreemanLanguageButton
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          exit={{ x: -1000 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          onClick={changeLanguage}
        >
          RU/EN
        </Styled.FreemanLanguageButton>
      </Styled.HeaderLangWrapper>
    </Styled.HeaderHiWrapper>
  );
};

export default NavHeader;
