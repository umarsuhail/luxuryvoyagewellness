import React, { Component } from "react";

export default class Modal extends Component {
    sendMail=()=>{
        alert('Thanks for contacting us, you will get a confirmation notification soon')
        this.props.modalHandle();
    }
  render() {
    return (
      <div className="modal">
        <div className="modal-body">
          <div className="close-button float-right">
            <i
              class="material-icons"
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
          <form>
            <div class="form-group row">
              <label htmlFor="staticEmail" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control"
                  id="staticEmail"
                  placeholder="email"
                />
              </div>
            </div>
            <div class="form-group row">
              <label htmlFor="inputContact" class="col-sm-2 col-form-label">
                Contact Number
              </label>
              <div class="col-sm-10">
                <input
                  type="Contact"
                  class="form-control"
                  id="inputContact"
                  placeholder="contact"
                />
              </div>
            </div>
            <div class="form-group row">
              <label
                htmlFor="inputwritetous"
                class="col-sm-2 col-form-label"
              ></label>
              <div class="col-sm-10">
                <textarea
                  type="writetous"
                  class="form-control"
                  id="inputwritetous"
                  placeholder="Write to us"
                />
              </div>
            </div>
            <button className="submit-button" type="submit" onClick={this.sendMail}>
              Submit
            </button>
          </form>
          <div className="footer row text-center mx-auto">
            <span>Contact us on : info@luxuryvoyagewellness.com</span>
          </div>
        </div>
      </div>
    );
  }
}
