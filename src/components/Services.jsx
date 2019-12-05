import React, { Component } from 'react'
import Modal from '../components/Modal'
import Guide from "../images/travel.jpg";
import Flight from "../images/Flight1.jpg";
import ayurveda from '../images/ayurveda.jpg'
export default class Services extends Component {
    constructor(props){
        super(props)
        this.state={
            contactUs:false
        }
    }
    closeModal = () =>{
        this.setState({
            contactUs:false
        })
    }
    openModal = () =>{
        this.setState({
            contactUs:true
        })
    }
    render() {
        return (
            <div className="services">
                   <h1 style={{padding:'30px'}}>Services</h1>

                   <div className="row" >
                   <h6 style={{margin:'30px auto'}}>Through Luxury voyage wellness guest we try to give discount</h6>

<div className="container specialities row" style={{margin:'auto'}}>
  <div className="speciality-icon col-lg-4 col-sm-12" >
  <i class="material-icons">
flight
</i>            <div className="card-body">
      <a href="#" className="btn btn-primary" onClick={this.openModal}>
       Flight Booking
      </a>
    </div>
  </div>
  <div className="speciality-icon col-lg-4 col-sm-12" >
    {/* <img className="card-img-top" src={Taxi} alt="Card image cap" /> */}
    <i class="material-icons">
directions_car
</i>
    <div className="card-body">
      <a href="#" className="btn btn-primary" onClick={this.openModal}>
      Taxi services
      </a>
    </div>
  </div>
  <div className="speciality-icon col-lg-4  col-sm-12">
  <i class="material-icons">
navigation
</i>            <div className="card-body">
      <a href="#" className="btn btn-primary" onClick={this.openModal}>
      Travel Guide
      </a>
    </div>
  </div>
                   </div>
        
          <div className="row" style={{ padding: 20 }}>
        <div
          className="float-left  col-sm-12 col-md-6 col-lg-6 float-left "
          style={{
            alignSelf: "center"
          }}
        >
          <img
            src={ayurveda}
            alt="hotel-image"
            alt=""
            style={{ width: "100%",maxWidth:'500px',borderRadius:'50px' }}
            className="hover-zoomin"
          />
        </div>
        <div
          className="float-right text-left col-sm-12 col-md-6 col-lg-6 float-right"
          style={{
            alignSelf: "center"
          }}
        >
          <h1>AYURVEDA TREATMENT</h1>
          <br />
          <p>Choose from some of the most popular Ayurveda packages in Kerala. Each package comes with stay in a luxurious suite,
               a doctor’s consultation, therapies administered in your in-suite spa, all meals, yoga/ meditation classes and much more.
                If you need help deciding which package is right for you – 
              take a look at our ayurveda treatment packages India brochure on the tariffs page or write to us at info@luxuryvoyagewellness.com!</p>
        </div>
      </div>
        </div>
        {
        this.state.contactUs&&<Modal modalHandle={this.closeModal}/>}
            </div>
        )
    }
}
