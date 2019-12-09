import React, { Component } from "react";
import image1 from "../images/ananda/ananda1.jpg";
import BRENNERS from "../images/BRENNERS/bren1.jpg";
import leela from "../images/leela/leela1.jpg";
import PalaceExterior from "../images/palace/PalaceExeterior.jpg";
import sha1 from "../images/sha-wellness/sha1.jpg";
import treatment5 from "../images/treatment5.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import hotel from "../images/hotel.png";

export default class Services extends Component {
  render() {
    return (
      <div>
        <section id="featured-services">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-12 box">
                <i className="ion-ios-bookmarks-outline"></i>
                <h4 className="title">
                  <a href="">Ayurveda</a>
                </h4>
                <p className="description">
                  Ayurveda has been carefully nurtured in Kerala for more than a
                  thousand years. From specialised treatments to prescribed
                  diets, it is an integral part of our culture. Ayurveda is a
                  way of life to us and not simply a method to cure ailments.
                  Our land is blessed with several herbal medicines and these
                  have played a crucial role in ensuring the growth of Ayurveda
                  on our shores.
                </p>
              </div>

              <div className="col-lg-4 col-sm-12 box box-bg">
                <i className="ion-ios-stopwatch-outline"></i>
                <h4 className="title">
                  <a href="">Rejuvenation Therapy</a>
                </h4>
                <p className="description">
                  Among Ayurveda's most significant achievements is making the
                  body strong and preventing the contraction of diseases. This
                  process is done via rejuvenation therapy. Here the body is
                  flushed clean of toxins using special herbs. This has proven
                  to strengthen the immune system immensely and drastically
                  improve the overall condition of the patient.
                </p>
              </div>

              <div className="col-lg-4 col-sm-12 box">
                <i className="ion-ios-heart-outline"></i>
                <h4 className="title">
                  <a href="">Process of Treatment</a>
                </h4>
                <p className="description">
                  Ayurveda prescribes a certain rest period at the end of the
                  treatment. Your body needs a certain amount of time to get
                  used to the changes it has gone through. Most practitioners
                  will provide a certain fixed diet that is streamlined to help
                  with the recovery process. There are many Ayurvedic hospitals
                  in the State alongside hotels and resorts that offer Ayurvedic
                  treatment throughout the year.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3>SERVICES</h3>
            </header>
            <ScrollAnimation animateIn="fadeIn" duration={2}>
              <div className="row about-cols">
                <div className="col-md-4 col-sm-12 wow fadeInUp">
                  <div className="about-col">
                    <div className="img">
                      <img src={sha1} alt="" className="img-fluid" />
                      <div className="icon">
                        <img
                          style={{ maxWidth: "35px" }}
                          className="ion-ios-speedometer-outline"
                          src={hotel}
                        ></img>
                      </div>
                    </div>
                    <h2 className="title">
                      <a href="/sha-wellness">SHA WELLNESS</a>
                    </h2>
                    <p>
                      Our mission at SHA, is that you enjoy and have an
                      unforgettable stay, as well as to produce a positive,
                      substantial and lasting change in your health and
                      wellness, so that you feel a state of complete balance.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="about-col">
                    <div className="img">
                      <img src={image1} alt="" className="img-fluid" />
                      <div className="icon">
                        <img
                          style={{ maxWidth: "35px" }}
                          className="ion-ios-speedometer-outline"
                          src={hotel}
                        ></img>
                      </div>
                    </div>
                    <h2 className="title">
                      <a href="/ananda-himalaya">ANANDA HIMALAYA</a>
                    </h2>
                    <p>
                      Ananda is an award-winning luxury destination spa resort
                      in India situated at the Himalayan foothills in Northern
                      India. Ananda is surrounded by graceful Sal forests and
                      overlooks the spiritual town of Rishikesh and the Ganges
                      river valley.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="about-col">
                    <div className="img">
                      <img src={BRENNERS} alt="" className="img-fluid" />
                      <div className="icon">
                        <img
                          style={{ maxWidth: "35px" }}
                          className="ion-ios-speedometer-outline"
                          src={hotel}
                        ></img>
                      </div>
                    </div>
                    <h2 className="title">
                      <a href="/BRENNERS-PARK-HOTEL-AND-SPA">
                        BRENNERS PARK-HOTEL AND SPA
                      </a>
                    </h2>
                    <p>
                      Brenners Park-Hotel & Spa has been a place of relaxation
                      and diversion for the travelling elite since 1872. Here
                      guests can enjoy all that Baden-Baden
                    </p>
                  </div>
                </div>
              </div>

              <div className="row about-cols">
                <div className="col-md-4 col-sm-12 wow fadeInUp">
                  <div className="about-col">
                    <div className="img">
                      <img src={leela} alt="" className="img-fluid" />
                      <div className="icon">
                        <img
                          style={{ maxWidth: "35px" }}
                          className="ion-ios-speedometer-outline"
                          src={hotel}
                        ></img>
                      </div>
                    </div>
                    <h2 className="title">
                      <a href="/LEELA-RAVIZ">LEELA RAVIZ</a>
                    </h2>
                    <p>
                      The Raviz Group has set out on a course to present the
                      traditions, culture and hospitality of Kerala to the
                      visiting traveler on a platter.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="about-col">
                    <div className="img">
                      <img src={PalaceExterior} alt="" className="img-fluid" />
                      <div className="icon">
                        <img
                          style={{ maxWidth: "35px" }}
                          className="ion-ios-speedometer-outline"
                          src={hotel}
                        ></img>
                      </div>
                    </div>
                    <h2 className="title">
                      <a href="/PalaceResorts"> PALACE RESORTS</a>
                    </h2>
                    <p>
                      Our onsite amenities include indoor and outdoor
                      whirlpools, a large oceanfront outdoor pool, exercise
                      room, sauna, seasonal lounge, and much, much more. Our
                      convenient location gives you and your family quick and
                      easy access to all the fun and excitement

                    </p>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="about-col">
                    <div className="img">
                      <img src={treatment5} alt="" className="img-fluid" />
                      <div className="icon">
                        <img
                          style={{ maxWidth: "35px" }}
                          className="ion-ios-speedometer-outline"
                          src={hotel}
                        ></img>
                      </div>
                    </div>
                    <h2 className="title">
                      <a href="/Ayurveda"> AYURVEDA TREATMENTS</a>
                    </h2>
                    <p>
                      Ayurveda has been carefully nurtured in Kerala for more
                      than a thousand years. From specialised treatments to
                      prescribed diets, it is an integral part of our culture.
                      Ayurveda is a way of life to us and not simply a method to
                      cure ailments.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    );
  }
}
