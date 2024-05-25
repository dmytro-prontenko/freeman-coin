import * as Styles from "./RoadMap.styled.js";
import RoadMapItem from "./RoadMapItem.jsx";

const RoadMap = () => {
  const data1 = [
    {
      text: "Milestone 1",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 2",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 3",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 4",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 5",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 6",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 7",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 8",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 9",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 10",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 11",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 12",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 13",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 14",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 15",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 16",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
  ];
  const data2 = [
    {
      text: "Milestone 14",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 15",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
    {
      text: "Milestone 16",
      imageSrc:
        "https://deti-online.com/i/0/a7/8936/zoom/prostaya-mashinka.jpg",
    },
  ];
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
    <Styles.RoadMapSection>
      <Styles.RoadMapTitle>Road Map</Styles.RoadMapTitle>
      <Styles.RoadMapSubTitle>Q3 - Start Project</Styles.RoadMapSubTitle>
      <Styles.RoadMapList
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        {data1.map((item, index) => (
          <RoadMapItem
            key={index}
            delay={index * 0.5}
            text={item.text}
            imageSrc={item.imageSrc}
          />
        ))}
      </Styles.RoadMapList>
      <Styles.RoadMapSubTitle>Q3 - Start Project</Styles.RoadMapSubTitle>
      <Styles.RoadMapList
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        {data2.map((item, index) => (
          <RoadMapItem
            key={index}
            delay={index * 0.5}
            text={item.text}
            imageSrc={item.imageSrc}
          />
        ))}
      </Styles.RoadMapList>
    </Styles.RoadMapSection>
  );
};

export default RoadMap;
