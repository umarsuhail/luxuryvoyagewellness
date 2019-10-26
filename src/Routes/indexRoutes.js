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
];

export default  IndexRoutes;
