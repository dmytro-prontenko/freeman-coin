import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderLangWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
`;

export const NavHeader = styled(motion.nav)`
  background-color: #000;
  border-bottom: #fff 1px solid;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const NavHeaderLink = styled.a`
  color: #fff;
  font-family: var(--font-family), sans-serif;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  padding: 10px 15px;
  cursor: pointer;
  transition:
    color 0.3s ease,
    border-bottom 0.3s ease;
  border-bottom: 2px solid transparent;

  &:hover {
    color: var(--basic-yellow);
    border-bottom: 2px solid var(--basic-yellow);
  }

  &:active {
    color: var(--basic-yellow);
    border-bottom: 2px solid var(--basic-yellow);
  }
`;

export const FreemanLanguageButton = styled(motion.button)`
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1em;
  color: #fff;
  background-color: #000;
  border-radius: 5px;
  border: 2px solid #fff;
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
