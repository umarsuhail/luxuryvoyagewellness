// import Login from '../screens/login'
import Home from "../screens/screennew";
import Shawellness from "../components/Medicalspa/Shawellness";
const IndexRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    exact:true
  },
  {
    path: "/sha-wellness",
    name: "sha-wellness",
    component: Shawellness,
    exact:true

  }
];

export { IndexRoutes };
