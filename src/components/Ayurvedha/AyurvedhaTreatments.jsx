import React, { Component } from 'react'
import CommonLayout from '../CommonLayout'
import treatment1 from '../../images/treatment1.png' 
import treatment2 from '../../images/treatment2.png' 
import treatment3 from '../../images/treatment3.jpg' 

export default class AyurvedhaTreatments extends Component {
    render() {
        return (
            <div>
               <CommonLayout
               image1={treatment1}
               image2={treatment2}
               image3={treatment3}
               contentTitle=""
               /> 
            </div>
        )
    }
}
