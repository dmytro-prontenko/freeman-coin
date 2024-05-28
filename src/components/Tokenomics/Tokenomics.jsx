import * as Styled from "./Tokenomics.styled.js";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import graf from "/gif/graf.gif";

const Tokenomics = () => {
  const textRefs = useRef([]);
  const [flipped, setFlipped] = useState({});
  const { t } = useTranslation();

  const handleFlip = (index) => {
    setFlipped((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));

    setTimeout(() => {
      setFlipped((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    }, 1000);
  };

  const handleCopy = (index) => {
    const textToCopy = textRefs.current[index].innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleClick = (index) => {
    handleFlip(index);
    handleCopy(index);
  };

  return (
    <Styled.TokenomicsWrapper>
      <Styled.TokenomicsSection>
        <Styled.TokenomicsTitle id={"tokenomics"}>
          Tokenomics
        </Styled.TokenomicsTitle>
        <Styled.TakenomicsImg
          src={graf}
          alt="My GIF"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <Styled.TokenomicsSubTitle>{t("title_tok")}</Styled.TokenomicsSubTitle>
        <Styled.ToknomicsDescription>
          {t("tok_desc1")}
        </Styled.ToknomicsDescription>
        <Styled.ToknomicsKey
          onClick={() => handleClick(0)}
          ref={(el) => (textRefs.current[0] = el)}
          animate={{ rotateY: flipped[0] ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {flipped[0] ? "Скопировано!" : "EQA3k0uhyaP032oDtks_fajSn9Z7rDx"}
        </Styled.ToknomicsKey>
        <Styled.ToknomicsDescription>
          {t("tok_desc2")}
        </Styled.ToknomicsDescription>
        <Styled.TokenomicsButton
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          exit={{ x: 1000 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          tonviewer.com
        </Styled.TokenomicsButton>
      </Styled.TokenomicsSection>
    </Styled.TokenomicsWrapper>
  );
};

export default Tokenomics;
