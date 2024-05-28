import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  z-index: 100;
  cursor: pointer;
  border: 4px solid #fff;
  background: #000;
  border-radius: 50%;
  overflow: hidden;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LinkToTop = styled(Link)`
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  position: fixed;
  bottom: 120px;
  right: 16px;
  z-index: 100;
  @media screen and (min-width: 768px) {
    bottom: 120px;
    right: 26px;
  }
  @media screen and (min-width: 1279px) {
    bottom: 120px;
    right: 90px;
  }
`;

export default { Button, LinkToTop };
