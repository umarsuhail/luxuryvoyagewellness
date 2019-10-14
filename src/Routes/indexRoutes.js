// import Login from '../screens/login'
import Home from "../screens/screennew";
import Shawellness from "../components/Medicalspa/Shawellness";
import AnandaHimalaya from "../components/Medicalspa/AnandaHimalaya";
import Brenners from "../components/Medicalspa/Brenners";
import LeelaRaviz from "../components/Medicalspa/LeelaRaviz";


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
];

export default  IndexRoutes;
