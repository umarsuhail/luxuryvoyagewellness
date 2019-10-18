import React, { Component } from "react";

export default class ProgramContents extends Component {
  render() {
    return (
      <div className="row" style={{ padding: 20 }}>
        <div
          className="float-left  col-sm-12 col-md-6 col-lg-6 float-left"
          style={{
            alignSelf: "center"
          }}
        >
          <img
            src={this.props.image}
            alt="hotel-image"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="float-right text-left col-sm-12 col-md-6 col-lg-6 float-right"
          style={{
            alignSelf: "center"
          }}
        >
          <h1>{this.props.heading}</h1>
          <br />
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}
