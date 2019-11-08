import React, { Component } from "react";
import logo from "../images/voyage.logo-2.png";
import Modal from "./Modal";
import logo1 from "../images/voyage.logo-2.png"
import { Link } from "react-router-dom";
import '../css/navbar.scss'
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      modalVisible: false,
      className: ''
      // showNavbar: false
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

  mouseOver = (e) => {
    console.log('mouse over');
    const NavLink = document.getElementsByClassName('nav-link');
    this.setState({
      className: ' show'
    })
  }
  openModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  showAll = () => {
    this.setState({
      showNavbar: true
    });
  };
  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
        {/* <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
	<a className="navbar-brand" href="">Brand</a>
	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
	<span className="navbar-toggler-icon"></span>
	</button>
	<div className="collapse navbar-collapse bg-dark" id="navbarCollapse">
		<ul className="navbar-nav mr-auto">
			<li className="nav-item active">
				<a className="nav-link" href="#">Home</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">Link</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">About</a>
			</li>
		</ul>
		<form className="form-inline mt-2 mt-md-0">
		<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</form>
	  </div>
    </nav> */}






        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <img className="navbar-brand logo" src={logo1} alt="Logo"></img>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link text-white" onMouseEnter={this.mouseOver} href="/"> HOME</a>
                <span className="sr-only">(current)</span></li><li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MEDICAL SPA</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/sha-wellness" > SHA WELLNESS</a>
                  <a className="dropdown-item" href="/ananda-himalaya"> ANANDA HIMALAYA</a>
                  <a className="dropdown-item" href="/BRENNERS-PARK-HOTEL-AND-SPA"> BRENNERS PARK-HOTEL AND SPA</a>
                  <a className="dropdown-item" href="/LEELA-RAVIZ"> LEELA RAVIZ</a>
                </div></li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/PalaceResorts">PALACE RESORTS</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">RESORTS</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                  {/* <a className="dropdown-item" href="#">LUXURY JUNGLE RESORTS</a>
                  <a className="dropdown-item" href="#">HILL RESORTS</a>
                  <a className="dropdown-item" href="#">ECO-NATURAL RESORTS</a>
                  <a className="dropdown-item" href="#">RAIN FOREST RESORTS</a>
                  <a className="dropdown-item" href="#">SKI RESORTS</a>
                  <a className="dropdown-item" href="#">ISLAND RESORTS</a> */}
                  <a className="dropdown-item" href="/jungle-resorts">LUXURY JUNGLE RESORTS</a>
                  <a className="dropdown-item" href="#">HILL RESORTS</a>
                  <a className="dropdown-item" href="/Rain-Forest-resorts">RAIN FOREST RESORTS</a>
                  <a className="dropdown-item" href="/fog-resorts">FOG RESORTS</a>

                </div></li><li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">AYURVEDA</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/Rajah"> AYURVEDA TREATMENTS</a>

                  <a className="dropdown-item" href="/Rajah"> AYURVEDA RAJAH HOSPITAL</a>
                  <a className="dropdown-item" href="/YogaVillage"> AYURVEDA YOGA VILLAGE</a>
                </div></li><li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">LEARNING PROGRAM</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/AyurvedaLearning"> AYURVEDA LEARNING PROGRAM</a>
                  <a className="dropdown-item" href="/yoga"> YOGA</a>
                  <a className="dropdown-item" href="/yoga"> WATSU</a>
                  <a className="dropdown-item" href="/Kalarippayattu"> KALARIPPAYATTU</a>
                </div></li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/TherpyAqua"> KTDC </a>
              </li>
            </ul>

          </div>

      
          <div className="translator-wrapper">
            <div id="google_translate_element"></div>
          </div>
          <div className="float-right">
            <button className="btn contact-button-nav" onClick={this.openModal}>
              Contact Us
                        </button>
          </div>
        </nav>


        {this.state.modalVisible && (
          <Modal modalHandle={this.openModal}></Modal>
        )}
      </div>
    );
  }
}
