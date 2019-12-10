import React, { Component } from "react";
import "../css/Demo.css";
import "animate.css/animate.min.css";
import logo from "../images/voyage.png";
import Specialities from "../components/Specialities";
import Services from "../components/Services";
import HomeCarousel from "../components/HomeCarousel";
import ServicesAnimation from "../components/ServicesAnimation";
import Portfolio from "../components/Portfolio";
import HomeScreenFooter from "../components/HomeScreenFooter";
import LazyLoad from "react-lazyload";
class DemoScreen extends Component {
  render() {
    return (
      <div>
        <HomeCarousel />
        <main id="main">
          {/* <LazyLoad height={200} offset={20} once> */}
            <Services />
            <ServicesAnimation />
          {/* </LazyLoad> */}

          <section id="call-to-action" className="wow fadeIn">
            <div className="container text-center">
              <h3>FIND US TO GET MORE OFFERS</h3>
              <a
                className="cta-btn"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=33660089702"
              >
                CONTACT
              </a>
            </div>
          </section>
          {/* <LazyLoad height={200} once> */}
            <Portfolio />
          {/* </LazyLoad> */}

          <Specialities />

          <HomeScreenFooter />
          <div>
            <div
              className="row footer-text"
              style={{
                width: "996px",
                padding: "15px",
                width: "100%",
                backgroundColor: "#212121"
              }}
            >
              <div className="col-xs-12 col-sm-6 col-lg-4 text-center ">
                <span className="box ">
                  Copyright 2019 Luxury Voyage Wellness, All Right Reserved{" "}
                </span>
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-4 text-center">
                <img
                  className="navbar-brand footer-logo "
                  src={logo}
                  alt="Logo"
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-4 box text-center">
                <a href="/">
                  <p style={{ marginRight: "11px" }}>Home</p>
                </a>
                <p style={{ marginRight: "11px" }}>Privacy Policy</p>
                <p style={{ marginRight: "11px" }}>Terms of Use</p>
              </div>
            </div>
          </div>
        </main>
      
      </div>
    );
  }
}

export default DemoScreen;
