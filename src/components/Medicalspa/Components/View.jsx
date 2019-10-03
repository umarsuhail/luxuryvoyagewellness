import React, { Component } from "react";
import BacgroundImage from "../../../images/sha-wellness.jpg";
import "../../../css/View.css";
import Carousal from "./Carousal";
import YouTube from "react-youtube";
import Programs from "../Components/Programs";
export default class View extends Component {
  endedVideo = (e) => {
    console.log();
    
    // const player = YouTube.player
    // player.playVideo();
  };
  render() {
    const opts = {
      height: "240",
      width: "525",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
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
              <h1 className="heading">{this.props.heading}</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className=" col-lg-12 col-md-12">
            <div className=" col-lg-6 col-md-6 col-sm-12 float-left">
              {" "}
              <Carousal
                className="new-carousel"
                image1={this.props.image1}
                image2={this.props.image2}
                image3={this.props.image3}
                image4={this.props.image4}
              ></Carousal>
              <YouTube
                videoId={this.props.videoID}
                opts={opts}
                onReady={this._onReady}
                onEnd={this.endedVideo}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 content-text text-left float-right">
              {this.props.children}
            </div>
          </div>
          <div className=" col-lg-12 col-md-12 float-left">
            {this.props.programs}
          </div>
          {/* <div className="right-container">{this.props.children}</div> */}
        </div>
      </div>
    );
  }
}
