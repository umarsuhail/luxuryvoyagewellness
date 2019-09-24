import React, { Component } from "react";
import logo from "../images/voyage.logo-2.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
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
  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
        <nav className={`navbar navbar-expand-lg navbar-light bg-light headtop ${!this.state.visible&&'navbar-hidden'}`}>
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
                <a className="nav-link text-white" href="#">
                  HOME <span className="sr-only">(current)</span>
                </a>
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
                  <a className="dropdown-item" href="#">
                    SHA WELLNESS
                  </a>
                  <a className="dropdown-item" href="#">
                    ANANDA HIMALAYA
                  </a>
                  <a className="dropdown-item" href="#">
                    BRENNERS PARK-HOTEL AND SPA
                  </a>
                  <a className="dropdown-item" href="#">
                    LEELA RAVIZ
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
      </div>
    );
  }
}
