import * as Styled from "./NavHeader.styled.js";
import { useState } from "react";
import about from "../About/About.jsx";

const NavHeader = () => {
  const [lang, setLang] = useState("EN");
  const changeLanguage = () => {
    setLang(lang === "EN" ? "RU" : "EN");
    console.log(lang);
  };
  return (
    <>
      <Styled.NavHeader
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        exit={{ y: 1000 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Styled.NavHeaderLink href={"#about"}>About</Styled.NavHeaderLink>
        <Styled.NavHeaderLink>Tokenomics</Styled.NavHeaderLink>
        <Styled.NavHeaderLink>Roadmap</Styled.NavHeaderLink>
        <Styled.NavHeaderLink>How to buy</Styled.NavHeaderLink>
        <Styled.NavHeaderLink>Earn</Styled.NavHeaderLink>
        <Styled.NavHeaderLink>Socials</Styled.NavHeaderLink>
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
    </>
  );
};

export default NavHeader;
