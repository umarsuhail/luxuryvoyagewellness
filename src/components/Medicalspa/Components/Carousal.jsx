import React, { Component } from "react";

export default class Carousal extends Component {
  render() {
    return (
      <div id="demo" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="overlay"></div>
            <img
              src={this.props.image1}
              alt="Chicago"
              width="1100"
              height="500"
            />
          </div>
          <div className="carousel-item">
            <div className="overlay"></div>
            <img
              src={this.props.image2}
              alt="New York"
              width="1100"
              height="500"
            />
          </div>
          <div className="carousel-item">
            <div className="overlay"></div>
            <img
              src={this.props.image3}
              alt="New York"
              width="1100"
              height="500"
            />
          </div>
          {/* <div className="carousel-item">
          <div className="overlay"></div>
          <img src={this.props.image4} alt="New York" width="1100" height="500" />
   </div> */}
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>

      // <div
      //   id="carouselExampleIndicators"
      //   class="carousel slide"
      //   data-ride="carousel"
      // >
      //   <ol class="carousel-indicators">
      //     <li
      //       data-target="#carouselExampleIndicators"
      //       data-slide-to="0"
      //       class="active"
      //     ></li>
      //     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      //     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      //   </ol>
      //   <div class="carousel-inner">
      //     <div class="carousel-item active">
      //       <img
      //         class="d-block"
      //         src={this.props.image1}
      //         alt="First slide"
      //       />
      //     </div>
      //     <div class="carousel-item">
      //       <img
      //         class="d-block"
      //         src={this.props.image2}
      //         alt="Second slide"
      //       />
      //     </div>
      //     <div class="carousel-item">
      //       <img
      //         class="d-block"
      //         src={this.props.image3}
      //         alt="Third slide"
      //       />
      //     </div>
      //   </div>
      //   <a
      //     class="carousel-control-prev"
      //     href="#carouselExampleIndicators"
      //     role="button"
      //     data-slide="prev"
      //   >
      //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      //     <span class="sr-only">Previous</span>
      //   </a>
      //   <a
      //     class="carousel-control-next"
      //     href="#carouselExampleIndicators"
      //     role="button"
      //     data-slide="next"
      //   >
      //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
      //     <span class="sr-only">Next</span>
      //   </a>
      // </div>
    );
  }
}
