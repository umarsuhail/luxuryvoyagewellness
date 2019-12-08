import React, { Component } from 'react'
import image1 from "../images/ananda/ananda1.jpg";
import BRENNERS from "../images/BRENNERS/bren1.jpg";
import leela from "../images/leela/leela1.jpg";
import PalaceExterior from "../images/palace/PalaceExeterior.jpg";
import sha1 from "../images/sha-wellness/sha1.jpg";
import treatment5 from "../images/treatment5.jpg";
import ScrollAnimation from 'react-animate-on-scroll';
import hotel from "../images/hotel.png";


export default class Services extends Component {

    render() {
        return (
          <section id="about">
          <div class="container">

              <header class="section-header">
                  <h3>SERVICES</h3>
   
              </header>
              <ScrollAnimation animateIn='bounceInRight'
              duration={2}
             >
              <div class="row about-cols">
             


                  <div class="col-md-4 wow fadeInUp">
                      <div class="about-col">
                          <div class="img">
                              <img src={sha1} alt="" class="img-fluid" />
                              <div class="icon"><img style={{maxWidth:"35px"}} class="ion-ios-speedometer-outline" src={hotel}></img></div>
                          </div>
                          <h2 class="title"><a href="/sha-wellness">SHA WELLNESS</a></h2>
                          <p>
                          Our mission at SHA, is that you enjoy and have an unforgettable stay, 
                          as well as to produce a positive, substantial and lasting change in your 
                          health and wellness, so that you feel a state of complete balance. 
                          </p>
                      </div>
                  </div>

                  <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                      <div class="about-col">
                          <div class="img">
                              <img src={image1} alt="" class="img-fluid" />
                              <div class="icon"><img style={{maxWidth:"35px"}} class="ion-ios-speedometer-outline" src={hotel}></img></div>
                          </div>
                          <h2 class="title"><a href="/ananda-himalaya">ANANDA HIMALAYA</a></h2>
                          <p>
                          Ananda is an award-winning luxury destination spa resort in
                          India situated at the Himalayan foothills in Northern India.
                         Ananda is surrounded by graceful Sal forests and overlooks the spiritual
                         town of Rishikesh and the Ganges river valley. 
                         </p>
                      </div>
                  </div>

                  <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                      <div class="about-col">
                          <div class="img">
                              <img src={BRENNERS} alt="" class="img-fluid" />
                              <div class="icon"><img style={{maxWidth:"35px"}} class="ion-ios-speedometer-outline" src={hotel}></img></div>
                          </div>
                          <h2 class="title"><a href="/BRENNERS-PARK-HOTEL-AND-SPA">BRENNERS PARK-HOTEL AND SPA</a></h2>
                          <p>
                          Brenners Park-Hotel & Spa has been a place of relaxation and diversion for 
                          the travelling elite since 1872. Here guests can enjoy all that Baden-Baden 
                          {/* is renowned for with one of the most advanced spas in Europe, offering luxurious 
                          therapy and cures while surrounded by refreshing natural parkland and high culture. */}
                          </p>
                      </div>
                  </div>

              </div>


              <div class="row about-cols">

<div class="col-md-4 wow fadeInUp">
<div class="about-col">
<div class="img">
<img src={leela} alt="" class="img-fluid" />
<div class="icon"><img style={{maxWidth:"35px"}} class="ion-ios-speedometer-outline" src={hotel}></img></div>
</div>
<h2 class="title"><a href="/LEELA-RAVIZ">LEELA RAVIZ</a></h2>
<p>
The Raviz Group has set out on a course to present the traditions, culture and hospitality of Kerala 
to the visiting traveler on a platter.
{/* Having set out on this endeavor, we aspire to bring alive our philosophy of Celebrating 
India that will reflect through all our products and services that defines the fabric 
of the Raviz across the board. */}
</p>
</div>
</div>

<div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
<div class="about-col">
<div class="img">
<img src={PalaceExterior} alt="" class="img-fluid" />
<div class="icon"><img style={{maxWidth:"35px"}} class="ion-ios-speedometer-outline" src={hotel}></img></div>
</div>
<h2 class="title"><a href="/PalaceResorts">  PALACE RESORTS</a></h2>
<p>
Our onsite amenities include indoor and outdoor whirlpools, a large oceanfront outdoor pool, 
exercise room, sauna, seasonal lounge, and much, much more. Our convenient location  gives you 
and your family quick and easy access to  all the fun and excitement
{/* Myrtle Beach and the Grand Strand have to offer, like water parks and 
amusement parks. Book your fun-filled Myrtle Beach oceanfront vacation today 
at the Palace Resort. */}
</p>
</div>
</div>

<div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
<div class="about-col">
<div class="img">
<img src={treatment5} alt="" class="img-fluid" />
<div class="icon"><img style={{maxWidth:"35px"}} class="ion-ios-speedometer-outline" src={hotel}></img></div>
</div>
<h2 class="title"><a href="/Ayurveda"> AYURVEDA TREATMENTS</a></h2>
<p>
Ayurveda has been carefully nurtured in Kerala for more than a thousand years. From specialised 
treatments to prescribed diets, it is an integral part of our culture. Ayurveda is a way of life 
to us and not simply a method to cure ailments. 
{/* Our land is blessed with several herbal medicines 
and these have played a crucial role in ensuring the growth of Ayurveda on our shores. */}
</p>
</div>
</div>

</div>
</ScrollAnimation>

          </div>
      </section>
        )
    }
}
