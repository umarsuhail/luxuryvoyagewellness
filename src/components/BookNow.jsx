import React, { Component } from "react";
import chatImage from "../images/chat.png";
export default class BookNow extends Component {
  render() {
    return (
      <div className="chatnow-button">
        <a href="https://api.whatsapp.com/send?phone=33660089702" target="_blank" className="chatnow-link">
        <img className="chat-button" alt="chat" src={chatImage}></img>
        <span>Book Now</span>
        </a>
      </div>
    );
  }
}
