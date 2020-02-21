import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import flight from "../images/Flight1.jpg";
import taxi from "../images/taxilambo.jpg";
import travelguide from "../images/travelguide.jpg";
export default class ServicesAnimation extends Component {
    render() {
        return (
            <div>
                   <section id="services">
                        <div className="container">

                            <header className="section-header wow fadeInUp">
                                <h3>Services</h3>
                                <p>Through Luxury voyage wellness guest we try to give discount</p>
                            </header>
                            {/* <ScrollAnimation animateIn='fadeInRight'
                           duration={1}
                           > */}
                            <div className="row">
                           
                                <div id="flight" className="col-lg-4  box wow bounceInUp " data-wow-duration="1.4s">
                                    <div className="icon"><i className="ion-ios-analytics-outline"></i></div>
                                    <h4 className="title"><a> Flight Booking</a></h4>
                                   
                                    <div className="flight-item"  >
                                        <a href="https://api.whatsapp.com/send?phone=33660089702">
                                        <img src={flight} className="flight-img" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div id="flight" className="col-lg-4  box wow bounceInUp" data-wow-duration="1.4s">
                                    <div className="icon"><i className="ion-ios-bookmarks-outline"></i></div>
                                    <h4 className="title"><a > Taxi Services</a></h4>
                                    <div className="flight-item">
                                    <a href="https://api.whatsapp.com/send?phone=33660089702">
                                    <img src={taxi} className="flight-img" alt="" /></a>
                                    </div>
                             
                                </div>
                                <div id="flight" className="col-lg-4  box wow bounceInUp" data-wow-duration="1.4s">
                                    <div className="icon"><i className="ion-ios-paper-outline"></i></div>
                                    <h4 className="title"><a >Travel Guide</a></h4>
                                    <div className="flight-item">
                                    <a href="https://api.whatsapp.com/send?phone=33660089702">
                                    <img src={travelguide} className="flight-img" alt=""/></a></div> 
                                </div>
                            </div>
                            {/* </ScrollAnimation> */}

                        </div>
                    </section>
            </div>
        )
    }
}
