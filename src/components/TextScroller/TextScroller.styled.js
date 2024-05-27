import styled from "styled-components";
import Marquee from "react-fast-marquee";

export const StyledTextScroller = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: black;
  padding: 10px;
  color: white;
  font-family: "DarkGraffiti-Regular", sans-serif;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const StyledMarquee = styled(Marquee)``;

export const StyledImage = styled.img`
  width: 50px;
  margin-right: 20px;
  margin-left: 20px;
`;
