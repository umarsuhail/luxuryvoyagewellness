// import Login from '../screens/login'
import Home from "../screens/screennew";
import Shawellness from "../components/Medicalspa/Shawellness";
import AnandaHimalaya from "../components/Medicalspa/AnandaHimalaya";
import Brenners from "../components/Medicalspa/Brenners";
import LeelaRaviz from "../components/Medicalspa/LeelaRaviz";
import AyurvedhaLearning from "../components/Learning Program/AyurvedhaLearning";
import Yoga from "../components/Learning Program/Yoga";
import Kalarippayattu from "../components/Learning Program/Kalarippayattu";
import TherpyAqua from "../components/AquaTherapy/TherpyAqua";
import Rajah from "../components/Ayurvedha/Rajah";
import YogaVillage from "../components/Ayurvedha/YogaVillage";





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
    path: "/AyurvedhaLearning",
    name: "AyurvedhaLearning",
    component: AyurvedhaLearning,
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
];

export default  IndexRoutes;
