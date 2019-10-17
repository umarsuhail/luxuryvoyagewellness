import React, { Component } from "react";
import Flight from "../images/Flight.jpg";
import Taxi from "../images/TAXI.jpg";
import Guide from "../images/travel.jpg";
import '../css/Specialities.scss'
import imggal2 from "../images/imggal2.jpg";
import imggal3 from "../images/imggal3.jpg";
import imggal4 from "../images/imggal4.jpg";
import imggal5 from "../images/imggal5.jpg";
import imggal6 from "../images/imggal6.jpg";
import imggal7 from "../images/imggal7.jpg";
import imggal8 from "../images/imggal8.jpg";
export default class Specialities extends Component {
  render() {
    return (
      <div>
          <h6 style={{margin:'30px auto'}}>Through Luxury voyage wellness guest we try to give discount</h6>

        <div className="container specialities">
          <div className="col-sm-12 card" >
            <img className="card-img-top" src={Flight} alt="Card image cap" />
            <div className="card-body">
              <a href="#" className="btn btn-primary">
               Flight Booking
              </a>
            </div>
          </div>
          <div className="col-sm-12 card" >
            <img className="card-img-top" src={Taxi} alt="Card image cap" />
            <div className="card-body">
              <a href="#" className="btn btn-primary">
              Taxi services
              </a>
            </div>
          </div>
          <div className="col-sm-12 card">
            <img className="card-img-top" src={Guide} alt="Card image cap" />
            <div className="card-body">
              <a href="#" className="btn btn-primary">
              Travel Guide
              </a>
            </div>
          </div>
        </div>
        <div className="tz-gallery container gallery-container">
          <h3> BIO</h3>

          <p>
            <strong>Sreejith Gopi</strong> (Yoga Acharya) CEO of LUXURY VOYAGE
            WELLNESS Based in France and Kerala ,India Sreejith start his career
            as a yoga Instructor He has permanent resident permits in France
            Sreejith is working in Privet luxury yacht and he visited more than
            80 countries as a traveller he got inspired to start travel and
            tourism and he want to share his experience and information where
            people can detox , weight loose , anti age, adventure and relax
          </p>
        </div>
      </div>
    );
  }
}
