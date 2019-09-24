import React, { Component } from "react";
import Slider from "react-slick";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";
import card5 from "../images/card5.jpg";
import card6 from "../images/card6.jpg";
import card7 from "../images/card7.jpg";
import card8 from "../images/card8.jpg";
import ReadMoreReact from "read-more-react";

export default class Cards extends Component {
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
        <div className="container-carosel">
          <Slider {...settings}>
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src={card1}
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">VYTHIRI VILLAGE </h4>
                <ReadMoreReact
                  text={
                    "A five star luxury resort harmoniously set on the heart of Wayanad, thirty acres of refreshing greenery, the tantalizing aroma of fresh spices, coffee and tea"
                  }
                  min={50}
                  ideal={80}
                  max={100}
                  readMoreText=" read more"
                />
                <div className="col-12 button-container">
                  <a href="#" class="btn btn-primary card-bt btn-sm">
                    VIEW MORE
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src={card2}
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title"> VYTHIRI</h4>
                <ReadMoreReact
                  text={
                    "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                  }
                  min={50}
                  ideal={80}
                  max={100}
                  readMoreText=" read more"
                />
                <div className="col-12 button-container">
                  <a href="#" class="btn btn-primary card-bt btn-sm">
                    VIEW MORE
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src={card3}
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">ECO-NATURAL RESORTS</h4>
                <ReadMoreReact
                  text={
                    "An eco hotel, or a green hotel, is an environmentally sustainable hotel or accommodation that has made important environmental improvements"
                  }
                  min={50}
                  ideal={80}
                  max={100}
                  readMoreText=" read more"
                />

                <div className="col-12 button-container">
                  <a href="#" class="btn btn-primary card-bt btn-sm">
                    VIEW MORE
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src={card4}
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">RESORT</h4>
                <ReadMoreReact
                  text={
                    "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                  }
                  min={50}
                  ideal={80}
                  max={100}
                  readMoreText=" read more"
                />

                <div className="col-12 button-container">
                  <a href="#" class="btn btn-primary card-bt btn-sm">
                    VIEW MORE
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src={card5}
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">WELLNESS SPA</h4>
                <ReadMoreReact
                  text={
                    "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                  }
                  min={50}
                  ideal={80}
                  max={100}
                  readMoreText=" read more"
                />
                <div className="col-12 button-container">
                  <a href="#" class="btn btn-primary card-bt btn-sm">
                    VIEW MORE
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src={card6}
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title"> YOGA</h4>
                <ReadMoreReact
                  text={
                    "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                  }
                  min={50}
                  ideal={80}
                  max={100}
                  readMoreText=" read more"
                />
                <div className="col-12 button-container">
                  <a href="#" class="btn btn-primary card-bt btn-sm">
                    VIEW MORE
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src={card7}
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">EXPLORE INDIA</h4>
                <ReadMoreReact
                  text={
                    "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                  }
                  min={50}
                  ideal={80}
                  max={100}
                  readMoreText=" read more"
                />
                <div className="col-12 button-container">
                  <a href="#" class="btn btn-primary card-bt btn-sm">
                    VIEW MORE
                  </a>
                </div>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src={card8}
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">MEDICAL SPA</h4>
                <ReadMoreReact
                  text={
                    "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                  }
                  min={50}
                  ideal={80}
                  max={100}
                  readMoreText=" read more"
                />
                <div className="col-12 button-container">
                  <a href="#" class="btn btn-primary card-bt btn-sm">
                    VIEW MORE
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
