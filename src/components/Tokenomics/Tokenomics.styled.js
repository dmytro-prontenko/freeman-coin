import styled from "styled-components";
import { motion } from "framer-motion";

export const TokenomicsSection = styled.section`
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
  text-decoration: underline;
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
  margin: 20px 0;
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

  @media screen and (min-width: 768px) {
    max-width: 80%;
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
