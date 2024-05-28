import styled from "styled-components";
import { motion } from "framer-motion";

export const HowToByWrapper = styled.section`
  width: 100%;
  padding: 64px 0 64px;
  background-image: url("/how_to_buy_bg.webp");
  background-size: cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/m_bg.png");
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

export const HowToBySection = styled.div`
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

export const HowToByTitle = styled(motion.h2)`
  color: #fff;
  padding: 20px 0 10px;
  font-family: "DarkGraffiti-Regular", sans-serif;
  font-size: 48px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
  margin: 20px auto 20px;
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

export const HowToByDescription = styled(motion.p)`
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
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 72px;
  }
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
  font-size: 16px;
`;
export const TGCommunityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 6px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
  @media screen and (min-width: 1279px) {
    gap: 64px;
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
  @media screen and (min-width: 768px) {
    height: 56px;
    width: 300px;
  }
  @media screen and (min-width: 1279px) {
    height: 72px;
    width: 350px;
  }
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
  font-size: 14px;
  transform: rotateX(0deg);
  transition: transform 0.3s ease;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 36px;
  }

  ${TGCommunityButton}:hover & {
    transform: rotateX(180deg);
  }
`;
