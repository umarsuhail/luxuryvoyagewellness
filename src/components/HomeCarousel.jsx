import React, { Component } from 'react'
import slide1 from "../images/ktdc/slider1.jpg";
import slide2 from "../images/ktdc/slider5.jpg";
import slide3 from "../images/ktdc/slider2.jpg";
import slide4 from "../images/ktdc/slider3.jpg";
import slide5 from "../images/ktdc/slider4.jpg";

export default class HomeCarousel extends Component {
    render() {
        return (
            <div>
                              <section id="" >
                    <div className="intro-container">
                        <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

                            <ol className="carousel-indicators"></ol>

                            <div className="carousel-inner" role="listbox">

                                <div className="carousel-item active">
                                    <div className="carousel-background"><img src={slide1} alt="" /></div>
                                </div>

                                <div className="carousel-item">
                                    <div className="carousel-background"><img src={slide2} alt="" /></div>
                                </div>

                                <div className="carousel-item">
                                    <div className="carousel-background"><img src={slide3} alt="" /></div>
                                </div>

                                <div className="carousel-item">
                                    <div className="carousel-background"><img src={slide4} alt="" /></div>
                                </div>

                                <div className="carousel-item">
                                    <div className="carousel-background"><img src={slide5} alt="" /></div>
                                </div>

                            </div>

                            <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>

                            <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
