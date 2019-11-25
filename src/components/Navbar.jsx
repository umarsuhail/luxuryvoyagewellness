import React, { Component } from "react";
import logo from "../images/voyage.logo-2.png";
import Modal from "./Modal";
import logo1 from "../images/voyage.logo-2.png"
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

{/* 
<header id="header">
    <div class="container-fluid">

      <div id="logo" class="pull-left">
        <h1><a href="#intro" class="scrollto">luxuryvoyagewellness</a></h1> */}
       {/* <a href="#intro"><img src={logo1} alt="" title="" /></a> */}
      {/* </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active"><a href="/">Home</a></li>
          <li class="menu-has-children"><a href="">MEDICAL SPA</a>
            <ul>
              <li><a href="/sha-wellness">SHA WELLNESS</a></li>
              <li><a href="/ananda-himalaya">ANANDA HIMALAYA</a></li>
              <li><a href="/BRENNERS-PARK-HOTEL-AND-SPA">BRENNERS PARK-HOTEL AND SPA</a></li>
              <li><a href="/LEELA-RAVIZ">LEELA RAVIZ</a></li>
            </ul>
          </li>
          <li><a href="/PalaceResorts">PALACE RESORTS</a></li>

          <li class="menu-has-children"><a href="">RESORTS</a>
            <ul>
              <li><a href="/jungle-resorts">LUXURY JUNGLE RESORTS</a></li>
              <li><a href="/Hill-Resorts">HILL RESORTS</a></li>
              <li><a href="/Rain-Forest-resorts">RAIN FOREST RESORTS</a></li>
              <li><a href="/Honeymoon-resorts">HONEYMOON RESORTS</a></li>
            </ul>
          </li>
          <li class="menu-has-children"><a href="">AYURVEDA</a>
            <ul>
              <li><a href="/Ayurveda">AYURVEDA TREATMENTS</a></li>
              <li><a href="/Rajah"> AYURVEDA RAJAH HOSPITAL</a></li>
              <li><a href="/YogaVillage"> AYURVEDA YOGA VILLAGE</a></li>
            
            </ul>
          </li>
          <li class="menu-has-children"><a href="">LEARNING PROGRAM</a>
            <ul>
              <li><a href="/AyurvedaLearning"> AYURVEDA LEARNING PROGRAM</a></li>
              <li><a href="/yoga"> YOGA</a></li>
              <li><a href="/Watsu"> WATSU</a></li>
              <li><a  href="/Kalarippayattu"> KALARIPPAYATTU</a></li>
             
            </ul>
          </li>
          <li><a href="/KTDC"> KTDC</a></li>
         
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header> */}






        <nav className="navbar navbar-expand-lg navbar-light bg-light stroke">
         
          <img className="navbar-brand logo" src={logo1} alt="Logo"></img>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link text-white"   href="/"> HOME</a>
                <span className="sr-only">(current)</span></li><li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"  href="#" id="navbarDropdownMenuLink" role="button"  aria-haspopup="true" aria-expanded="false">MEDICAL SPA</a>
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
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"  aria-haspopup="true" aria-expanded="false">RESORTS</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                  <a className="dropdown-item" href="/jungle-resorts">LUXURY JUNGLE RESORTS</a>
                  <a className="dropdown-item" href="/Hill-Resorts">HILL RESORTS</a>
                  <a className="dropdown-item" href="/Rain-Forest-resorts">RAIN FOREST RESORTS</a>
                  <a className="dropdown-item" href="/Econatural-resorts">ECO-NATURAL RESORTS</a>
                  <a className="dropdown-item" href="/Honeymoon-resorts">HONEYMOON RESORTS</a>

                </div></li><li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"  aria-haspopup="true" aria-expanded="false">AYURVEDA</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/Ayurveda"> AYURVEDA TREATMENTS</a>

                  <a className="dropdown-item" href="/Rajah"> AYURVEDA RAJAH HOSPITAL</a>
                  <a className="dropdown-item" href="/YogaVillage"> AYURVEDA YOGA VILLAGE</a>
                </div></li><li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"  aria-haspopup="true" aria-expanded="false">LEARNING PROGRAM</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/AyurvedaLearning"> AYURVEDA LEARNING PROGRAM</a>
                  <a className="dropdown-item" href="/yoga"> YOGA</a>
                  <a className="dropdown-item" href="/Watsu"> WATSU</a>
                  <a className="dropdown-item" href="/Kalarippayattu"> KALARIPPAYATTU</a>
                </div></li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/KTDC"> KTDC </a>
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
