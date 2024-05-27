import * as Styled from "./NavHeader.styled.js";
import { useEffect, useState } from "react";
import i18next from "i18next";

const NavHeader = () => {
  const [lang, setLang] = useState(i18next.language);

  useEffect(() => {
    void i18next.changeLanguage(lang);
  }, [lang]);

  const changeLanguage = () => {
    setLang(lang === "GB" ? "RU" : "GB");
    console.log(lang);
  };
  return (
    <Styled.HeaderHiWrapper>
      <Styled.NavHeader
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        exit={{ y: 1000 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Styled.NavHeaderLink href={"#about"}>About</Styled.NavHeaderLink>
        <Styled.NavHeaderLink href={"#tokenomics"}>
          Tokenomics
        </Styled.NavHeaderLink>
        <Styled.NavHeaderLink href={"#road_map"}>Roadmap</Styled.NavHeaderLink>
        <Styled.NavHeaderLink href={"#how_to_buy"}>
          How to buy
        </Styled.NavHeaderLink>
        <Styled.NavHeaderLink href={"#earn"}>Earn</Styled.NavHeaderLink>
        <Styled.NavHeaderLink href={"#join"}>Socials</Styled.NavHeaderLink>
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
