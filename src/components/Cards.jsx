import React, { Component } from "react";
import ReadMoreReact from "read-more-react";

export default class Cards extends Component {
  render() {
    return (
      <div>
        <div className="container-carosel container">
              <div className="card col-md-4 col-sm-12 col-lg-4" >
              <img
                className="card-img-top img-fluid"
                src={this.props.cardImage}
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">{this.props.title}</h4>
                <ReadMoreReact
                  text={
                    this.props.content
                  }
                  min={50}
                  ideal={80}
                  max={100}
                  readMoreText=" read more"
                />
                <div className="col-12 button-container">
                  <a href={this.props.redirectTo} className="btn btn-primary card-bt btn-sm" onClick={this.props.ViewMore}>
                    VIEW MORE
                  </a>
                </div>
              </div>
            </div>
           
        </div>
      </div>
    );
  }
}
