import styled from "styled-components";
import { motion } from "framer-motion";

export const Headr = styled.header`
  padding: 0;
  background-image: url("/bg.webp");
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
    background: linear-gradient(0, #0f0f0f 0%, rgba(15, 15, 15, 0) 15%),
      linear-gradient(300deg, #0f0f0f 0%, rgba(15, 15, 15, 0) 15%);
  }
  & > * {
    position: relative;
    z-index: 3;
  }
`;

export const ContainerHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto 12px;
  max-width: 1280px;
`;

export const ContainerHeroSocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
  @media screen and (min-width: 1279px) {
    gap: 64px;
  }
`;

export const AboutTitle = styled(motion.h1)`
  color: #fff;
  padding: 20px;
  font-family: "DarkGraffiti-Regular", sans-serif;
  font-size: 64px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 100px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 150px;
  }
`;

export const AboutDescription = styled(motion.p)`
  color: #fff;
  padding: 20px;
  font-size: 16px;
  line-height: 1.2;
  font-family: "LongToday", sans-serif;
  text-align: justify;

  @media screen and (min-width: 768px) {
    max-width: 85%;
    font-size: 24px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 36px;
  }
`;

export const AboutImg = styled(motion.img)`
  max-width: 1280px;
  margin: 0 auto;
  height: auto;
  filter: blur(8px);
  z-index: 1;
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
    font-size: 36px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 48px;
  }
`;

const SocialButton = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  text-decoration: none;
  background-color: #fff;
  border-radius: 5px;
  border: 2px solid #fff;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 72px;
    height: 72px;
    gap: 14px;
  }
  @media screen and (min-width: 1279px) {
    width: 85px;
    height: 85px;
  }
`;

export const TwitterButton = styled(SocialButton)``;

export const TelegramButton = styled(SocialButton)``;

export const SocialImg = styled(motion.img)`
  transition: transform 0.3s ease;
  ${SocialButton}:hover &,
    ${SocialButton}:focus & {
    transform: scale(1.2) rotate(360deg);
  }
`;

export const SocialImgTG = styled(motion.div)`
  border-radius: 5px;
  border: 2px solid #0f0f0f;
`;
