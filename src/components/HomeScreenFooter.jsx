import React, { Component } from 'react'
import Modal from "../components/Modal";

export default class HomeScreenFooter extends Component {
    render() {
        return (
            <div>
                          <section id="contact" className="section-bg wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h3>Contact Us</h3>
              </div>

              <div className="row contact-info">
                <div className="col-md-4">
                  <div className="contact-address">
                    <i className="ion-ios-location-outline"></i>
                    <h3>GSTIN</h3>
                    <address> 32CZHPS3490N1ZR</address>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="contact-phone">
                    <i className="ion-ios-telephone-outline"></i>
                    <h3>Phone Number</h3>
                    <p>
                      <a>+33 6 60 08 97 02</a>
                    </p>
                    <p>
                      <a>+91 80 86 08 04 40</a>
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="contact-email">
                    <i className="ion-ios-email-outline"></i>
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:info@example.com">
                        {" "}
                        info@luxuryvoyagewellness.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <Modal></Modal>
            </div>
          </section>
            </div>
        )
    }
}
