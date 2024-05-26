import * as Styled from "./TextScroller.styled.js";
import misterFreeman from "/icon/moneta.png";
import baks from "/icon/baks.jpg";
const TextScroller = ({ text }) => {
  return (
    <Styled.StyledTextScroller>
      <Styled.StyledMarquee
        speed={250}
        gradient={false}
        gradientWidth={0}
        delay={0}
      >
        <Styled.StyledImage src={baks} alt="Mister Freeman" />
        <Styled.StyledImage src={misterFreeman} alt="Mister Freeman" />
        {text}
        <Styled.StyledImage src={misterFreeman} alt="Mister Freeman" />
        <Styled.StyledImage src={baks} alt="Mister Freeman" />
      </Styled.StyledMarquee>
    </Styled.StyledTextScroller>
  );
};

export default TextScroller;
