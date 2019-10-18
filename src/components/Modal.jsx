import React, { Component } from "react";
import axios from "axios";
import VerticalLinearStepper from "./Stepper";
export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      contact: "",
      feedback: "",
      name: ""
    };
  }
  sendMail = evt => {
    evt.preventDefault();
    console.log("submit-form");

    const { email, contact, feedback } = this.state;
    if (email === "" || contact === NaN || contact === "" || feedback === "") {
      this.setState({
        error: true
      });
    } else {
      evt.preventDefault();
      const data = {
        email: this.state.email,
        contact: this.state.contact,
        feedback: this.state.feedback
      };
      axios.post("/api/translator/submitForm", {
        email: this.state.email,
        contact: this.state.contact,
        feedback: this.state.feedback,
        name: this.state.name
      });

      console.log(data);

      alert(
        "Thanks for contacting us, you will get a confirmation notification soon"
      );
      this.props.modalHandle();
    }
  };
  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
      filled: true
    });
  };
  render() {
    return (
      <div className="modal">
        <div className="modal-body">
          <div className="close-button float-right">
            <i
              className="material-icons"
              onClick={this.props.modalHandle}
              style={{
                cursor: "pointer",
                float: "right"
              }}
            >
              close
            </i>{" "}
          </div>
          <div className="modal-heading">
            <h3>Contact Us</h3>
          </div>

          <h1>Luxury Voyage Wellness</h1>
          <form className="cf">
            <div className="half left cf">
              <input
                onChange={this.handleChange}
                value={this.state.name}
                name="name"
                type="text"
                id="input-name"
                required
                placeholder="Name"
              />

              <input
                onChange={this.handleChange}
                value={this.state.email}
                name="email"
                type="text"
                id="input-name"
                required
                placeholder="Email"
              />
              <input
                onChange={this.handleChange}
                value={this.state.contact}
                name="contact"
                id="input-email"
                required
                placeholder="Contact Number"
              />
            </div>
            <div className="half right cf">
              <textarea
                name="message"
                onChange={this.handleChange}
                value={this.state.feedback}
                name="feedback"
                type="text"
                id="input-message"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              value="Submit"
              className="submit-button"
              onClick={this.sendMail}
              id="input-submit"
            >
              Send
            </button>
          </form>

          <div
            className="footer text-center mx-auto"
            style={{
              marginTop: "auto"
            }}
          >
            <span>Contact us on : info@luxuryvoyagewellness.com</span>
          </div>
        </div>
      </div>
    );
  }
}
