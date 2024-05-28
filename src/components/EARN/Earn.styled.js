import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const EarnWrapper = styled.section`
  width: 100%;
  padding: 64px 0 64px;
  background-image: url("/earn_bg.webp");
  background-size: cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/bacs&moneta.png");
    background-size: cover;
    background-repeat: no-repeat;
    pointer-events: none;
    opacity: 60%;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(180deg, #0f0f0f 0%, rgba(15, 15, 15, 0) 10%),
      linear-gradient(360deg, #0f0f0f 0%, rgba(15, 15, 15, 0) 5%);
  }
  & > * {
    position: relative;
    z-index: 3;
  }
`;

export const EarnSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1280px;
  @media screen and (min-width: 768px) {
    align-items: start;
  }
`;

export const EarnTitle = styled(motion.h2)`
  color: #fff;
  padding: 20px;
  width: 95%;
  margin: 0 auto;
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
    margin-bottom: 36px;
    gap: 16px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 120px;
    margin-bottom: 48px;
    gap: 64px;
  }
`;

export const EarnSubTitle = styled(motion.h3)`
  color: #fff;
  padding: 20px;
  font-family: "LongToday", sans-serif;
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 72px;
  }
`;

export const EarnDescription = styled(motion.p)`
  color: #fff;
  padding: 20px;
  font-size: 16px;
  line-height: 1.2;
  font-family: "LongToday", sans-serif;
  text-align: justify;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 85%;
    font-size: 24px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 36px;
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
  max-width: 90%;
  @media screen and (min-width: 768px) {
    padding-left: 60px;
  }
  @media screen and (min-width: 1279px) {
    padding-left: 100px;
  }
`;

export const EarnItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 12px 8px;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 48px;
  }
`;

export const EarnFreandsText = styled(motion.p)`
  color: #fff;
  font-size: 16px;
  line-height: 1.2;
  margin: 20px auto;
  font-family: "LongToday", sans-serif;
  text-align: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    max-width: 85%;
    font-size: 24px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 36px;
  }
`;

export const EarnFreandsTextB = styled(motion.p)`
  color: #fff;
  padding: 20px;
  font-size: 16px;
  line-height: 1.2;
  font-family: "LongToday", sans-serif;
  text-align: center;
  margin: 0 auto;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    max-width: 85%;
    font-size: 24px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 36px;
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
  margin-left: 24px;

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
