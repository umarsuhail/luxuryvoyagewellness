import React, { Component } from "react";
import axios from "axios";
import VerticalLinearStepper from "./Stepper";
import whatsapp from "../images/whatsapp.png";
import FaceBook from "../images/facebook.png";
import instagram from "../images/instagram.png";

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
      <div className="form">
        <div id="sendmessage">Your message has been sent. Thank you!</div>
        <div id="errormessage"></div>
        <form action="" method="post" role="form" className="contactForm">
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                onChange={this.handleChange}
                value={this.state.name}
                name="name"
                type="text"
                id="input-name"
                required
                placeholder="Name"
                className="form-control"
              />
              <div className="validation"></div>
            </div>
            <div className="form-group col-md-6">
              <input
                onChange={this.handleChange}
                value={this.state.email}
                name="email"
                type="text"
                id="input-name"
                required
                placeholder="Email"
                className="form-control"
              />
              <div className="validation"></div>
            </div>
          </div>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              value={this.state.contact}
              name="contact"
              id="input-email"
              required
              placeholder="Contact Number"
              className="form-control"
            />
            <div className="validation"></div>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              onChange={this.handleChange}
              value={this.state.feedback}
              name="feedback"
              type="text"
              id="input-message"
              placeholder="Message"
              className="form-control"
            ></textarea>
            <div className="validation"></div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              value="Submit"
              className="submit-button"
              onClick={this.sendMail}
              id="input-submit"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="row">
          <div className="column">
            <a href="https://www.facebook.com/Luxury-Voyage-Wellness-101579791281788">
              <img src={FaceBook} alt="FaceBook" className="whatsapp" ></img>
            </a>
          </div>
          <div className="column">
            <a href="https://api.whatsapp.com/send?phone=33660089702">
              <img src={whatsapp} alt="Whatsapp" className="whatsapp"></img>
            </a>
          </div>
          <div className="column">
            <a href="https://instagram.com/luxuryvoyagewellness?igshid=1i5wf8619te47">
              <img src={instagram} alt="instagram" className="whatsapp"></img>
            </a>
          </div>

        </div>
      </div>
    );
  }
}
