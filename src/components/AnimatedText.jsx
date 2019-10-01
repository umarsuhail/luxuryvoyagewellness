import React, { Component } from "react";
import "../css/Animate.css";
import "../index.css";
import Modal from "./Modal";
export default class AnimatedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  openModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };
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
        <div>
          <button
            className="btn animated fadeInDown contact-button"
            onClick={this.props.openModal}
          >
            Contact Us
          </button>
        </div>
    

      </div>
    );
  }
}
