import styled from "styled-components";
import { motion } from "framer-motion";

export const Headr = styled.header`
  padding: 0;
`;

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
  color: #fff;
  padding: 20px;
  font-family: "DarkGraffiti-Regular", sans-serif;
  font-size: 64px;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 20px 0;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 100px;
  }
`;

export const AboutDescription = styled(motion.p)`
  color: #fff;
  padding: 20px;
  font-size: 16px;
  line-height: 1.2;
  margin: 20px 0;
  font-family: "LongToday", sans-serif;
  text-align: justify;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    max-width: 80%;
    font-size: 24px;
  }
`;

export const AboutImg = styled(motion.img)`
  width: 100vw;
  height: auto;
  filter: blur(8px);
`;

export const FreemanButton = styled(motion.a)`
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
  font-family: "DarkGraffiti-Regular", sans-serif;
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
    font-size: 32px;
  }
`;

const SocialButton = styled(motion.a)`
  display: inline-block;
  margin: 0 10px;
  width: 64px;
  height: 64px;
  text-decoration: none;
  background-color: #fff;
  border-radius: 5px;
  border: 2px solid #fff;
  cursor: pointer;
`;

export const TwitterButton = styled(SocialButton)``;

export const TelegramButton = styled(SocialButton)``;

export const SocialImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  ${SocialButton}:hover &,
    ${SocialButton}:focus & {
    transform: scale(1.2) rotate(360deg);
  }
`;
