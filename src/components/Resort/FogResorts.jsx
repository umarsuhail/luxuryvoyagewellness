import React, { Component } from 'react'
import BackgroundImage from '../../images/forest.jpg'
import View from './Components/View'
import Cards from '../Cards'
import vaithryImage from '../../images/vaithri-card.jpg'

export default class FogResorts extends Component {
    render() {
        return (
            <div>
<View heading="Fog Resorts" BackgroundImage={BackgroundImage}/>
<Cards title="Vaithri Resorts" cardImage={vaithryImage} 
content ="Located in the Western Ghats in Wayanad district, Vythiri Resort offers an Original 
Rainforest Experience. The Resort is Surrounded by Natural Streams and located almost 3.5Kms 
inside the 150 acres of plantation and adjoining the rain forests.Rustic Themed Accommodations,
Tree Houses and Independent Cottages including Pool Villas are located amidst the jungle offers 
great opportunity to experience nature at its best. "></Cards>
            </div>
        )
    }
}
