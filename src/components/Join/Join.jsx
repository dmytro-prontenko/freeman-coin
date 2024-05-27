import * as Styled from "./Join.styled.js";
import twitter from "/icon/twitter.png";
import telegram from "/icon/telegram.png";
import money from "/gif/money.gif";

import { TGCommunitySocialImg } from "../HowToBuy/HowToBuy.styled.js";
import {
  SocialImg,
  SocialImgTG,
  TelegramButton,
  TwitterButton,
} from "../About/About.styled.js";

const Join = () => {
  return (
    <Styled.JoinSectionWrapper>
      <Styled.JoinSection>
        <Styled.JoinTitle id={"join"}>Join our Community</Styled.JoinTitle>
        <Styled.TGJoinContainer>
          <TelegramButton
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            exit={{ x: -1000 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialImgTG>
              <SocialImg src={telegram} alt="Twitter icon" />
            </SocialImgTG>
          </TelegramButton>

          <Styled.TGJoinButton
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            exit={{ x: -1000 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotateX: 180 }}
          >
            <Styled.TGJoinWrapper>
              <Styled.ButtonFront>
                <TGCommunitySocialImg src={telegram} alt="Telegram icon" />
                <Styled.ButtonText>TG Community</Styled.ButtonText>
              </Styled.ButtonFront>
            </Styled.TGJoinWrapper>
          </Styled.TGJoinButton>

          <TwitterButton
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            exit={{ x: 1000 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialImg src={twitter} alt="Twitter icon" />
          </TwitterButton>
        </Styled.TGJoinContainer>
      </Styled.JoinSection>
      <Styled.JoinImg
        src={money}
        alt="My GIF"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </Styled.JoinSectionWrapper>
  );
};

export default Join;
