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
      {showImage && (
        <motion.img
          src={imageSrc}
          alt="Roadmap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ marginLeft: "10px", width: "50px", height: "50px" }}
        />
      )}
    </Styles.RoadMapItem>
  );
};

export default RoadMapItem;
