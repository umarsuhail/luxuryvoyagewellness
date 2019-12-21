import React, { Component } from "react";
import "./home.scss";
import Cards from "./Cards.jsx";
import AranyaImage from "../../images/ktdc/images/aranya-nivas-banner.jpg";
import BolgattyImage from "../../images/ktdc/images/bolgatty-palace-banner.jpg";
import GardenHouseImage from "../../images/ktdc/images/garden-house.jpg";


export default class HomeLayuout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="wrapper row" style={{ paddingTop: 100,margin:0 }}>
        <div className="container">
          <div className="row">
            <Cards
              image={AranyaImage}
              heading="Aranya Nivas"
              content="Aranya Nivas by the side of the placid Periyar Lake is a veritable destination for wildlife enthusiasts and eco-tourists. Located inside the Periyar Wildlife Sanctuary, this is an authentic jungle lodge. This was opened by Pandit Jawaharlal Nehru, the first Prime Minister of India.

"
            ></Cards>
            <Cards
              image={BolgattyImage}
              heading="Bolgatty Cochin palace and resorts"
              content="Amid this picturesque island of Bolgatty is the beautiful Bolgatty Palace, the exclusive mansion with four palatial rooms, provides the travelers with world class amenities and wonderful holidaying options. Originally built by Dutch traders in 1744 and it is the oldest of its kind that exists outside Holland.

"
            ></Cards>
            <Cards
              image={GardenHouseImage}
              heading="Garden House Malampuzha"
              content="Garden House at Malampuzha, located on a hillock overlooks the Malampuzha dam and offers a majestic view of the Western Ghats.



"
            ></Cards>
          </div>
        </div>
      </section>
    );
  }
}
