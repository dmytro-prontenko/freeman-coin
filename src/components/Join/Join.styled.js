import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const JoinSectionWrapper = styled.section`
  padding: 64px 0 64px;
  width: 100%;
  background-image: url("/bg_join.webp");
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

export const JoinSection = styled.div`
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

export const JoinTitle = styled(motion.h2)`
  color: #fff;
  padding: 20px;
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

export const TGJoinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
  @media screen and (min-width: 1279px) {
    gap: 64px;
  }
`;
export const TGJoinButton = styled(motion.a)`
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
    width: 250px;
  }
  @media screen and (min-width: 1279px) {
    height: 72px;
    width: 300px;
  }
`;

export const TGJoinWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98%;
  height: 100%;

  transform-style: preserve-3d;
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
  font-size: 24px;
  transform: rotateX(0deg);
  transition: transform 0.3s ease;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 36px;
  }

  ${TGJoinButton}:hover & {
    transform: rotateX(180deg);
  }
`;

export const JoinImg = styled(motion.img)`
  max-width: 1280px;
  height: auto;
  filter: blur(8px);
  margin: 24px auto;
`;
