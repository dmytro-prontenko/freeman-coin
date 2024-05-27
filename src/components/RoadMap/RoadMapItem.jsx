import React, { useState } from "react";
import * as Styles from "./RoadMap.styled.js";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RoadMapItem = ({ text, delay, imageSrc }) => {
  const [showImage, setShowImage] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Styles.RoadMapItem
      ref={ref}
      initial={{ scale: 0 }}
      animate={inView ? { scale: [0, 1.2, 1] } : { scale: 0 }}
      transition={{ delay, duration: 0.5 }}
      style={{ listStyle: "none", marginBottom: "10px", position: "relative" }}
      onAnimationComplete={() => setShowImage(true)}
    >
      {text}
    </Styles.RoadMapItem>
  );
};

export default RoadMapItem;
