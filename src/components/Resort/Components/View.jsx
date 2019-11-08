import React, { Component } from "react";
import "../../../css/View.scss";

export default class View extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="header">
            <img
              src={this.props.BackgroundImage}
              className="background-Medical-spa"
              style={{ width: "100%" }}
              alt="backround-image"
            ></img>
            <div className="">
              <h1 className="heading container">{this.props.heading}</h1>
            </div>
          </div>
        </div>
        <div className=" container-fluid" style={{background:'#d6cdc1'}}>{this.props.content}</div>
        <div className="container">{this.props.programs}</div>
        <div className="last-content">{this.props.lastContent}</div>
      </div>
    );
  }
}
