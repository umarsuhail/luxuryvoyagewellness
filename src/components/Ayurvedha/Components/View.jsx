import React, { Component } from "react";
import BacgroundImage from "../../../images/sha-wellness.jpg";
import "../../../css/View.scss";
import YouTube from "react-youtube";
export default class View extends Component {
  render() {
    const opts = {
      height: "240",
      width: "525",
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <div>
        <div>
          <div className="header">
            <img
              src={BacgroundImage}
              className="background-Medical-spa"
              style={{ width: "100%" }}
              alt="backround-image"
            ></img>
            <div className="container">
              <h1 className="heading container">{this.props.heading}</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className=" col-lg-12 col-md-12">
            <div className=" col-lg-6 col-md-6 col-sm-12 float-left">
              <div className="col-lg-12 col-md-12 col-sm-12">
              </div>
              <div className="">
                <YouTube className="col-lg-12 col-md-12 col-sm-12"
                  videoId={this.props.videoID}
                  opts={opts}
                  onReady={this._onReady}
                  onEnd={this.endedVideo}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 content-text text-left float-right">
              {this.props.children}
            </div>
          </div>
          <div className=" col-lg-12 col-md-12 float-left programs">
            {this.props.programs}
          </div>
          <div className=" col-lg-12 col-md-12 float-left programs">
            {this.props.Hotels}
          </div>
        </div>
      </div>
    );
  }
}
