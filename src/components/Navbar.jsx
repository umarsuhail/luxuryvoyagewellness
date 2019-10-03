import React, { Component } from "react";
import logo from "../images/voyage.logo-2.png";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      modalVisible: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };
  openModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };
  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
        <nav
          className={`navbar navbar-expand-lg navbar-light bg-light headtop ${!this
            .state.visible && "navbar-hidden"}`}
        >
          <img className="navbar-brand logo" src={logo} alt="Logo" />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <Link className="nav-link text-white" to="/">
                  {" "}
                  HOME
                </Link>

                <span className="sr-only">(current)</span>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  MEDICAL SPA
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link to="sha-wellness" className="dropdown-item"> SHA WELLNESS</Link>
                  <Link to="ananda-himalaya" className="dropdown-item"> ANANDA HIMALAYA</Link>
                  <Link to="brenners-park-hotel" className="dropdown-item"> BRENNERS PARK-HOTEL AND SPA</Link>
                  <Link to="leela-raviz" className="dropdown-item"> LEELA RAVIZ</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  RESORTS
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    PALACE RESORTS
                  </a>
                  <a className="dropdown-item" href="#">
                    LUXURY JUNGLE RESORTS
                  </a>
                  <a className="dropdown-item" href="#">
                    HILL RESORTS
                  </a>
                  <a className="dropdown-item" href="#">
                    ECO-NATURAL RESORTS
                  </a>
                  <a className="dropdown-item" href="#">
                    RAIN FOREST RESORTS
                  </a>
                  <a className="dropdown-item" href="#">
                    SKI RESORTS
                  </a>
                  <a className="dropdown-item" href="#">
                    ISLAND RESORTS
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  AYURVEDHA
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    RAJAH HOSPITAL
                  </a>
                  <a className="dropdown-item" href="#">
                    AYURVEDHA YOGA VILLAGE
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  LEARNING PROGRAM
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    AYURVEDHA LEARNING PROGRAM
                  </a>
                  <a className="dropdown-item" href="#">
                    YOGA
                  </a>
                  <a className="dropdown-item" href="#">
                    KALARIPPAYATTU
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  AQUA THERAPY
                </a>
              </li>
            </ul>
            <button className="btn contact-button" onClick={this.openModal}>
              Contact Us
            </button>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2  col-8"
                style={{
                  backgroundColor: "transparent",
                  justifyContent: "center"
                }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        {this.state.modalVisible && (
          <Modal modalHandle={this.openModal}></Modal>
        )}
      </div>
    );
  }
}
