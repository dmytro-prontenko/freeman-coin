import * as Styles from "./RoadMap.styled.js";
import RoadMapItem from "./RoadMapItem.jsx";
import { data_q3, data_q4 } from "../../services/data/road_map_q3.js";
import { useTranslation } from "react-i18next";

const RoadMap = () => {
  const { t } = useTranslation();
  const data1 = data_q3(t);
  const data2 = data_q4(t);
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
          {data1.map((item, index) => (
            <RoadMapItem key={index} delay={index * 0.2} text={item.text} />
          ))}
        </Styles.RoadMapList>
        <Styles.RoadMapSubTitle>Q4 - Start Project</Styles.RoadMapSubTitle>
        <Styles.RoadMapList
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          {data2.map((item, index) => (
            <RoadMapItem key={index} delay={index * 0.2} text={item.text} />
          ))}
        </Styles.RoadMapList>
      </Styles.RoadMapSection>
    </Styles.RoadMapWrapper>
  );
};

export default RoadMap;
