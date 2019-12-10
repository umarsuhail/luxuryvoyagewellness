import React, { Component } from "react";
import fog from "../../images/resorts/FOG.jpg";
import fogvilla from "../../images/resorts/FOG-villa.jpg";
import View from "../Resort/Components/View";
import { Link } from "react-router-dom";
import ResortLayout from "./Components/ResortLayout";
export default class HoneyMoonResort extends Component {
  render() {
    return (
      <div>
        <View
          BackgroundImage={fog}
          heading="Honey Moon Resorts"
          content={
            <ResortLayout
              image1={fogvilla}
              contentTitle="FOG RESORTS"
              content=" Ever imagined how a blend of Nature and Luxury Resort could create wonder?
                     As we pop into the Western Ghats range of mountains, we feel lighter with 
                     the most refreshing air, scenic flora and fauna and the sensual mountains.
                      Just like the heavens and the earth blend in perfect unison. Tourist flock
                       to Munnar for this. In such a journey, The Fog Munnar is the best synonym
                        for hosting. So, Stretch a little from Munnar and you will witness the perfect
                         and a charming tryst, The Fog Munnar Resorts and Spa. Experience a separate 
                         world! Nestled among the running hill slopes and the cuddling Fog, The fog 
                         Munnar attracts the visitors as it is set aloof from the hustle bustle life."
            >
              <Link to="/fog-resorts">
                <button className="btn">View More</button>
              </Link>
            </ResortLayout>
          }
        />
      </div>
    );
  }
}
