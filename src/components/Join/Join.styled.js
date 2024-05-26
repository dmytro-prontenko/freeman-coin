import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const JoinSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 200px;

  @media screen and (min-width: 768px) {
    align-items: start;
    max-width: 80%;
  }
`;

export const JoinTitle = styled(motion.h2)`
  color: #fff;
  padding: 20px;
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
  margin: 0 auto 24px;
  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
`;

export const TGJoinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
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

  ${TGJoinButton}:hover & {
    transform: rotateX(180deg);
  }
`;
