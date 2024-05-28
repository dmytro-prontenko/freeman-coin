import styled from "styled-components";
import { motion } from "framer-motion";

export const TokenomicsWrapper = styled.section`
  width: 100%;
  padding: 64px 0 64px;
  background-image: url("/tok_bg.webp");
  background-size: cover;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/baks.png");
    background-size: cover;
    background-repeat: no-repeat;
    pointer-events: none;
    opacity: 50%;
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

export const TokenomicsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
`;

export const TokenomicsTitle = styled(motion.h2)`
  color: #fff;
  padding: 20px 0 10px;
  font-family: "DarkGraffiti-Regular", sans-serif;
  font-size: 48px;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 20px auto 20px;
  text-align: center;
  border-radius: 34px;
  border: 4px solid #fff;
  background: #000;

  @media screen and (min-width: 768px) {
    font-size: 64px;
    margin-bottom: 36px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 120px;
    margin-bottom: 48px;
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
  @media screen and (min-width: 1279px) {
    font-size: 72px;
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
  @media screen and (min-width: 1279px) {
    font-size: 36px;
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
    font-size: 36px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 48px;
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
    font-size: 36px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 48px;
  }
`;

export const TakenomicsImg = styled(motion.img)`
  max-width: 1280px;
  height: auto;
  filter: blur(8px);
  margin: 24px auto;
  border: 2px solid #fff;
  border-radius: 35px;
  padding: 8px;
`;
