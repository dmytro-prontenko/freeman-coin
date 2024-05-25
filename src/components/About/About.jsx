import tvGif from "/gif/tv1.gif";
import twitter from "/icon/twitter.png";
import telegram from "/icon/telegram.png";
import * as Styled from "./About.styled.js";
import NavHeader from "../NavHeader/NavHeader.jsx";
import { SocialImg } from "./About.styled.js";

const About = () => {
  return (
    <Styled.Headr id={"#about"}>
      <NavHeader />
      <Styled.ContainerHeroWrapper>
        <Styled.AboutTitle
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          exit={{ x: 1000 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          MR.Feeman
        </Styled.AboutTitle>
        <Styled.AboutDescription
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          exit={{ x: -1000 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Styled.AboutDescription>
        <Styled.ContainerHeroSocialWrapper>
          <Styled.TwitterButton
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            exit={{ x: 1000 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Styled.SocialImg src={twitter} alt="Twitter icon" />
          </Styled.TwitterButton>
          <Styled.TelegramButton
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            exit={{ x: -1000 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Styled.SocialImg src={telegram} alt="Twitter icon" />
          </Styled.TelegramButton>
        </Styled.ContainerHeroSocialWrapper>
        <Styled.FreemanButton
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          exit={{ x: 1000 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          BUY $FMAN
        </Styled.FreemanButton>
      </Styled.ContainerHeroWrapper>
      <Styled.AboutImg
        src={tvGif}
        alt="My GIF"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </Styled.Headr>
  );
};

export default About;
