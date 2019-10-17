import React, { Component } from "react";
import Flight from "../images/Flight.jpg";
import Taxi from "../images/TAXI.jpg";
import Guide from "../images/travel.jpg";
import '../css/Specialities.scss'
import Modal from '../components/Modal'
export default class Specialities extends Component {
  constructor(props){
    super(props)
    this.state={
      contactUs:false
    }
  }
  openModal = () =>{
    this.setState({
      contactUs:!this.state.cntactUs
    })
  }
  closeModal = () =>{
    this.setState({
      contactUs:false
    })
  }
  render() {
    return (
      <div>
          <h6 style={{margin:'30px auto'}}>Through Luxury voyage wellness guest we try to give discount</h6>

        <div className="container specialities">
          <div className="col-sm-12 card" >
            <img className="card-img-top" src={Flight} alt="Card image cap" />
            <div className="card-body">
              <a href="#" className="btn btn-primary" onClick={this.openModal}>
               Flight Booking
              </a>
            </div>
          </div>
          <div className="col-sm-12 card" >
            <img className="card-img-top" src={Taxi} alt="Card image cap" />
            <div className="card-body">
              <a href="#" className="btn btn-primary" onClick={this.openModal}>
              Taxi services
              </a>
            </div>
          </div>
          <div className="col-sm-12 card">
            <img className="card-img-top" src={Guide} alt="Card image cap" />
            <div className="card-body">
              <a href="#" className="btn btn-primary" onClick={this.openModal}>
              Travel Guide
              </a>
            </div>
          </div>
        </div>
        {
        this.state.contactUs&&<Modal modalHandle={this.closeModal}/>}
        <div className="tz-gallery container gallery-container">
          <h3> BIO</h3>

          <p>
            <strong>Sreejith Gopi</strong> (Yoga Acharya) CEO of LUXURY VOYAGE
            WELLNESS Based in France and Kerala ,India Sreejith start his career
            as a yoga Instructor He has permanent resident permits in France
            Sreejith is working in Privet luxury yacht and he visited more than
            80 countries as a traveller he got inspired to start travel and
            tourism and he want to share his experience and information where
            people can detox , weight loose , anti age, adventure and relax
          </p>
        </div>
      </div>
    );
  }
}
