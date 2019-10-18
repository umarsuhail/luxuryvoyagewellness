import React, { Component } from "react";
import View from "./Components/View";
import image1 from "../../images/BRENNERS/bren1.jpg";
import image2 from "../../images/BRENNERS/bren2.jpg";
import image3 from "../../images/BRENNERS/bren3.jpg";
import image4 from "../../images/BRENNERS/bren4.jpg";
import Programs from "./Components/Programs";
import brenspa1 from "../../images/BRENNERS/brenspa1.jpg";
import brenspa2 from "../../images/BRENNERS/brenspa2.jpg";
import brenspa3 from "../../images/BRENNERS/brenspa3.jpg";
import brenspa4 from "../../images/BRENNERS/brenspa4.jpg";
import hotel1 from "../../images/BRENNERS/hotel1.jpg";
import hotel2 from "../../images/BRENNERS/hotel2.jpg";
import hotel3 from "../../images/BRENNERS/hotel3.jpg";
import hotel4 from "../../images/BRENNERS/hotel4.jpg";
import hotel5 from "../../images/BRENNERS/hotel5.jpg";

import HotelDetails from "./Components/HotelDetails";
const NavData1 = [" Spa & Medical Care", "Meetings & Events"];
const NavItem = [
  "Superior Single Room",
  "Deluxe Single Room",
  "Superior Double Room",
  "Deluxe Double Room",
  "Classic Double Room"
];

export default class Brenners extends Component {
  render() {
    return (
      <div>
        <View
          heading="BRENNERS PARK-HOTEL AND SPA"
          videoID="rbIOJOHuFNo"
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          programs={
            <Programs
              NavData={NavData1}
              tab1Content={
                <div>
                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                      <h3 className="text-center">
                        Medical Care in luxurious surroundings
                      </h3>
                      <p>
                        Villa Stéphanie is directly connected to “Haus Julius”,
                        a 1700-square-metre mansion designed to offer unique and
                        exclusive medical care to Brenners guests.
                      </p>
                    </div>
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={brenspa1}
                    ></img>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-left"
                      src={brenspa2}
                    ></img>
                    <div className="col-lg-6 col-md-6 col-sm-12 float-right">
                      <h3>Spa and Fitness</h3>
                      <p>
                        Covering an area of 5000 square metres, an entire house
                        has been dedicated to the world of spa. Stretching over
                        five floors, it comprises a 500-square-metre sauna,
                        plunge pool, private gym, hamam and a ladies sauna.
                        Inspiringly designed treatment rooms overlooks the
                        gardens.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={brenspa3}
                    ></img>
                    <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                      <h3 className="text-center">
                        Weight Loss, Detox and Nutrition
                      </h3>
                      <p>
                        Good nutrition is another priority. Guests can eat to
                        reboot their systems and really feel able to improve
                        their wellbeing in one of Europe’s most beautiful and
                        tranquil areas with the support of a highly professional
                        expert team.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={brenspa4}
                    ></img>
                    <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                      <h3 className="text-center">Pool and plunge pool</h3>
                      <p>
                        Our peaceful swimming pool is illuminatingly fresh with
                        daylight. On warm summer days we open the doors to our
                        private park and guests can relax on the terrace, with
                        the soothing sound of the River Oos flowing by. This is
                        the Brenners’ lifestyle: at one with nature.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={image1}
                    ></img>
                    <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                      <h3 className="text-center">An impressive legacy</h3>
                      <p>
                        Over the past 145 years, Brenners Park-Hotel & Spa has
                        played host to many of the world’s leading politicians
                        as well as being the venue of choice for a number of
                        highly prestigious gatherings. Whatever type of event
                        you’re planning, from elegant weddings to high-level
                        business meetings, at Brenners you’ll find the perfect
                        space for it.
                      </p>
                    </div>
                  </div>
                </div>
              }
            ></Programs>
          }
          Hotels={
            <HotelDetails
              NavItems={NavItem}
              tab1Content={
                <div>
                  <img src={hotel1} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>
                        The Superior Single rooms are ideal for the single
                        traveller.
                      </strong>
                    </h4>
                  </div>
                  <h6>
                    The Superior Single rooms are ideal for the single
                    traveller. It offers a view overlooking the residential
                    villas of Baden-Baden.
                  </h6>
                </div>
              }
              tab2Content={
                <div>
                  <img src={hotel2} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>
                        The Deluxe Single rooms are ideal for the single
                        traveller.
                      </strong>
                    </h4>
                  </div>
                  <h6>
                    The Deluxe Single rooms are ideal for the single traveller.
                    All offer a view overlooking the park and some offer a small
                    balcony.
                  </h6>
                </div>
              }
              tab3Content={
                <div>
                  <img src={hotel3} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>Superior rooms with balconies</strong>
                    </h4>
                  </div>
                  <h6>
                    Our six Superior Rooms have a generous living area. All
                    double Superior Rooms have views across the park onto the
                    historic Lichtentaler Allee. Enjoy a private breakfast on
                    your own balcony in the crisp morning air with the
                    delightful sound of the River Oos below.
                  </h6>
                </div>
              }
              tab4Content={
                <div>
                  <img src={hotel4} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>Our largest room category</strong>
                    </h4>
                  </div>
                  <h6>
                    Our Deluxe Rooms are exceptionally airy and relaxed spaces,
                    especially with the French doors open onto your balcony for
                    views around our private park, the grand architecture and
                    gently swaying trees. A particularly personal approach was
                    taken in designing the interiors to ensure individuality;
                    they have deeply comfortable furnishings and all have an
                    inviting lounge corner.
                  </h6>
                </div>
              }
              tab5Content={
                <div>
                  <img src={hotel5} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>Classic rooms finished with elegance</strong>
                    </h4>
                  </div>
                  <h6>
                    Finished to the exceptionally high standards Brenners Park
                    Hotel & Spa has been synonymous with for 140 years, Classic
                    Rooms offer all the modern comforts that today’s first class
                    traveller expects. All rooms have balconies overlooking the
                    park or the elegant Biedermeier-style villas of Baden-Baden.
                  </h6>
                </div>
              }
            />
          }
        >
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <p>
                      Brenners Park-Hotel & Spa has been a place of relaxation
                      and diversion for the travelling elite since 1872. Here
                      guests can enjoy all that Baden-Baden is renowned for with
                      one of the most advanced spas in Europe, offering
                      luxurious therapy and cures while surrounded by refreshing
                      natural parkland and high culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </View>
      </div>
    );
  }
}
