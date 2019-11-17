// import Login from '../screens/login'
import Home from "../screens/screennew";
import Shawellness from "../components/Medicalspa/Shawellness";
import AnandaHimalaya from "../components/Medicalspa/AnandaHimalaya";
import Brenners from "../components/Medicalspa/Brenners";
import LeelaRaviz from "../components/Medicalspa/LeelaRaviz";
import AyurvedaLearning from "../components/Learning Program/AyurvedaLearning";
import Yoga from "../components/Learning Program/Yoga";
import Kalarippayattu from "../components/Learning Program/Kalarippayattu";
import TherpyAqua from "../components/AquaTherapy/TherpyAqua";
import Rajah from "../components/Ayurvedha/Rajah";
import YogaVillage from "../components/Ayurvedha/YogaVillage";
import PalaceResorts from '../components/Resort/PalaceResorts'
import FogResorts from "../components/Resort/FogResorts";
import RainForestResort from "../components/Resort/RainForestResort";
import VaithryResorts from "../components/Resort/VaithryResorts";
import Econatural from "../components/Resort/Econatural";
import HoneyMoonResort from "../components/Resort/HoneyMoonResort";
import LuxuryJungleResort from "../components/Resort/LuxuryJungleResort";
import HillResorts from "../components/Resort/HillResorts";
import KTDC from "../components/KTDC";
import AyurvedhaTreatments from "../components/Ayurvedha/AyurvedhaTreatments";
import watsu from "../components/Learning Program/Watsu";

const IndexRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    exact: true
  },
  {
    path: "/sha-wellness",
    name: "sha-wellness",
    component: Shawellness,
  },
  {
    path: "/ananda-himalaya",
    name: "ananda-himalaya",
    component: AnandaHimalaya,
  },
  {
    path: "/BRENNERS-PARK-HOTEL-AND-SPA",
    name: "BRENNERS-PARK-HOTEL-AND-SPA",
    component: Brenners,
  },
  {
    path: "/LEELA-RAVIZ",
    name: "LEELA-RAVIZ",
    component: LeelaRaviz,
  },
  {
    path: "/AyurvedaLearning",
    name: "AyurvedaLearning",
    component: AyurvedaLearning,
  },
  {
    path: "/Yoga",
    name: "Yoga",
    component: Yoga,
  },
  {
    path: "/Kalarippayattu",
    name: "Kalarippayattu",
    component: Kalarippayattu,
  },
  {
    path: "/TherpyAqua",
    name: "TherpyAqua",
    component: TherpyAqua,
  },
  {
    path: "/Rajah",
    name: "Rajah",
    component: Rajah,
  },
  {
    path: "/YogaVillage",
    name: "YogaVillage",
    component: YogaVillage,
  },
  {
    path: "/PalaceResorts",
    name: "PalaceResorts",
    component: PalaceResorts,
  },
  {
    path: "/fog-resorts",
    name: "fogresorts",
    component: FogResorts,
  },
  {
    path: "/Rain-Forest-resorts",
    name: "rainforestresorts",
    component: RainForestResort,
  },
  {
    path: "/Vaithri-resorts",
    name: "VaithryResorts",
    component: VaithryResorts,
  },
  {
    path: "/Econatural-resorts",
    name: "/Econatural",
    component: Econatural,
  },  {
    path: "/Honeymoon-resorts",
    name: "/HoneyMoonResort",
    component: HoneyMoonResort,
  },
  {
    path: "/jungle-resorts",
    name: "/LuxuryJungleResort",
    component: LuxuryJungleResort,
  },
  {
    path: "/Hill-Resorts",
    name: "/HillResorts",
    component: HillResorts,
  },
  {
    path: "/KTDC",
    name: "/KTDC",
    component: KTDC,
  },
  {
    path: "/Ayurveda",
    name: "Ayurveda",
    component: AyurvedhaTreatments,
  },
  {
    path: "/watsu",
    name: "watsu",
    component: watsu,
  },




];

export default  IndexRoutes;
