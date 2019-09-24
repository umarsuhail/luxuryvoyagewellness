import React, { Component } from "react";
import "../css/Animate.css";
import "../index.css";
export default class AnimatedText extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <span className="animated  fadeInDown header-text">
            {this.props.HeaderText}
          </span>
        </div>
        <span className="animated  fadeInRight big-header">
          {this.props.BigHeader}
        </span>
      </div>
    );
  }
}
