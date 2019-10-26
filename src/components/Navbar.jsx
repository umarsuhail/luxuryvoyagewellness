import React, { Component } from "react";
import logo from "../images/voyage.logo-2.png";
import Modal from "./Modal";
import logo1 from "../images/voyage.logo-2.png"
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      modalVisible: false
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
        {/* <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
	<a class="navbar-brand" href="">Brand</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
	<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse bg-dark" id="navbarCollapse">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item active">
				<a class="nav-link" href="#">Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Link</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">About</a>
			</li>
		</ul>
		<form class="form-inline mt-2 mt-md-0">
		<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</form>
	  </div>
    </nav> */}






                      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <img class="navbar-brand logo" src={logo1} alt="Logo"></img>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link text-white" href="/"> HOME</a>
            <span class="sr-only">(current)</span></li><li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MEDICAL SPA</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="/sha-wellness"> SHA WELLNESS</a>
                <a class="dropdown-item" href="/ananda-himalaya"> ANANDA HIMALAYA</a>
                <a class="dropdown-item" href="/BRENNERS-PARK-HOTEL-AND-SPA"> BRENNERS PARK-HOTEL AND SPA</a>
                <a class="dropdown-item" href="/LEELA-RAVIZ"> LEELA RAVIZ</a>
                </div></li>
                <li class="nav-item">
                <a class="nav-link text-white" href="/PalaceResorts">PALACE RESORTS</a>
                      </li>
                
                <li class="nav-item dropdown"> 
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">RESORTS</a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                   
                  <a class="dropdown-item" href="#">LUXURY JUNGLE RESORTS</a>
                  <a class="dropdown-item" href="#">HILL RESORTS</a>
                  <a class="dropdown-item" href="#">ECO-NATURAL RESORTS</a>
                  <a class="dropdown-item" href="#">RAIN FOREST RESORTS</a>
                  <a class="dropdown-item" href="#">SKI RESORTS</a>
                  <a class="dropdown-item" href="#">ISLAND RESORTS</a>
                  </div></li><li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">AYURVEDA</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="/Rajah"> AYURVEDA RAJAH HOSPITAL</a>
                      <a class="dropdown-item" href="/YogaVillage"> AYURVEDA YOGA VILLAGE</a>
                      </div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">LEARNING PROGRAM</a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="/AyurvedaLearning"> AYURVEDA LEARNING PROGRAM</a>
                      <a class="dropdown-item" href="/yoga"> YOGA</a>
                      <a class="dropdown-item" href="/Kalarippayattu"> KALARIPPAYATTU</a>
                      </div></li>
                      <li class="nav-item">
                        <a class="nav-link text-white" href="/TherpyAqua"> AQUA THERAPY</a>
                      </li>
                      </ul>
                    
  </div>
</nav>


        {this.state.modalVisible && (
          <Modal modalHandle={this.openModal}></Modal>
        )}
      </div>
    );
  }
}
