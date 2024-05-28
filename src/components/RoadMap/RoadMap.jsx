import * as Styles from "./RoadMap.styled.js";
import { useTranslation } from "react-i18next";

const RoadMap = () => {
  const { t } = useTranslation();

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <Styles.RoadMapWrapper>
      <Styles.RoadMapSection>
        <Styles.RoadMapTitle id={"road_map"}>Road Map</Styles.RoadMapTitle>
        <Styles.RoadMapSubTitle>Q3 - Start Project</Styles.RoadMapSubTitle>
        <Styles.RoadMapList
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          <Styles.RoadMapItem>
            {t("point_1.1")}
            <Styles.Yellow>{t("point_1.2")}</Styles.Yellow>
            {t("point_1.3")}
          </Styles.RoadMapItem>
          <Styles.RoadMapItem>
            {t("point_2.1")}
            <Styles.Yellow>{t("point_2.2")}</Styles.Yellow>
            {t("point_2.3")}
          </Styles.RoadMapItem>
          <Styles.RoadMapItem>{t("point_3")}</Styles.RoadMapItem>
          <Styles.RoadMapItem>{t("point_4")}</Styles.RoadMapItem>
          <Styles.RoadMapItem>
            {t("point_5.1")}
            <Styles.Yellow>{t("point_5.2")}</Styles.Yellow>
            {t("point_5.3")}
          </Styles.RoadMapItem>
          <Styles.RoadMapItem>
            {t("point_6.1")}
            <Styles.Yellow>{t("point_6.2")}</Styles.Yellow>
            {t("point_6.3")}
          </Styles.RoadMapItem>
          <Styles.RoadMapItem>
            {t("point_7.1")}
            <Styles.Yellow>{t("point_7.2")}</Styles.Yellow>
            {t("point_7.3")}
          </Styles.RoadMapItem>
          <Styles.RoadMapItem>
            {t("point_8.1")}
            <Styles.Yellow>{t("point_8.2")}</Styles.Yellow>
            {t("point_8.3")}
          </Styles.RoadMapItem>
          <Styles.RoadMapItem>
            {t("point_9.1")}
            <Styles.Yellow>{t("point_9.2")}</Styles.Yellow>
            {t("point_9.3")}
          </Styles.RoadMapItem>
          <Styles.RoadMapItem>{t("point_10")}</Styles.RoadMapItem>
          <Styles.RoadMapItem>
            {t("point_11.1")}
            <Styles.Yellow>{t("point_11.2")}</Styles.Yellow>
            {t("point_11.3")}
          </Styles.RoadMapItem>
          <Styles.RoadMapItem>{t("point_12")}</Styles.RoadMapItem>
          <Styles.RoadMapItem>{t("point_13")}</Styles.RoadMapItem>
          <Styles.RoadMapItem>{t("point_14")}</Styles.RoadMapItem>
          <Styles.RoadMapItem>
            {t("point_15.1")}
            <Styles.Yellow>{t("point_15.2")}</Styles.Yellow>
            {t("point_15.3")}
          </Styles.RoadMapItem>
          <Styles.RoadMapItem>{t("point_16")}</Styles.RoadMapItem>
        </Styles.RoadMapList>
        <Styles.RoadMapSubTitle>Q4 - Project Scaling</Styles.RoadMapSubTitle>

        <Styles.RoadMapList
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          <Styles.RoadMapItem>{t("point_17")}</Styles.RoadMapItem>
          <Styles.RoadMapItem>{t("point_18")}</Styles.RoadMapItem>
          <Styles.RoadMapItem>
            {t("point_19.1")}
            <Styles.Yellow>{t("point_19.2")}</Styles.Yellow>
            {t("point_19.3")}
          </Styles.RoadMapItem>
        </Styles.RoadMapList>
      </Styles.RoadMapSection>
    </Styles.RoadMapWrapper>
  );
};

export default RoadMap;
