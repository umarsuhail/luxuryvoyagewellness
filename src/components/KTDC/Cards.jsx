import React, { Component } from "react";
import "./home.scss";
export default class HomeLayuout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
              <div className="card col-lg-4 col-sm-12">
                <a
                  className="img-card"
                  href="/KTDC"
                >
                  <img src={this.props.image} />
                </a>
                <div className="card-content">
                  <h4 className="card-title">
                    <a href="/KTDC">
                      {this.props.heading}
                    </a>
                  </h4>
                  <p className="">
                 {this.props.content}
                  </p>
                </div>
                <div className="card-read-more">
                  <a
                    href="/KTDC"
                    className="btn btn-link btn-block"
                  >
                    Read More
                  </a>
                </div>
              </div>        
    )}
}