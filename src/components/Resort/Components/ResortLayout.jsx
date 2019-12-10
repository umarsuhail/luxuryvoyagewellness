import React, { Component } from "react";

export default class ResortLayout extends Component {
  render() {
    return (
      <div>
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-6 col-lg-6">
            <img
              className="img-fluid mb-3 mb-lg-0"
              src={this.props.image1}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="featured-text text-center text-lg-left">
              <h4>{this.props.contentTitle}</h4>
              <p className="text-black-50 mb-0">{this.props.content}</p>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
