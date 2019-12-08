import React, { Component } from 'react';
import "../css/Demo.css";
import "animate.css/animate.min.css";
import logo from "../images/voyage.logo-2.png";
import ScrollAnimation from 'react-animate-on-scroll';
import slide1 from "../images/sliderimg1.jpg";
import slide2 from "../images/ktdc/slider1.jpg";
import slide3 from "../images/ktdc/slider2.jpg";
import slide4 from "../images/ktdc/slider3.jpg";
import slide5 from "../images/ktdc/slider4.jpg";
import treatment1 from "../images/treatment1.png";
import treatment5 from "../images/treatment5.jpg";
import treatment3 from "../images/treatment3.jpg";
import treatment4 from "../images/treatment4.jpg";
import ceo from "../images/sreejith.jpg";
import flight from "../images/Flight1.jpg";
import taxi from "../images/taxilambo.jpg";
import travelguide from "../images/travelguide.jpg";
import aqua from "../images/aqua/aqua.jpg";
import treatment2 from "../images/treatment2.png";
import ayurveda from "../images/ayurveda.jpg";
import anandspa1 from "../images/ananda/anandspa1.png";
import anandspa3 from "../images/ananda/anandspa3.jpg";
import Modal from '../components/Modal';
import Specialities from "../components/Specialities";
import Services from "../components/Services";





class DemoScreen extends Component {
    render() {
        return (
            <div>
                <section id="" >
                    <div class="intro-container">
                        <div id="introCarousel" class="carousel  slide carousel-fade" data-ride="carousel">

                            <ol class="carousel-indicators"></ol>

                            <div class="carousel-inner" role="listbox">

                                <div class="carousel-item active">
                                    <div class="carousel-background"><img src={slide1} alt="" /></div>
                                    {/* <div class="carousel-container">
                                        <div class="carousel-content">
                                            <h2>Family Holiday</h2>
                                             <p>Discover the best destinations in india</p>
                                            <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                                        </div>
                                    </div> */}
                                </div>

                                <div class="carousel-item">
                                    <div class="carousel-background"><img src={slide2} alt="" /></div>
                                    {/* <div class="carousel-container">
                                        <div class="carousel-content">
                                            <h2>Learn Yoga</h2>
                                            <p>Inhale the future, exhale the past</p>
                                            <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                                        </div>
                                    </div> */}
                                </div>

                                <div class="carousel-item">
                                    <div class="carousel-background"><img src={slide3} alt="" /></div>
                                    {/* <div class="carousel-container">
                                        <div class="carousel-content">
                                            <h2>An Ayurvedic Life</h2>
                                            <p>Life is not merely to be alive, but to be well</p>
                                            <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                                        </div>
                                    </div> */}
                                </div>

                                <div class="carousel-item">
                                    <div class="carousel-background"><img src={slide4} alt="" /></div>
                                    {/* <div class="carousel-container">
                                        <div class="carousel-content">
                                            <h2>Comfort and Luxury</h2>
                                            <p>Spend in The best resorts and hotels in india</p>
                                            <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                                        </div>
                                    </div> */}
                                </div>

                                <div class="carousel-item">
                                    <div class="carousel-background"><img src={slide5} alt="" /></div>
                                    {/* <div class="carousel-container">
                                        <div class="carousel-content">
                                            <h2>Explore India</h2>
                                            <p>Travel along with tradition</p>
                                            <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                                        </div>
                                    </div> */}
                                </div>

                            </div>

                            <a class="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>

                            <a class="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                                <span class="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>

                        </div>
                    </div>
                </section>

                <main id="main">


                    <section id="featured-services">
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-4 box">
                                    <i class="ion-ios-bookmarks-outline"></i>
                                    <h4 class="title"><a href="">Ayurveda</a></h4>
                                    <p class="description">Ayurveda has been carefully nurtured in Kerala for more than a thousand years. From specialised treatments 
                                    to prescribed diets, it is an integral part of our culture. Ayurveda is a way of life to us and not simply a method to cure ailments. 
                                    Our land is blessed with several herbal medicines and these have played a crucial role in ensuring the growth of Ayurveda on our shores.</p>
                                </div>

                                <div class="col-lg-4 box box-bg">
                                    <i class="ion-ios-stopwatch-outline"></i>
                                    <h4 class="title"><a href="">Rejuvenation Therapy</a></h4>
                                    <p class="description">Among Ayurveda's most significant achievements is making the body strong and preventing the contraction of diseases. This process is done via rejuvenation therapy. Here the body is flushed clean of toxins using special herbs. 
                                    This has proven to strengthen the immune system immensely and drastically improve the overall condition of the patient.</p>
                                </div>

                                <div class="col-lg-4 box">
                                    <i class="ion-ios-heart-outline"></i>
                                    <h4 class="title"><a href="">Process of Treatment</a></h4>
                                    <p class="description">Ayurveda prescribes a certain rest period at the end of the treatment. Your body needs a certain amount of time to get used to the changes it has gone through. Most practitioners will provide a certain fixed diet that is streamlined to help with the recovery process. 
                                    There are many Ayurvedic hospitals in the State alongside hotels and resorts that offer Ayurvedic treatment throughout the year.</p>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Services */}

                  <Services/>

                    {/*  Services Section */}

                    <section id="services">
                        <div class="container">

                            <header class="section-header wow fadeInUp">
                                <h3>Services</h3>
                                <p>Through Luxury voyage wellness guest we try to give discount</p>
                            </header>
                            <ScrollAnimation animateIn='bounceInUp'
                           duration={2}
                           >
                            <div class="row">
                           
                                <div id="flight" class="col-lg-4 col-md-6 box wow bounceInUp " data-wow-duration="1.4s">
                                    <div class="icon"><i class="ion-ios-analytics-outline"></i></div>
                                    <h4 class="title"><a> Flight Booking</a></h4>
                                   
                                    <div class="flight-item"  >
                                        <a href="https://api.whatsapp.com/send?phone=33660089702">
                                        <img src={flight} class="flight-img" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div id="flight" class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
                                    <h4 class="title"><a > Taxi Services</a></h4>
                                    <div class="flight-item">
                                    <a href="https://api.whatsapp.com/send?phone=33660089702">
                                    <img src={taxi} class="flight-img" alt="" /></a>
                                    </div>
                             
                                </div>
                                <div id="flight" class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="icon"><i class="ion-ios-paper-outline"></i></div>
                                    <h4 class="title"><a >Travel Guide</a></h4>
                                    <div class="flight-item">
                                    <a href="https://api.whatsapp.com/send?phone=33660089702">
                                    <img src={travelguide} class="flight-img" alt=""/></a></div> 
                                </div>
                            </div>
                            </ScrollAnimation>

                        </div>
                    </section>
                    {/*       Call To Action Section */}

                    <section id="call-to-action" class="wow fadeIn">
                        <div class="container text-center">
                            <h3>FIND US TO GET MORE OFFERS</h3>
                            {/* <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                            <a class="cta-btn" href="https://api.whatsapp.com/send?phone=33660089702">CONTACT</a>
                        </div>
                    </section>

                    {/*       GALLERY Section */}

                    <section id="portfolio" class="section-bg" >
                        <div class="container">

                            <header class="section-header">
                                <h3 class="section-title">GALLERY</h3>
                            </header>

                            <div class="row portfolio-container">

                                <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={aqua} class="img-fluid" alt="" />
                                            <a href="img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open" ></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            {/* <h4><a href="#">App 1</a></h4>
                                            <p>App</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={treatment1} class="img-fluid" alt="" />
                                            <a href="img/portfolio/web3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            {/* <h4><a href="#">Web 3</a></h4>
                                            <p>Web</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={treatment5} class="img-fluid" alt="" />
                                            <a href="img/portfolio/app2.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            {/* <h4><a href="#">App 2</a></h4>
                                            <p>App</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={treatment3} class="img-fluid" alt="" />
                                            <a href="img/portfolio/card2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            {/* <h4><a href="#">Card 2</a></h4>
                                            <p>Card</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={treatment2} class="img-fluid" alt="" />
                                            <a href="img/portfolio/web2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            {/* <h4><a href="#">Web 2</a></h4>
                                            <p>Web</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={ayurveda} class="img-fluid" alt="" />
                                            <a href="img/portfolio/app3.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            {/* <h4><a href="#">App 3</a></h4>
                                            <p>App</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={anandspa1} class="img-fluid" alt="" />
                                            <a href="img/portfolio/card1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            {/* <h4><a href="#">Card 1</a></h4>
                                            <p>Card</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={treatment4} class="img-fluid" alt="" />
                                            <a href="img/portfolio/card3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            {/* <h4><a href="#">Card 3</a></h4>
                                            <p>Card</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={anandspa3} class="img-fluid" alt="" />
                                            <a href="img/portfolio/web1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            {/* <h4><a href="#">Web 1</a></h4>
                                            <p>Web</p> */}
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

      {/* Clients Section */}
   
    {/* <section id="testimonials" class="section-bg wow fadeInUp">
      <div class="container">
        <div class="owl-carousel testimonials-carousel">
          <div class="testimonial-item">
            <img src={ceo} class="testimonial-img" alt=""/>
            <h3>Sreejith GOPI</h3>
            <h4>Ceo &amp; Founder</h4>
            <p>
            CEO of LUXURY VOYAGE WELLNESS, Based in France and Kerala, India. Sreejith started his career as a Yoga Therapist and he 
            is one of the Watsu Practitioner. He has permanent resident permit in France worked at Private luxury Yacht and different 
            Five star hotels he has visited more than 80 countries as a traveller from that he got inspired to start travel and tourism 
            and he wish to share his experiences and informations on Detox , Weight loose , Anti age, Adventure, Relax and other activities 
            to guest   </p>
          </div>
        </div>

      </div>
    </section> */}
    <Specialities />


                    {/* contact */}

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
                                        <p><a >+33 6 60 08 97 02</a></p>
                                        <p><a >+91 80 86 08 04 40</a></p>

                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="contact-email">
                                        <i class="ion-ios-email-outline"></i>
                                        <h3>Email</h3>
                                        <p><a href="mailto:info@example.com"> info@luxuryvoyagewellness.com</a></p>
                                    </div>
                                </div>

                            </div>
<Modal></Modal>
                            {/* <div class="form">
                                <div id="sendmessage">Your message has been sent. Thank you!</div>
                                <div id="errormessage"></div>
                                <form action="" method="post" role="form" class="contactForm">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                            <div class="validation"></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div class="validation"></div>
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                        <div class="validation"></div>
                                    </div>
                                    <div class="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div> */}

                        </div>
                    </section>

                    {/* footer */}

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
            <div className="col-xs-12 col-sm-6 col-md-4 text-center ">
              <h1 className="box ">
                Copyright 2019 Luxury Voyage Wellness, All Right Reserved{" "}
              </h1>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 text-center">
              <img
                className="navbar-brand footer-logo "
                src={logo}
                alt="Logo"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 box text-center">
                <a href="/"><p  style={{ marginRight: "11px" }}>Home</p></a>
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