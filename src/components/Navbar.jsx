import React, { Component } from "react";
import logo from "../imageone/voyage.logo-2.png";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light headtop">
          <img className="navbar-brand logo" src={logo} alt="Logo" />

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto">
              <li class="nav-item active">
                <a class="nav-link text-white" href="#">
                  HOME <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
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
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    SHA WELLNESS
                  </a>
                  <a class="dropdown-item" href="#">
                    ANANDA HIMALAYA
                  </a>
                  <a class="dropdown-item" href="#">
                    BRENNERS PARK-HOTEL AND SPA
                  </a>
                  <a class="dropdown-item" href="#">
                    LEELA RAVIZ
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
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
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    PALACE RESORTS
                  </a>
                  <a class="dropdown-item" href="#">
                    LUXURY JUNGLE RESORTS
                  </a>
                  <a class="dropdown-item" href="#">
                    HILL RESORTS
                  </a>
                  <a class="dropdown-item" href="#">
                    ECO-NATURAL RESORTS
                  </a>
                  <a class="dropdown-item" href="#">
                    RAIN FOREST RESORTS
                  </a>
                  <a class="dropdown-item" href="#">
                    SKI RESORTS
                  </a>
                  <a class="dropdown-item" href="#">
                    ISLAND RESORTS
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
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
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    RAJAH HOSPITAL
                  </a>
                  <a class="dropdown-item" href="#">
                    AYURVEDHA YOGA VILLAGE
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
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
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    AYURVEDHA LEARNING PROGRAM
                  </a>
                  <a class="dropdown-item" href="#">
                    YOGA
                  </a>
                  <a class="dropdown-item" href="#">
                    KALARIPPAYATTU
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  AQUA THERAPY
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2  col-8"
                style={{
                  backgroundColor: "transparent",
                  justifyContent: "center"
                }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0 text-white"
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
