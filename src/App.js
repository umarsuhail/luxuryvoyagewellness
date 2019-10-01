import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";
import ScreenOne from './screens/screennew';

function App() {
  return (
    <div className="App">
        <ScreenOne/>

      <Helmet title="luxury voyage wellness">
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Travel, Kerala Travel, Yoga in Kerala, Kerala Tourism, Yoga, Travel, Wellness, explore kerala, luxury hotels kerala"
        />
        <meta
          property="og:title"
          content="Luxury Voyage Wellness"
        />
        <meta
          property="og:description"
          content="The best Travel parter for premium hotels and to explore kerala"
        />
        {/* <meta
          property="og:image"
          content={}
        /> */}
        <link rel="canonical" href="https://luxuryvoyagewellness.com" />

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
