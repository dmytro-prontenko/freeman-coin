import styled from "styled-components";
import { motion } from "framer-motion";

export const TokenomicsWrapper = styled.section`
  width: 100%;
  padding: 64px 0 64px;
  background-image: url("/tok_bg.webp");
  background-size: cover;
`;

export const TokenomicsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TokenomicsTitle = styled(motion.h2)`
  color: #fff;
  padding: 20px;
  font-family: "DarkGraffiti-Regular", sans-serif;
  font-size: 48px;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 20px 0;
  text-align: center;
  border-radius: 34px;
  border: 4px solid #fff;
  background: #000;
  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
`;

export const TokenomicsSubTitle = styled(motion.h3)`
  color: #fff;
  padding: 20px;
  font-family: "LongToday", sans-serif;
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const ToknomicsDescription = styled(motion.p)`
  color: #fff;
  font-size: 16px;
  line-height: 1.2;
  margin: 20px 0;
  font-family: "LongToday", sans-serif;
  text-align: justify;
  padding: 20px;
  @media screen and (min-width: 768px) {
    max-width: 85%;
    font-size: 24px;
  }
`;

export const ToknomicsKey = styled(motion.span)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 95%;
  background-color: #000;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 35px;
  padding: 10px 20px;
  font-size: 14px;
  font-family: "pershotravneva55-regular", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 2px;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  &:hover {
    background-color: #fff;
    color: #000;
    border-color: #000;
  }

  @media screen and (min-width: 768px) {
    max-width: 80%;
    font-size: 24px;
  }
`;

export const TokenomicsButton = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: #000;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 35px;
  padding: 10px 20px 5px;
  font-size: 1.2em;
  font-family: "pershotravneva55-regular", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    background-color: #fff;
    color: #000;
    border-color: #000;
  }

  &:active {
    background-color: #444;
    color: #fff;
    border-color: #fff;
  }
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const TakenomicsImg = styled(motion.img)`
  width: 95vw;
  height: auto;
  filter: blur(8px);
  margin: 24px auto;
  border: 2px solid #fff;
  border-radius: 35px;
`;
