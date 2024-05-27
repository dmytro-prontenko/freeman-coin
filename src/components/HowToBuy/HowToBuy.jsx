import * as Stayles from "./HowToBuy.styled.js";
import HowToBuyTimer from "./HowToBuyTimer.jsx";
import * as Styled from "../About/About.styled.js";
import twitter from "/icon/twitter.png";
import telegram from "/icon/telegram.png";
import { TGCommunitySocialImg } from "./HowToBuy.styled.js";

const HowToBuy = () => {
  return (
    <Stayles.HowToByWrapper>
      <Stayles.HowToBySection>
        <Stayles.HowToByTitle id={"how_to_buy"}>
          How To Buy $FMAN
        </Stayles.HowToByTitle>
        <Stayles.HowToByDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </Stayles.HowToByDescription>
        <HowToBuyTimer />
        <Stayles.TGCommunityContainer>
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

          <Stayles.TGCommunityButton
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            exit={{ x: -1000 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotateX: 180 }}
          >
            <Stayles.TGCommunityWrapper>
              <Stayles.ButtonFront>
                <TGCommunitySocialImg src={telegram} alt="Telegram icon" />
                <Stayles.ButtonText>TG Community</Stayles.ButtonText>
              </Stayles.ButtonFront>
            </Stayles.TGCommunityWrapper>
          </Stayles.TGCommunityButton>

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
        </Stayles.TGCommunityContainer>
      </Stayles.HowToBySection>
    </Stayles.HowToByWrapper>
  );
};

export default HowToBuy;
