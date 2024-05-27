import styled from "styled-components";
import { motion } from "framer-motion";

export const RoadMapWrapper = styled.section`
  width: 100%;
  padding: 64px 0 64px;
  background-image: url("/road_bg.webp");
  background-size: cover;
  position: relative;
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

export const RoadMapSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    align-items: start;
  }
`;

export const RoadMapTitle = styled(motion.h2)`
  color: #fff;
  padding: 20px;
  font-family: "DarkGraffiti-Regular", sans-serif;
  font-size: 48px;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 0 auto 24px;
  border-radius: 34px;
  border: 4px solid #fff;
  background: #000;
  max-width: 85%;
  @media screen and (min-width: 768px) {
    font-size: 64px;
    margin-bottom: 36px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 120px;
    margin-bottom: 48px;
  }
`;

export const RoadMapSubTitle = styled(motion.h3)`
  color: #fff;
  font-family: "LongToday", sans-serif;
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: 2px;
  max-width: 85%;
  padding: 54px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 72px;
  }
`;

export const RoadMapList = styled(motion.ul)`
  margin: 0 auto;
  padding-left: 32px;
  max-width: 90%;
`;

export const RoadMapItem = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 12px 8px;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 36px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #0f0f0f 0%, rgba(15, 15, 15, 0) 35%),
    linear-gradient(360deg, #0f0f0f 0%, rgba(15, 15, 15, 0) 35%);
  z-index: 1;
`;
