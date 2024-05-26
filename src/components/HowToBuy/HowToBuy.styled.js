import styled from "styled-components";
import { motion } from "framer-motion";

export const HowToBySection = styled.section`
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

export const HowToByTitle = styled(motion.h2)`
  color: #fff;
  padding: 20px;
  font-family: "DarkGraffiti-Regular", sans-serif;
  font-size: 48px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;

  border-radius: 34px;
  border: 4px solid #fff;
  background: #000;
  @media screen and (min-width: 768px) {
    font-size: 64px;
    margin: 0 auto;
  }
`;

export const HowToByDescription = styled(motion.p)`
  color: #fff;
  font-size: 16px;
  line-height: 1.2;
  margin: 20px 0;
  font-family: "LongToday", sans-serif;
  text-align: justify;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    max-width: 80%;
    font-size: 24px;
  }
`;

export const AppContainer = styled.div`
  font-family: "DarkGraffiti-Regular", sans-serif;
  background-color: #000;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 0 auto 40px;
  border: 2px solid #fff;
  border-radius: 35px;
  width: 98%;
`;

export const TimerContainer = styled.div`
  text-align: center;
`;
export const Timer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 2rem;
  @media screen and (min-width: 768px) {
    gap: 1.5rem;
    font-size: 4rem;
  }
`;

export const TimerElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TimerLabel = styled.span`
  font-size: 1rem;
`;
export const TGCommunityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 6px;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const TGCommunityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98%;
  height: 100%;

  transform-style: preserve-3d;
`;

export const TGCommunityButton = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 200px;
  text-decoration: none;
  background-color: #fff;
  border-radius: 5px;
  border: 2px solid #fff;
  cursor: pointer;
  perspective: 1000px;
`;

export const TGCommunitySocialImg = styled(motion.img)`
  width: 48px;
  height: 48px;
  margin-right: 6px;
  transform: rotateX(0deg);
  transition: transform 0.3s ease;

  ${TGCommunityButton}:hover & {
    transform: rotateX(180deg);
  }
`;
export const ButtonFront = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #0f0f0f;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;
export const ButtonText = styled.span`
  font-family: "LongToday", sans-serif;
  color: #000;
  font-size: 22px;
  transform: rotateX(0deg);
  transition: transform 0.3s ease;

  ${TGCommunityButton}:hover & {
    transform: rotateX(180deg);
  }
`;
