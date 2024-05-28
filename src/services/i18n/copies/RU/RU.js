import about from "./about.json";
import tokenomics from "./tokenomics.json";
import road_map from "./road_map.json";
import earn from "./earn.json";
import header_nav from "./header_nav.json";
import how_to_buy from "./how_to_buy.json";

const RU = {
  ...about.about,
  ...tokenomics.tokenomics,
  ...road_map.road_map,
  ...earn.earn,
  ...header_nav.header,
  ...how_to_buy.how_to_buy,
};

export default RU;
