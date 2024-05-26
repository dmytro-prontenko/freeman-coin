import * as Styled from "./Earn.styled.js";
import misterFreeman from "/icon/moneta.png";
import ton from "/icon/ton.png";
const Earn = () => {
  return (
    <Styled.EarnSection>
      <Styled.EarnTitle>
        <Styled.EarnImage src={misterFreeman} alt={"misterFreeman"} /> EARN
        <Styled.EarnImage src={ton} alt={"misterFreeman"} />
      </Styled.EarnTitle>

      <Styled.EarnDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in
      </Styled.EarnDescription>
      <Styled.EarnSubTitle>Как начать?</Styled.EarnSubTitle>
      <Styled.EarnList>
        <Styled.EarnItem>llamco laboris nisi ut aliquip ex ea</Styled.EarnItem>
        <Styled.EarnItem>llamco laboris nisi ut aliquip ex ea</Styled.EarnItem>
        <Styled.EarnItem>llamco laboris nisi ut aliquip ex ea</Styled.EarnItem>
      </Styled.EarnList>
      <Styled.EarnFreandsText>
        ullamco laboris veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea
      </Styled.EarnFreandsText>
      <Styled.EarnFreandsText>
        ullamco laboris veniam, quis nostrud exercitation ullamco laboris nisi
      </Styled.EarnFreandsText>
      <Styled.EarnFreandsTextB>
        ullamco laboris veniam, quis nostrud exercitation ullamco laboris nisi{" "}
      </Styled.EarnFreandsTextB>
    </Styled.EarnSection>
  );
};

export default Earn;
