import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
`;

export const ContainerHeroSocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

export const AboutTitle = styled(motion.h1)`
  background-color: #000;
  color: #fff;
  border: 2px solid #fff;
  padding: 20px;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 20px 0;
  text-align: center;
`;

export const AboutDescription = styled(motion.p)`
  background-color: #000;
  color: #fff;
  border: 2px solid #fff;
  padding: 20px;
  font-size: 1em;
  line-height: 1.5;
  margin: 20px 0;
  text-align: justify;
`;

export const AboutImg = styled(motion.img)`
  width: 100vw;
  height: auto;
  filter: blur(8px);
`;

export const FreemanButton = styled(motion.a)`
  text-align: center;
  width: 80%;
  background-color: #000;
  color: #fff;
  border: 2px solid #fff;
  padding: 10px 20px;
  font-size: 1.2em;
  font-family: var(--font-family), sans-serif;
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

const SocialButton = styled(motion.a)`
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1em;
  color: #fff;
  text-decoration: none;
  background-color: #000; 
  border-radius: 5px;
  border: 2px solid #fff;/
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #000;
    border-color: #000;
  }
`;

export const TwitterButton = styled(SocialButton)``;

export const TelegramButton = styled(SocialButton)``;
