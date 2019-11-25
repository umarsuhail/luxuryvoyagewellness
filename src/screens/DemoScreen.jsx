import React, { Component } from 'react';
import "../css/Demo.css";
import slide1 from "../images/slider1.jpg";
import slide2 from "../images/slider2.jpg";
import slide3 from "../images/slider3.jpg";
import slide4 from "../images/slider4.jpg";
import slide5 from "../images/slider5.jpg";
import treatment1 from "../images/treatment1.png";
import treatment2 from "../images/treatment5.jpg";
import treatment3 from "../images/treatment3.jpg";

class DemoScreen extends Component {
    render() {
        return (
            <div>
                <section id="">
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
                                    <h4 class="title"><a href="">Medical spa</a></h4>
                                    <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>

                                <div class="col-lg-4 box box-bg">
                                    <i class="ion-ios-stopwatch-outline"></i>
                                    <h4 class="title"><a href="">Dolor Sitema</a></h4>
                                    <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                </div>

                                <div class="col-lg-4 box">
                                    <i class="ion-ios-heart-outline"></i>
                                    <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                                    <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* ABOUT */}
                    <section id="about">
                        <div class="container">

                            <header class="section-header">
                                <h3>About Us</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </header>

                            <div class="row about-cols">

                                <div class="col-md-4 wow fadeInUp">
                                    <div class="about-col">
                                        <div class="img">
                                            <img src="img/about-mission.jpg" alt="" class="img-fluid" />
                                            <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                                        </div>
                                        <h2 class="title"><a href="#">Our Mission</a></h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
                                    </div>
                                </div>

                                <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="about-col">
                                        <div class="img">
                                            <img src="img/about-plan.jpg" alt="" class="img-fluid" />
                                            <div class="icon"><i class="ion-ios-list-outline"></i></div>
                                        </div>
                                        <h2 class="title"><a href="#">Our Plan</a></h2>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                       </p>
                                    </div>
                                </div>

                                <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="about-col">
                                        <div class="img">
                                            <img src="img/about-vision.jpg" alt="" class="img-fluid" />
                                            <div class="icon"><i class="ion-ios-eye-outline"></i></div>
                                        </div>
                                        <h2 class="title"><a href="#">Our Vision</a></h2>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                    {/*  Services Section */}

                    <section id="services">
                        <div class="container">

                            <header class="section-header wow fadeInUp">
                                <h3>Services</h3>
                                <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.</p>
                            </header>

                            <div class="row">

                                <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="icon"><i class="ion-ios-analytics-outline"></i></div>
                                    <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                                    <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>
                                <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
                                    <h4 class="title"><a href="">Dolor Sitema</a></h4>
                                    <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                </div>
                                <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="icon"><i class="ion-ios-paper-outline"></i></div>
                                    <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                                    <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                </div>
                                <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                                    <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                                    <h4 class="title"><a href="">Magni Dolores</a></h4>
                                    <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                                <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                                    <div class="icon"><i class="ion-ios-barcode-outline"></i></div>
                                    <h4 class="title"><a href="">Nemo Enim</a></h4>
                                    <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>
                                <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                                    <div class="icon"><i class="ion-ios-people-outline"></i></div>
                                    <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
                                    <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                                </div>

                            </div>

                        </div>
                    </section>
                    {/*       Call To Action Section */}

                    <section id="call-to-action" class="wow fadeIn">
                        <div class="container text-center">
                            <h3>Call To Action</h3>
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a class="cta-btn" href="#">Call To Action</a>
                        </div>
                    </section>

                    {/*       Portfolio Section */}

                    <section id="portfolio" class="section-bg" >
                        <div class="container">

                            <header class="section-header">
                                <h3 class="section-title">Our Portfolio</h3>
                            </header>

                            <div class="row">
                                <div class="col-lg-12">
                                    <ul id="portfolio-flters">
                                        <li data-filter="*" class="filter-active">All</li>
                                        <li data-filter=".filter-app">App</li>
                                        <li data-filter=".filter-card">Card</li>
                                        <li data-filter=".filter-web">Web</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="row portfolio-container">

                                <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={treatment1} class="img-fluid" alt="" />
                                            <a href="img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            <h4><a href="#">App 1</a></h4>
                                            <p>App</p>
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
                                            <h4><a href="#">Web 3</a></h4>
                                            <p>Web</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={treatment2} class="img-fluid" alt="" />
                                            <a href="img/portfolio/app2.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            <h4><a href="#">App 2</a></h4>
                                            <p>App</p>
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
                                            <h4><a href="#">Card 2</a></h4>
                                            <p>Card</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={treatment1} class="img-fluid" alt="" />
                                            <a href="img/portfolio/web2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            <h4><a href="#">Web 2</a></h4>
                                            <p>Web</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={treatment2} class="img-fluid" alt="" />
                                            <a href="img/portfolio/app3.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            <h4><a href="#">App 3</a></h4>
                                            <p>App</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={treatment3} class="img-fluid" alt="" />
                                            <a href="img/portfolio/card1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            <h4><a href="#">Card 1</a></h4>
                                            <p>Card</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={treatment3} class="img-fluid" alt="" />
                                            <a href="img/portfolio/card3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            <h4><a href="#">Card 3</a></h4>
                                            <p>Card</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="portfolio-wrap">
                                        <figure>
                                            <img src={treatment1} class="img-fluid" alt="" />
                                            <a href="img/portfolio/web1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                                            <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </figure>

                                        <div class="portfolio-info">
                                            <h4><a href="#">Web 1</a></h4>
                                            <p>Web</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                    {/* team */}
                    <section id="team">
                        <div class="container">
                            <div class="section-header wow fadeInUp">
                                <h3>Team</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                            </div>

                            <div class="row">

                                <div class="col-lg-3 col-md-6 wow fadeInUp">
                                    <div class="member">
                                        <img src="img/team-1.jpg" class="img-fluid" alt="" />
                                        <div class="member-info">
                                            <div class="member-info-content">
                                                <h4>Walter White</h4>
                                                <span>Chief Executive Officer</span>
                                                <div class="social">
                                                    <a href=""><i class="fa fa-twitter"></i></a>
                                                    <a href=""><i class="fa fa-facebook"></i></a>
                                                    <a href=""><i class="fa fa-google-plus"></i></a>
                                                    <a href=""><i class="fa fa-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="member">
                                        <img src="img/team-2.jpg" class="img-fluid" alt="" />
                                        <div class="member-info">
                                            <div class="member-info-content">
                                                <h4>Sarah Jhonson</h4>
                                                <span>Product Manager</span>
                                                <div class="social">
                                                    <a href=""><i class="fa fa-twitter"></i></a>
                                                    <a href=""><i class="fa fa-facebook"></i></a>
                                                    <a href=""><i class="fa fa-google-plus"></i></a>
                                                    <a href=""><i class="fa fa-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="member">
                                        <img src="img/team-3.jpg" class="img-fluid" alt="" />
                                        <div class="member-info">
                                            <div class="member-info-content">
                                                <h4>William Anderson</h4>
                                                <span>CTO</span>
                                                <div class="social">
                                                    <a href=""><i class="fa fa-twitter"></i></a>
                                                    <a href=""><i class="fa fa-facebook"></i></a>
                                                    <a href=""><i class="fa fa-google-plus"></i></a>
                                                    <a href=""><i class="fa fa-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div class="member">
                                        <img src="img/team-4.jpg" class="img-fluid" alt="" />
                                        <div class="member-info">
                                            <div class="member-info-content">
                                                <h4>Amanda Jepson</h4>
                                                <span>Accountant</span>
                                                <div class="social">
                                                    <a href=""><i class="fa fa-twitter"></i></a>
                                                    <a href=""><i class="fa fa-facebook"></i></a>
                                                    <a href=""><i class="fa fa-google-plus"></i></a>
                                                    <a href=""><i class="fa fa-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                    {/* contact */}

                    <section id="contact" class="section-bg wow fadeInUp">
                        <div class="container">

                            <div class="section-header">
                                <h3>Contact Us</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                            </div>

                            <div class="row contact-info">

                                <div class="col-md-4">
                                    <div class="contact-address">
                                        <i class="ion-ios-location-outline"></i>
                                        <h3>Address</h3>
                                        <address>A108 Adam Street, NY 535022, USA</address>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="contact-phone">
                                        <i class="ion-ios-telephone-outline"></i>
                                        <h3>Phone Number</h3>
                                        <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="contact-email">
                                        <i class="ion-ios-email-outline"></i>
                                        <h3>Email</h3>
                                        <p><a href="mailto:info@example.com">info@example.com</a></p>
                                    </div>
                                </div>

                            </div>

                            <div class="form">
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
                            </div>

                        </div>
                    </section>

                    {/* footer */}

                    <footer id="footer">
                        <div class="footer-top">
                            <div class="container">
                                <div class="row">

                                    <div class="col-lg-3 col-md-6 footer-info">
                                        <h3>BizPage</h3>
                                        <p>Cras fermrmentum iaculis eu non diam pha leo. Amet volutpat consequat mauris nunc congue.</p>
                                    </div>

                                    <div class="col-lg-3 col-md-6 footer-links">
                                        <h4>Useful Links</h4>
                                        <ul>
                                            <li><i class="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
                                            <li><i class="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
                                            <li><i class="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
                                            <li><i class="ion-ios-arrow-right"></i> <a href="#">Terms of service</a></li>
                                            <li><i class="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-3 col-md-6 footer-contact">
                                        <h4>Contact Us</h4>
                                        <p>
                                            A108 Adam Street <br></br>
                                            New York, NY 535022<br></br>
                                            United States <br></br>
                                            <strong>Phone:</strong> +1 5589 55488 55<br></br>
                                            <strong>Email:</strong> info@example.com<br></br>
                                        </p>

                                        <div class="social-links">
                                            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                            <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                                            <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
                                            <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                                        </div>

                                    </div>

                                    <div class="col-lg-3 col-md-6 footer-newsletter">
                                        <h4>Our Newsletter</h4>
                                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
                                        <form action="" method="post">
                                            <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </footer>


                </main>

            </div>
        );
    }
}

export default DemoScreen;