import React, { Component } from 'react'
import Modal from "../components/Modal";

export default class HomeScreenFooter extends Component {
    render() {
        return (
            <div>
                          <section id="contact" class="section-bg wow fadeInUp">
            <div class="container">
              <div class="section-header">
                <h3>Contact Us</h3>
              </div>

              <div class="row contact-info">
                <div class="col-md-4">
                  <div class="contact-address">
                    <i class="ion-ios-location-outline"></i>
                    <h3>GSTIN</h3>
                    <address> 32CZHPS3490N1ZR</address>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="contact-phone">
                    <i class="ion-ios-telephone-outline"></i>
                    <h3>Phone Number</h3>
                    <p>
                      <a>+33 6 60 08 97 02</a>
                    </p>
                    <p>
                      <a>+91 80 86 08 04 40</a>
                    </p>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="contact-email">
                    <i class="ion-ios-email-outline"></i>
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
