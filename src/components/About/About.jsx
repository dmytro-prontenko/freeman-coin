import tvGif from "/gif/tv2.gif";
import twitter from "/icon/twitter.png";
import telegram from "/icon/telegram.png";
import * as Styled from "./About.styled.js";
import NavHeader from "../NavHeader/NavHeader.jsx";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
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
          {t("about_desc")}
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
            <Styled.SocialImgTG>
              <Styled.SocialImg src={telegram} alt="Twitter icon" />
            </Styled.SocialImgTG>
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
