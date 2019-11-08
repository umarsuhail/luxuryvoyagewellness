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
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    );
  }
}
