import React, { Component } from "react";
// import Taxi from "../images/TAXI.jpg";
import "../css/Specialities.scss";
import sreejith from "../images/sreejith.jpg";
import Particles from "react-particles-js";

export default class Specialities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactUs: false
    };
  }
  openModal = data => {
    this.setState({
      contactUs: !this.state.cntactUs
    });
  };
  closeModal = () => {
    this.setState({
      contactUs: false
    });
  };
  render() {
    return (
      <div>
        <div
          className="card-border specialities-parent"
          style={{ background: "#f2f2f2" }}
        >
          <div className="card-body">
            <div
              className="specialities-data"
              style={{
                padding: 20,
                margin: 20,
                borderRadius: 20,
                position: "relative",
                border: "1px solid 1px solid rgb(227, 224, 224)"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  overflow: "hidden",
                  maxHeight: "80vh"
                }}
              >
                <Particles
                  params={{
                    particles: {
                      size: {
                        value: 4
                      },
                      number: {
                        value: 80,
                        density: {
                          enable: true,
                          value_area: 800
                        }
                      },
                      color: {
                        value: "#a1a1a1"
                      },
                      line_linked: {
                        shadow: {
                          enable: true,
                          color: "#a1a1a1",
                          blur: 1
                        }
                      }
                    }
                  }}
                />
              </div>

              <div className="row" style={{ padding: "0 50px" }}>
                <div
                  className="  col-sm-12 col-md-4 col-lg-12 "
                  style={{
                    alignSelf: "center"
                  }}
                >
                  <img
                    src={sreejith}
                    alt="hotel-image"
                    alt=""
                    style={{
                      width: "335px",
                      borderRadius: "50%",

                      border: "2px solid #e3e3e3"
                    }}
                    className="hover-zoomin"
                  />
                </div>
              </div>
              <div style={{ padding: "80px 50px 20px 0" }}>
                <h1 style={{ textAlign: "center" }}>Sreejith GOPI</h1>
              </div>
              <div className="row specialities-text">
                <div
                  className="text-center col-sm-12 col-md-8 col-lg-12 "
                  style={{
                    alignSelf: "center"
                  }}
                >
                  <br />
                  <p style={{ lineHeight: "2.5" }}>
                    CEO of LUXURY VOYAGE WELLNESS, Based in France and Kerala,
                    India. Sreejith started his career as a Yoga Therapist and
                    he is one of the Watsu Practitioner. He has permanent
                    resident permit in France worked at Private luxury Yacht and
                    different Five star hotels he has visited more than 80
                    countries as a traveller from that he got inspired to start
                    travel and tourism and he wish to share his experiences and
                    informations on Detox , Weight loose , Anti age, Adventure,
                    Relax and other activities to guest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
