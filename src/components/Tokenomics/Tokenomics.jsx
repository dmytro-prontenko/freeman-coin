import * as Styled from "./Tokenomics.styled.js";
import { useRef, useState } from "react";

const Tokenomics = () => {
  const textRefs = useRef([]);
  const [flipped, setFlipped] = useState({});

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
    <Styled.TokenomicsSection>
      <Styled.TokenomicsTitle>Tokenomics</Styled.TokenomicsTitle>
      <Styled.TokenomicsSubTitle>Marketing Wallet</Styled.TokenomicsSubTitle>
      <Styled.ToknomicsDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        mollit anim id est laborum.
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
  );
};

export default Tokenomics;
