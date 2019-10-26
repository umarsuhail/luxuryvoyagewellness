import React, { Component } from "react";
import Flight from "../images/Flight.jpg";
// import Taxi from "../images/TAXI.jpg";
import Guide from "../images/travel.jpg";
import '../css/Specialities.scss'
import Modal from '../components/Modal'
import sreejith from '../images/sreejith.jpg'
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
        <h1 style={{margin:'30px auto'}}>Services</h1>
          <h6 style={{margin:'30px auto'}}>Through Luxury voyage wellness guest we try to give discount</h6>

        <div className="container specialities">
          <div className="speciality-icon column" >
          <i class="material-icons">
flight
</i>            <div className="card-body">
              <a href="#" className="btn btn-primary" onClick={this.openModal}>
               Flight Booking
              </a>
            </div>
          </div>
          <div className="speciality-icon column" >
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
          <div className="speciality-icon column">
          <i class="material-icons">
navigation
</i>            <div className="card-body">
              <a href="#" className="btn btn-primary" onClick={this.openModal}>
              Travel Guide
              </a>
            </div>
          </div>
        </div>
        {
        this.state.contactUs&&<Modal modalHandle={this.closeModal}/>}
        {/* <div className=" row gallery-container">
        <h3> BIO</h3>
      <div className=" col-lg-12 col-sm-12 col-md-12">
      <div className="col-lg-6 col-md-6 col-sm-6 float-left image-responsive">
          <img alt="bio-image" src={sreejith}>
          </img>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
         

<p>
  <strong>Sreejith Gopi</strong>Sreejith Gopi  CEO of LUXURY VOYAGE WELLNESS,
   Based in France and Kerala, India. Sreejith start his career as a yoga Instructor 
   He has permanent resident permits in France 
Sreejith worked at Privet luxury Yacht  and different Five star hotels he has visited more than 
80 countries as a traveller from that he got inspired to start travel and tourism and he wish to 
share his experiences and informations on Detox , Weight loose , Anti age, Adventure, 
Relax and other activities to guest

</p>
</div>
      </div>
         
         
        </div> */}
        <div style={{padding:20, margin:20,borderRadius:20, border:'1px solid 1px solid rgb(227, 224, 224)'}}>

        <h1 >BIO</h1>

<div className="row" style={{ padding: '0 50px' }}>
<div
className="float-left  col-sm-12 col-md-4 col-lg-4 float-left"
style={{
 alignSelf: "center",
}}
>
<img
 src={sreejith}
 alt="hotel-image"
 alt=""
 style={{width: '400px',
   borderRadius: '50%',
   float: 'right',
   border:'6px solid #e3e3e3' }}
/>
</div>
<div
className="float-right text-left col-sm-12 col-md-8 col-lg-8 float-right"
style={{
 alignSelf: "center"
}}
>
<h1>Sreejith Gopi</h1>
<br />
<p style={{lineHeight:'2.5'}}>CEO of LUXURY VOYAGE WELLNESS,
Based in France and Kerala, India. Sreejith start his career as a yoga Instructor 
He has permanent resident permits in France 
worked at Privet luxury Yacht  and different Five star hotels he has visited more than 
80 countries as a traveller from that he got inspired to start travel and tourism and he wish to 
share his experiences and informations on Detox , Weight loose , Anti age, Adventure, 
Relax and other activities to guest</p>
</div>
</div>
        </div>
         
      </div>
    );
  }
}
