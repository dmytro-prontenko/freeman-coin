import * as Styled from "./Earn.styled.js";
import misterFreeman from "/icon/moneta.png";
import ton from "/icon/ton.png";
import { useTranslation } from "react-i18next";
const Earn = () => {
  const { t } = useTranslation();
  return (
    <Styled.EarnWrapper>
      <Styled.EarnSection>
        <Styled.EarnTitle id={"earn"}>
          <Styled.EarnImage src={misterFreeman} alt={"misterFreeman"} /> EARN
          <Styled.EarnImage src={ton} alt={"misterFreeman"} />
        </Styled.EarnTitle>

        <Styled.EarnDescription>{t("earn_desc_1")}</Styled.EarnDescription>
        <Styled.EarnSubTitle>{t("how_to_start")}</Styled.EarnSubTitle>
        <Styled.EarnList>
          <Styled.EarnItem>
            {t("earn_point_1")}

            <Styled.TokenomicsButton
              href={"@zalupa_bot"}
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              exit={{ x: 1000 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              @zalupa_bot
            </Styled.TokenomicsButton>
          </Styled.EarnItem>
          <Styled.EarnItem>{t("earn_point_2")}</Styled.EarnItem>
          <Styled.EarnItem>{t("earn_point_3")}</Styled.EarnItem>
        </Styled.EarnList>
        <Styled.EarnFreandsText>{t("earn_desc_2")}</Styled.EarnFreandsText>
        <Styled.EarnFreandsTextB>{t("earn_desc_3")}</Styled.EarnFreandsTextB>
      </Styled.EarnSection>
    </Styled.EarnWrapper>
  );
};

export default Earn;
