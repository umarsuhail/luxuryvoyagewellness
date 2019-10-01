import React, { Component } from "react";
import logo from "../images/voyage.logo-2.png";
import slide1 from "../images/slider1.jpg";
import slide2 from "../images/slider2.jpg";
import slide3 from "../images/slider3.jpg";
import slide4 from "../images/slider4.jpg";
import slide5 from "../images/slider5.jpg";
import icon from "../images/icon.png";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import Specialities from "../components/Specialities";
import Navbar from "../components/Navbar";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "../style.css";
import Cards from "../components/Cards";
import AnmimatedText from "../components/AnimatedText";
import Modal from "../components/Modal";
class ScreenOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  
  ModalOpen = () => {
    this.setState({
      visible: !this.state.visible
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div id="demo" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="overlay"></div>
              <img
                src={slide1}
                alt="Los Angeles"
                width="1100"
                height="500"
              ></img>
              <div
                className="text-wrap col-8 "
                style={{ flexDirection: "column" }}
              >
                <AnmimatedText
                  openModal={this.ModalOpen}
                  HeaderText="Discover the best destinations in india"
                  BigHeader="Family Holiday"
                />
              </div>
            </div>
            <div class="carousel-item">
              <div className="overlay"></div>
              <img src={slide2} alt="Chicago" width="1100" height="500" />
              <div
                className="text-wrap col-8 "
                style={{ flexDirection: "column" }}
              >
                <AnmimatedText
                  openModal={this.ModalOpen}
                  HeaderText="Inhale the future, exhale the past"
                  BigHeader="Learn Yoga"
                />
              </div>
            </div>
            <div class="carousel-item">
              <div className="overlay"></div>
              <img src={slide3} alt="New York" width="1100" height="500" />
              <div
                className="text-wrap col-8 "
                style={{ flexDirection: "column" }}
              >
                <AnmimatedText
                  openModal={this.ModalOpen}
                  HeaderText="Life is not merely to be alive, but to be well"
                  BigHeader="An Ayurvedic Life"
                />
              </div>
            </div>
            <div class="carousel-item">
              <div className="overlay"></div>
              <img src={slide4} alt="New York" width="1100" height="500" />
              <div
                className="text-wrap col-8 "
                style={{ flexDirection: "column" }}
              >
                <AnmimatedText
                  openModal={this.ModalOpen}
                  HeaderText="Spend in The best resorts and hotels in india"
                  BigHeader="Comfort and Luxury"
                />
              </div>
            </div>
            <div class="carousel-item">
              <div className="overlay"></div>
              <img src={slide5} alt="New York" width="1100" height="500" />
              <div
                className="text-wrap col-8 "
                style={{ flexDirection: "column" }}
              >
                <AnmimatedText
                  openModal={this.ModalOpen}
                  HeaderText="Travel along with tradition"
                  BigHeader="Explore India"
                />
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
        {this.state.visible && <Modal modalHandle={this.ModalOpen}/>}
        <div class="container-fluid " style={{ backgroundColor: "white" }}>
          <div className="col-md-12 col-sm-12 col-lg-12 clear-fix row">
            <div class="tzElement_Services col-sm-12 col-md-3 col-lg-3 ">
              <div class="icon">
                <img src={icon} alt=""></img>
              </div>
              <span class="title"> 500+ Destinations </span>
              <p class="descriptions">
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim.{" "}
              </p>
            </div>
            <div class="tzElement_Services col-sm-12 col-md-3 col-lg-3  ">
              <div class="icon">
                <img src={icon1} alt=""></img>
              </div>
              <span class="title">Discover </span>
              <p class="descriptions">
                Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet.{" "}
              </p>
            </div>
            <div class="tzElement_Services col-sm-12 col-md-3 col-lg-3  ">
              <div class="icon">
                <img src={icon2} alt=""></img>
              </div>
              <span class="title"> Book Your Trip </span>
              <p class="descriptions">
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim.{" "}
              </p>
            </div>
            <div class="tzElement_Services col-sm-12 col-md-3 col-lg-3  ">
              <div class="icon">
                <img src={icon3} alt=""></img>
              </div>
              <span class="title"> Global Support </span>
              <p class="descriptions">
                Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet.{" "}
              </p>
            </div>
          </div>
        </div>
        <Cards />

        <Specialities />

        <div class="container-fluid " style={{ backgroundColor: "#2a2a2a" }}>
          <div class="container">
            <div
              class="row"
              style={{ color: "white", width: "996px", padding: "15px" }}
            >
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div>
                  <h5 className="box">VOYAGE WELLNESS TOURISM</h5>
                  <p className="footertext">Get to know us</p>
                  <p className="footertext">Packages</p>
                  <p className="footertext">Resort</p>
                  <p className="footertext">Ayurvedha</p>
                  <p className="footertext">Yoga</p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div>
                  <h5 className="box">OTHER LINKS</h5>
                  <p className="footertext">Angel Figurines</p>
                  <p className="footertext">Home Decor</p>
                  <p className="footertext">Mugs</p>
                  <p className="footertext">Pet Lover</p>
                  <p className="footertext">Hnadbags & Jewelry</p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div>
                  <h5 className="box">PLEASE HELP ME</h5>
                  <p className="footertext">Contact</p>
                  <p className="footertext">FAQ</p>
                  <p className="footertext">Store Locator</p>
                  <p className="footertext">New Users</p>
                  <p className="footertext">Order Status</p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div>
                  <h5 className="box">ABOUT VOYAGE WELLNESS</h5>
                  <p className="footertext">
                    Address : Kakkathuruthy, Edathirinji P.O, Kerala-680122,
                    India.
                  </p>
                  <p className="footertext">Phone : 0033660089702 </p>
                  <p className="footertext">info@luxuryvoyagewellness.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <div
            class="row footer-text"
            style={{
              width: "996px",
              padding: "15px",
              width: "100%",
              backgroundColor: "#212121"
            }}
          >
            <div class="col-xs-12 col-sm-6 col-md-4 text-center ">
              <h1 className="box ">
                Copyright 2019 Voyage Wellness, All Right Reserved{" "}
              </h1>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 text-center">
              <img
                className="navbar-brand footer-logo "
                src={logo}
                alt="Logo"
              />
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 box text-center">
              <p style={{ marginRight: "11px" }}>Home</p>
              <p style={{ marginRight: "11px" }}>Privacy Policy</p>
              <p style={{ marginRight: "11px" }}>Terms of Use</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScreenOne;
