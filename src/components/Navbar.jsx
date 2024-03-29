import React, { Component } from "react";
import "../css/navbar.scss";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      modalVisible: false,
      className: "",
      // showNavbar: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({ scrolling: false });
    } else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ scrolling: true });
    }
  };

  mouseOver = e => {
    console.log("mouse over");
    const NavLink = document.getElementsByClassName("nav-link");
    this.setState({
      className: " show"
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
        <header
          id="header"
          className={this.state.scrolling ? "header-scrolled" : "navbar-header"}
        >
          <div className="container-fluid ">
            <div id="logo" className="pull-left row">
              {/* <img style={{ maxWidth: "60px" }} src={logo1} alt="" title="" /> */}
              <span>
                <a href="#intro" className="scrollto">
                  luxuryvoyagewellness
                </a>
              </span>
            </div>
            <nav className="navbar  navbar-expand-lg nav-menu-container navbar-dark">
              <button
                className="navbar-toggler light"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="nav-menu sidebar">
                  <li className="menu-active nav-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="menu-has-children nav-item">
                    <a href="javascript:void(0)">MEDICAL SPA</a>
                    <ul>
                      <li>
                        <a href="/sha-wellness">SHA WELLNESS</a>
                      </li>
                      <li>
                        <a href="/ananda-himalaya">ANANDA HIMALAYA</a>
                      </li>
                      <li>
                        <a href="/BRENNERS-PARK-HOTEL-AND-SPA">
                          BRENNERS PARK-HOTEL AND SPA
                        </a>
                      </li>
                      <li>
                        <a href="/LEELA-RAVIZ">LEELA RAVIZ</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/PalaceResorts">PALACE RESORTS</a>
                  </li>

                  <li className="menu-has-children ">
                    <a href="javascript:void(0)">RESORTS</a>
                    <ul>
                      <li>
                        <a href="/jungle-resorts">LUXURY JUNGLE RESORTS</a>
                      </li>
                      <li>
                        <a href="/Hill-Resorts">HILL RESORTS</a>
                      </li>
                      <li>
                        <a href="/Rain-Forest-resorts">RAIN FOREST RESORTS</a>
                      </li>
                      <li>
                        <a href="/Honeymoon-resorts">HONEYMOON RESORTS</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-has-children">
                    <a href="javascript:void(0)">AYURVEDA</a>
                    <ul>
                      <li>
                        <a href="/Ayurveda">AYURVEDA TREATMENTS</a>
                      </li>
                      <li>
                        <a href="/Rajah"> AYURVEDA RAJAH HOSPITAL</a>
                      </li>
                      <li>
                        <a href="/YogaVillage"> AYURVEDA YOGA VILLAGE</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-has-children">
                    <a href="javascript:void(0)">LEARNING PROGRAM</a>
                    <ul>
                      <li>
                        <a href="/AyurvedaLearning">
                          {" "}
                          AYURVEDA LEARNING PROGRAM
                        </a>
                      </li>
                      <li>
                        <a href="/yoga"> YOGA</a>
                      </li>
                      <li>
                        <a href="/Watsu"> WATSU</a>
                      </li>
                      <li>
                        <a href="/Kalarippayattu"> KALARIPPAYATTU</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/KTDC"> KTDC</a>
                  </li>

                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
// import React, { Component } from "react";
// import "../css/navbar.scss";
// import logo1 from "../images/voyage.png";

// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <nav class="navbar sticky-top navbar-expand-lg bg-dark">
//           <div class="container">
//             <a class="navbar-brand" href>
//               <img src={logo1} style={{ maxWidth: 50 }} alt="logo1"></img>
//               <span className="text-white">Luxury Voyage Wellness</span>
//             </a>
//             <button
//               class="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <i class="fas fa-bars"></i>
//             </button>

//             <div class="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul class="navbar-nav mr-auto w-100 justify-content-end">
//                 <li class="nav-item active">
//                   <a class="nav-link" href="/">
//                     HOME <span class="sr-only">(current)</span>
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a href="" className="nav-link">
//                     MEDICAL SPA
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a className="nav-link" href="/sha-wellness">
//                     SHA WELLNESS
//                   </a>
//                 </li>

//                 <li class="nav-item">
//                   <a href="/ananda-himalaya" className="nav-link">
//                     ANANDA HIMALAYA
//                   </a>
//                 </li>

//                 <li class="nav-item">
//                 <a href="/LEELA-RAVIZ" className="nav-link">LEELA RAVIZ</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
// //       </div>
//     );
//   }
// }
