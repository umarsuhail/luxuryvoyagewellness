import React, { Component } from 'react'
import imggal1 from "../images/imggal1.jpg";
import imggal2 from "../images/imggal2.jpg";
import imggal3 from "../images/imggal3.jpg";
import imggal4 from "../images/imggal4.jpg";
import imggal5 from "../images/imggal5.jpg";
import imggal6 from "../images/imggal6.jpg";
import imggal7 from "../images/imggal7.jpg";
import imggal8 from "../images/imggal8.jpg";
export default class Specialities extends Component {
    render() {
        return (
            <div>
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
              <a class="lightbox">
                <img src={imggal2} alt="Park" />
              </a>
            </div>
            <div class="col-sm-6 col-md-4">
              <a class="lightbox">
                <img src={imggal3} alt="Tunnel" />
              </a>
            </div>
            <div class="col-sm-12 col-md-4">
              <a class="lightbox">
                <img src={imggal4} alt="Bridge" />
              </a>
            </div>
            <div class="col-sm-6 col-md-4">
              <a class="lightbox">
                <img src={imggal5} alt="Park" />
              </a>
            </div>
            <div class="col-sm-6 col-md-4">
              <a class="lightbox">
                <img src={imggal6} alt="Tunnel" />
              </a>
            </div>
            <div class="col-sm-6 col-md-4">
              <a class="lightbox">
                <img src={imggal7} alt="Tunnel" />
              </a>
            </div>
            <div class="col-sm-6 col-md-4">
              <a class="lightbox">
                <img src={imggal8} alt="Tunnel" />
              </a>
            </div>
          </div>
        </div>
            </div>
        )
    }
}
