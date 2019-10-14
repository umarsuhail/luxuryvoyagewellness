import React, { Component } from "react";
import axios from "axios";
import VerticalLinearStepper from './Stepper'
export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      contact: "",
      feedback: ""
    };
  }
  sendMail = evt => {
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
      axios.post("http://localhost:3002/api/translator/submitForm", {
        email: this.state.email,
        contact: this.state.contact,
        feedback: this.state.feedback
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
      [name]: value
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



          {/* <form>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="staticEmail"
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.emailInput}
                  placeholder="email"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputContact" className="col-sm-2 col-form-label">
                Contact Number
              </label>
              <div className="col-sm-10">
                <input
                  type="Contact"
                  className="form-control"
                  id="inputContact"
                  onChange={this.handleChange}
                  name="contact"
                  value={this.state.contactInput}
                  placeholder="contact"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputwritetous" className=" col-form-label">
                Why you want to contact us?
              </label>
              <div className="col-sm-10">
                <textarea
                  type="writetous"
                  className="form-control"
                  id="inputwritetous"
                  onChange={this.handleChange}
                  name="feedback"
                  value={this.state.feedbackMessage}
                  placeholder="Write to us"
                  required
                />
              </div>
            </div>
            <button
              className="submit-button"
              type="submit"
              onClick={this.sendMail}
            >
              Submit
            </button>
          </form> */}



          <form style={{marginTop:"30px"}}>
            <div class="field name-box">
              <input type="text" id="name" placeholder="Who Are You?" />
              <label for="name">Name</label>
              <span class="ss-icon">check</span>
            </div>

            <div class="field email-box">
              <input type="text" id="email" placeholder="name@email.com"  onChange={this.handleChange}  value={this.state.emailInput} required/>
              <label for="email">Email</label>
              <span class="ss-icon">check</span>
            </div>

            <div class="field email-box">
              <input type="text" id="inputContact" placeholder="Contact Number"  onChange={this.handleChange}  value={this.state.contactInput} required/>
              <label for="email">Contact Number </label>
              <span class="ss-icon">check</span>
            </div>

            <div class="field msg-box">
              <textarea  id="inputwritetous" rows="4" placeholder="Your message goes here..." onChange={this.handleChange} value={this.state.feedbackMessage} required />
              <label for="msg">Msg</label>
              <span class="ss-icon">check</span>
            </div>

            <input class="button" type="submit" value="Send" />
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
      </div >
    );
  }
}
