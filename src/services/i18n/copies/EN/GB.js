import about from "./about.json";
import tokenomics from "./tokenomics.json";
import road_map from "./road_map.json";
import earn from "./earn.json";

const GB = {
  ...about.about,
  ...tokenomics.tokenomics,
  ...road_map.road_map,
  ...earn.earn,
};

export default GB;
