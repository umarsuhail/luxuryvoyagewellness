import React, { Component } from "react";
import BackgroundImage from "../../images/forest.jpg";
import View from "./Components/View";
import wildplanet from "../../images/resorts/wildplanet.jpg";
import ResortLayout from "./Components/ResortLayout";
import { Link } from "react-router-dom";
export default class LuxuryJungleResort extends Component {
  render() {
    return (
      <div>
        <View
          heading="Luxury Jungle Resorts"
          BackgroundImage={BackgroundImage}
        />

        <ResortLayout
          image1={wildplanet}
          contentTitle="Wild Planet Resorts"
          content="Welcome to Wild Planet-A fairy tale Luxury Jungle Resort, on the edge of the world. 
          This unique tropical retreat is a hideaway inside the jungle, only accessible to it’s privileged guests. 
          At Wild Planet uncompromising eco-adventure travel meets an unexpected oasis of urban comfort, with breathtaking 
          views of the surrounding forested mountains of the western ghats."
        >
          <Link to="/WildPlanet">
            <button className="btn">View More</button>
          </Link>
        </ResortLayout>
      </div>
    );
  }
}
