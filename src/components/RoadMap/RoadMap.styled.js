import styled from "styled-components";
import { motion } from "framer-motion";

export const RoadMapSection = styled.section`
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

export const RoadMapTitle = styled(motion.h2)`
  color: #fff;
  padding: 20px;
  font-family: "DarkGraffiti-Regular", sans-serif;
  font-size: 48px;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 24px;
  border-radius: 34px;
  border: 4px solid #fff;
  background: #000;
  @media screen and (min-width: 768px) {
    font-size: 64px;
    margin: 0 auto;
  }
`;

export const RoadMapSubTitle = styled(motion.h3)`
  color: #fff;
  font-family: "LongToday", sans-serif;
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const RoadMapList = styled(motion.ul)`
  padding: 0;
  margin-bottom: 24px;
`;

export const RoadMapItem = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: "10px";
`;
