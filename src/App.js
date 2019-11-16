import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";
import ScreenOne from "./screens/screennew";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import IndexRoutes from "./Routes/indexRoutes";
import MetaTags from "react-meta-tags";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {IndexRoutes.map((prop, key) => {
          return (
            <Route
              exact={prop.path}
              component={prop.component}
              path={prop.path}
              key={key}
            ></Route>
          );
        })}
      </Switch>


      <MetaTags>
        <title>Page 1</title>
        <meta
          name="description"
          content="Travel, Kerala Travel, Yoga in Kerala, Kerala Tourism, Yoga, Travel, Wellness, explore kerala, luxury hotels kerala"
        />
        <meta property="og:title" content="Luxury Voyage Wellness" />
        {/* <meta property="og:image" content="path/to/image.jpg" /> */}
      </MetaTags>
      <Helmet title="luxury voyage wellness">
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Travel, Kerala Travel, Yoga in Kerala, Kerala Tourism, Yoga, Travel, Wellness, explore kerala, luxury hotels kerala"
        />
        <meta property="og:title" content="Luxury Voyage Wellness" />
        <meta
          property="og:description"
          content="The best Travel parter for premium hotels and to explore kerala"
        />
        {/* <meta
          property="og:image"
          content={}
        /> */}
        <link rel="canonical" href="https://www.luxuryvoyagewellness.com" />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Helmet>
    </div>
  );
}

export default App;
