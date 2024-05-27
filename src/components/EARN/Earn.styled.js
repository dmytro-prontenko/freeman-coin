import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const EarnWrapper = styled.section`
  width: 100%;
  padding: 64px 0 64px;
  background-image: url("/earn_bg.webp");
  background-size: cover;
`;

export const EarnSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    align-items: start;
    max-width: 80%;
  }
`;

export const EarnTitle = styled(motion.h2)`
  color: #fff;
  padding: 20px;
  width: 98%;
  font-family: "DarkGraffiti-Regular", sans-serif;
  font-size: 48px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
  border: 4px solid #fff;
  background: #000;
  @media screen and (min-width: 768px) {
    font-size: 64px;
    margin: 0 auto;
  }
`;

export const EarnSubTitle = styled(motion.h3)`
  color: #fff;
  font-family: "LongToday", sans-serif;
  font-size: 34px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0 auto 24px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const EarnDescription = styled(motion.p)`
  color: #fff;
  font-size: 16px;
  line-height: 1.2;
  margin: 20px 0;
  font-family: "LongToday", sans-serif;
  text-align: justify;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    max-width: 85%;
    font-size: 24px;
  }
`;

const rotateWithPause = keyframes`
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const EarnImage = styled.img`
  width: 80px;
  margin-right: 12px;
  margin-left: 12px;
  animation: ${rotateWithPause} 3s linear infinite;
  @media screen and (min-width: 768px) {
    width: 120px;
    margin-right: 16px;
    margin-left: 16px;
  }
`;

export const EarnList = styled.ol`
  list-style: decimal;
  margin-bottom: 32px;
  width: 85%;
  padding-left: 24px;
`;

export const EarnItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-size: 18px;
  line-height: 1.2;
  padding: 8px;
  font-family: "LongToday", sans-serif;
  text-align: justify;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    font-size: 24px;
  }
`;

export const EarnFreandsText = styled(motion.p)`
  color: #fff;
  font-size: 16px;
  line-height: 1.2;
  margin: 20px 0;
  font-family: "LongToday", sans-serif;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    max-width: 80%;
    font-size: 24px;
    margin: 0 auto;
  }
`;

export const EarnFreandsTextB = styled(motion.p)`
  color: #fff;
  font-size: 32px;
  line-height: 1.2;
  margin: 20px 0;
  font-family: "LongToday", sans-serif;
  text-align: center;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    padding-top: 20px;
    max-width: 85%;
    font-size: 48px;
    margin: 0 auto;
  }
`;

export const TokenomicsButton = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  background-color: #000;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 35px;
  padding: 4px;
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
`;
