import React, { Component } from 'react'
import View from "./Components/View";
import image1 from "../../images/LearningProgram/gna1.jpg";

export default class Yoga extends Component {
  render() {
    return (
      <div>
        <View
          heading="YOGA"
   
          image1={image1}
         
          
        >
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <p>
                    At Vinyasa Yogashala, the Yoga Courses offered, like 100,200 & 300 hours 
                    Best Yoga Teacher Training in India are certified by Yoga Alliance. 
                    The primary focus of Vinyasayogashala is the practice of Vinyasa & Hatha Yoga. 
                    Additional training is provided in Hatha Yoga as the essential foundation of 
                    the practice of yoga. In compliance with certification requirements, our 
                    Vinyasa training is supplemented with studies in Anatomy, Yogic Physiology, 
                    Adjustment & Alignment of Asana, Shatkarma, Ayurveda, Meditation, Pranayama, 
                    Mantra, and Swara Yoga.
                    </p>
                    <p>Vinyasa Yogashala is located in Rishikesh, the world capital of yoga. 
                        Along the holy river Ganga and within the beautiful foothills of the 
                        Himalayan mountains, Rishikesh is the perfect place to experience the 
                        practice of yoga and immerse yourself in the historic culture of India.
                        In Vinyasa Yogashala’s Yoga Teacher Training India program, you will 
                        learn not only to become a yoga teacher, but you will also cultivate a 
                        spiritual practice to last for a lifetime.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </View >
      </div >
    )
  }
}
