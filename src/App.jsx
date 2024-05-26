import About from "./components/About/About.jsx";
import Tokenomics from "./components/Tokenomics/Tokenomics.jsx";
import RoadMap from "./components/RoadMap/RoadMap.jsx";
import HowToBuy from "./components/HowToBuy/HowToBuy.jsx";
import TextScroller from "./components/TextScroller/TextScroller.jsx";
import Earn from "./components/EARN/Earn.jsx";
import Join from "./components/Join/Join.jsx";

function App() {
  return (
    <>
      <About />
      <Tokenomics />
      <RoadMap />
      <HowToBuy />
      <Earn />
      <Join />
      <TextScroller text={"$FMAN"} />
    </>
  );
}

export default App;
