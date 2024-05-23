import { motion } from "framer-motion";
import * as Styled from "./Styles.styled.js";
import data from "/public/video/white-noise.webm";
import TextScroller from "./components/TextScroller/TextScroller.jsx";
import img1 from "./assets/1.png";

function App() {
  return (
    <>
      <Styled.HeroVideo
        autoPlay
        muted
        playsInline
        loop
        $webkit-playsinline
        id="hero-video"
      >
        <source src={data} type="video/webm" />
        Ваш браузер не поддерживает тег video.
      </Styled.HeroVideo>
      <motion.div initial={{ y: -500 }} animate={{ y: 0, delay: 300 }}>
        <div className="solid">FMAN</div>
      </motion.div>

      <motion.div initial={{ x: 1000 }} animate={{ x: 100 }} exit={{ x: 0 }}>
        <img src={img1} alt={"freeman"} />
      </motion.div>
      <div className="outline">FMAN</div>
      <div>
        FMAN is a degenerate gambler with anger issues on the Solana network.
      </div>
      <TextScroller text="$FMAN" />
    </>
  );
}

export default App;
