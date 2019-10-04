// import Login from '../screens/login'
import Home from "../screens/screennew";
import Shawellness from "../components/Medicalspa/Shawellness";
import AnandaHimalaya from "../components/Medicalspa/AnandaHimalaya";
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
    path: "/sha-wellness",
    name: "sha-wellness",
    component: Shawellness,
    exact: true
  },
  {
    path: "/sha-wellness",
    name: "sha-wellness",
    component: Shawellness,
    exact: true
  },
  {
    path: "/sha-wellness",
    name: "sha-wellness",
    component: Shawellness,
    exact: true
  }
];

export { IndexRoutes };
