import React, { Component } from 'react';
import logo from './imageone/voyage.logo-2.png';
import slide1 from './imageone/slider1.jpg';
import slide2 from './imageone/slider2.jpg';
import slide3 from './imageone/slider3.jpg';
import slide4 from './imageone/slider4.jpg';
import slide5 from './imageone/slider5.jpg';
import icon from './imageone/icon.png';
import icon1 from './imageone/icon1.png';
import icon2 from './imageone/icon2.png';
import icon3 from './imageone/icon3.png';
import card1 from './imageone/card1.jpg';
import card2 from './imageone/card2.jpg';
import card3 from './imageone/card3.jpg';
import card4 from './imageone/card4.jpg';
import card5 from './imageone/card5.jpg';
import card6 from './imageone/card6.jpg';
import card7 from './imageone/card7.jpg';
import card8 from './imageone/card8.jpg';
import imggal1 from './imageone/imggal1.jpg';
import imggal2 from './imageone/imggal2.jpg';
import imggal3 from './imageone/imggal3.jpg';
import imggal4 from './imageone/imggal4.jpg';
import imggal5 from './imageone/imggal5.jpg';
import imggal6 from './imageone/imggal6.jpg';
import imggal7 from './imageone/imggal7.jpg';
import imggal8 from './imageone/imggal8.jpg';

import ReadMoreReact from 'read-more-react';
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "../src/style.css";



class ScreenOne extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light headtop">

                    <img className="navbar-brand logo" src={logo} alt="Logo" />

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto">
                            <li class="nav-item active">
                                <a class="nav-link text-white" href="#">HOME <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">MEDICALSPA</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">RESORTS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">AYURVEDHA</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#" >LEARNING PROGRAM</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">AQUA THERAPY</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2  " style={{ backgroundColor: "transparent" }} type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0 text-white" type="submit">Search</button>
                        </form>
                    </div>
                </nav>


                <div id="demo" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <div className="overlay"></div>
                            <img src={slide1} alt="Los Angeles" width="1100" height="500">

                            </img>
                            <div className="text-wrap col-8 " style={{ flexDirection: 'column' }}>
                                <div className="text-animation-head">
                                    <div className="Head-text" >Discover the best destinations </div>
                                </div>
                                <div className="rowstyle">
                                    <div className="text-amt ">FAMILY </div>   
                                        <span className="text-amt">HOLIDAYS</span>                                  
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="overlay"></div>
                            <img src={slide2} alt="Chicago" width="1100" height="500" />
                            <div className="text-wrap col-8 " style={{ flexDirection: 'column' }}>
                                <div className="text-animation-head">
                                    <div className="Head-text" >LIFE'S A JOURNEY, TAKE YOUR DREAM </div>
                                </div>
                                <div className="rowstyle">
                                    <div className="text-amt ">WE ARE</div>   
                                        <span className="text-amt">AVENTURA</span>                                  
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="overlay"></div>
                            <img src={slide3} alt="New York" width="1100" height="500" />
                            <div className="text-wrap col-8 " style={{ flexDirection: 'column' }}>
                                <div className="text-animation-head">
                                    <div className="Head-text" >WHO LIVES, SEES MUCH</div>
                                </div>
                                <div className="rowstyle">
                                    <div className="text-amt ">WHO TRAVELS</div>   
                                        <span className="text-amt">SEES MORE</span>                                  
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="overlay"></div>
                            <img src={slide4} alt="New York" width="1100" height="500" />
                            <div className="text-wrap col-8 " style={{ flexDirection: 'column' }}>
                                <div className="text-animation-head">
                                    <div className="Head-text" >LIFE'S A JOURNEY, TAKE YOUR DREAM </div>
                                </div>
                                <div className="rowstyle">
                                    <div className="text-amt ">WE ARE</div>   
                                        <span className="text-amt">AVENTURA</span>                                  
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="overlay"></div>
                            <img src={slide5} alt="New York" width="1100" height="500" />
                            <div className="text-wrap col-8 " style={{ flexDirection: 'column' }}>
                                <div className="text-animation-head">
                                    <div className="Head-text" >LIFE'S A JOURNEY, TAKE YOUR DREAM </div>
                                </div>
                                <div className="rowstyle">
                                    <div className="text-amt ">WE ARE</div>   
                                        <span className="text-amt">AVENTURA</span>                                  
                                </div>
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


                <div class="container-fluid " style={{ backgroundColor: "white" }}>
                    <div className="col-md-12 col-sm-12 col-lg-12 clear-fix row">
                        <div class="tzElement_Services col-sm-12 col-md-3 col-lg-3 ">
                            <div class="icon">
                                <img src={icon} alt=""></img>
                            </div>
                            <span class="title">                500+ Destinations            </span>
                            <p class="descriptions">
                                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.            </p>
                        </div>
                        <div class="tzElement_Services col-sm-12 col-md-3 col-lg-3  ">
                            <div class="icon">
                                <img src={icon1} alt=""></img>
                            </div>
                            <span class="title">
                                Discover             </span>
                            <p class="descriptions">
                                Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.            </p>
                        </div>
                        <div class="tzElement_Services col-sm-12 col-md-3 col-lg-3  ">
                            <div class="icon">
                                <img src={icon2} alt=""></img>
                            </div>
                            <span class="title">                Book Your Trip            </span>
                            <p class="descriptions">
                                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.            </p>
                        </div>
                        <div class="tzElement_Services col-sm-12 col-md-3 col-lg-3  ">
                            <div class="icon">
                                <img src={icon3} alt=""></img>
                            </div>
                            <span class="title">                Global Support            </span>
                            <p class="descriptions">
                                Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.            </p>
                        </div>
                    </div>

                </div>
                <div className="container-carosel">
                    <Slider {...settings}>
                        <div class="card">
                            <img class="card-img-top img-fluid" src={card1} alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">VYTHIRI VILLAGE </h4>
                                <ReadMoreReact text={"A five star luxury resort harmoniously set on the heart of Wayanad, thirty acres of refreshing greenery, the tantalizing aroma of fresh spices, coffee and tea"}
                                    min={50}
                                    ideal={80}
                                    max={100}
                                    readMoreText=" read more" />
                                <a href="#" class="btn btn-primary card-bt btn-sm">VIEW MORE</a>

                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top img-fluid" src={card2} alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"> VYTHIRI</h4>
                                <ReadMoreReact text={"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
                                    min={50}
                                    ideal={80}
                                    max={100}
                                    readMoreText=" read more" />

                                <a href="#" class="btn btn-primary card-bt btn-sm">VIEW MORE</a>

                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top img-fluid" src={card3} alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">ECO-NATURAL RESORTS</h4>
                                <ReadMoreReact text={"An eco hotel, or a green hotel, is an environmentally sustainable hotel or accommodation that has made important environmental improvements"}
                                    min={50}
                                    ideal={80}
                                    max={100}
                                    readMoreText=" read more" />

                                <a href="#" class="btn btn-primary card-bt btn-sm">VIEW MORE</a>

                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top img-fluid" src={card4} alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">RESORT</h4>
                                <ReadMoreReact text={"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
                                    min={50}
                                    ideal={80}
                                    max={100}
                                    readMoreText=" read more" />

                                <a href="#" class="btn btn-primary card-bt btn-sm">VIEW MORE</a>

                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top img-fluid" src={card5} alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">WELLNESS SPA</h4>
                                <ReadMoreReact text={"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
                                    min={50}
                                    ideal={80}
                                    max={100}
                                    readMoreText=" read more" />
                                <a href="#" class="btn btn-primary card-bt btn-sm">VIEW MORE</a>

                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top img-fluid" src={card6} alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title"> YOGA</h4>
                                <ReadMoreReact text={"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
                                    min={50}
                                    ideal={80}
                                    max={100}
                                    readMoreText=" read more" />
                                <a href="#" class="btn btn-primary card-bt btn-sm">VIEW MORE</a>

                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top img-fluid" src={card7} alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">EXPLORE INDIA</h4>
                                <ReadMoreReact text={"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
                                    min={50}
                                    ideal={80}
                                    max={100}
                                    readMoreText=" read more" />
                                <a href="#" class="btn btn-primary card-bt btn-sm">VIEW MORE</a>

                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top img-fluid" src={card8} alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">MEDICAL SPA</h4>
                                <ReadMoreReact text={"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
                                    min={50}
                                    ideal={80}
                                    max={100}
                                    readMoreText=" read more" />
                                <a href="#" class="btn btn-primary card-bt btn-sm">VIEW MORE</a>

                            </div>
                        </div>
                    </Slider>
                </div>

                <div class=" gallery-container">


                    <h1> OUR SPECIALITIES</h1>
                </div>
                <div class="tz-gallery container gallery-container">

                    <div class="row">

                        <div class="col-sm-12 col-md-4">
                            <a class="lightbox">
                                <img src={imggal1} alt="Bridge" />
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <a class="lightbox" >
                                <img src={imggal2} alt="Park" />
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <a class="lightbox" >
                                <img src={imggal3} alt="Tunnel" />
                            </a>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <a class="lightbox">
                                <img src={imggal4} alt="Bridge" />
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <a class="lightbox" >
                                <img src={imggal5} alt="Park" />
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <a class="lightbox" >
                                <img src={imggal6} alt="Tunnel" />
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <a class="lightbox" >
                                <img src={imggal7} alt="Tunnel" />
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <a class="lightbox" >
                                <img src={imggal8} alt="Tunnel" />
                            </a>
                        </div>
                    </div>

                </div>


                <div class="container-fluid " style={{ backgroundColor: "#2a2a2a" }}>

                    <div class="container">
                        <div class="row" style={{ color: "white", width: "996px", padding: "15px" }}>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div  >
                                    <h5 className="box">VOYAGE WELLNESS TOURISM</h5>
                                    <p className="footertext">Get to know us</p>
                                    <p className="footertext">Packages</p>
                                    <p className="footertext">Resort</p>
                                    <p className="footertext">Ayurvedha</p>
                                    <p className="footertext">Yoga</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div >
                                    <h5 className="box">OTHER LINKS</h5>
                                    <p className="footertext">Angel Figurines</p>
                                    <p className="footertext">Home Decor</p>
                                    <p className="footertext">Mugs</p>
                                    <p className="footertext">Pet Lover</p>
                                    <p className="footertext">Hnadbags & Jewelry</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div >
                                    <h5 className="box">PLEASE HELP ME</h5>
                                    <p className="footertext">Contact</p>
                                    <p className="footertext">FAQ</p>
                                    <p className="footertext">Store Locator</p>
                                    <p className="footertext">New Users</p>
                                    <p className="footertext">Order Status</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div >
                                    <h5 className="box">ABOUT VOYAGE WELLNESS</h5>
                                    <p className="footertext">Address :  Kakkathuruthy, Edathirinji P.O, Kerala-680122, India.</p>
                                    <p className="footertext">Phone : 0033660089702 </p>
                                    <p className="footertext">info@vayagewellnesstourism.com</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                <div class="">
                    <div class="row footer-text" style={{ width: "996px", padding: "15px",width:"100%",backgroundColor:"#212121" }}>

                        <div class="col-xs-12 col-sm-6 col-md-4 text-center ">
                            <h1 className="box ">
                                Copyright 2019 Voyage Wellness, All Right Reserved                        </h1>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 text-center">
                        <img className="navbar-brand footer-logo " src={logo} alt="Logo" />
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 box text-center">
                          
                               <p style={{marginRight:"11px"}}>Home</p>
                               <p style={{marginRight:"11px"}}>Privacy Policy</p>
                               <p style={{marginRight:"11px"}}>Terms of Use</p>
                               
                          
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default ScreenOne;