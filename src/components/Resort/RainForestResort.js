import React, { Component } from 'react'
import BackgroundImage from '../../images/forest.jpg'
import View from './Components/View'
import { Link } from "react-router-dom";
import vaithryImage from '../../images/vaithri-card.jpg'
import { withRouter } from 'react-router'
import ResortLayout from "./Components/ResortLayout";

 class FogResorts extends Component {
    handleClick=()=>{
        this.props.history.push('/Vaithri-resorts')
    }
    render() {
        return (
            <div>
<View heading="Rain Forest Resorts" BackgroundImage={BackgroundImage}/>
<ResortLayout
          image1={vaithryImage}
          contentTitle="Vaithri Resorts"
          content="Located in the Western Ghats in Wayanad district, Vythiri Resort offers an Original 
Rainforest Experience. The Resort is Surrounded by Natural Streams and located almost 3.5Kms 
inside the 150 acres of plantation and adjoining the rain forests.Rustic Themed Accommodations,
Tree Houses and Independent Cottages including Pool Villas are located amidst the jungle offers 
great opportunity to experience nature at its best."
        >
          <Link to="/Vaithri-resorts">
            <button className="btn">View More</button>
          </Link>
        </ResortLayout>
            </div>
        )
    }
}
export default withRouter(FogResorts)