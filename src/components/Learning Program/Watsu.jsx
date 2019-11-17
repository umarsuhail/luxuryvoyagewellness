import React, { Component } from 'react'
import KalaripayattuView from "./Components/KalaripayattuView";
import image1 from "../../images/LearningProgram/watsu.jpg";

export default class Watsu extends Component {
  render() {
    return (
      <div>
        <KalaripayattuView
          heading="WATSU"
   
          image1={image1}
         
          
        >
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <p>
                    Watsu is a form of aquatic bodywork used for deep relaxation and passive aquatic therapy. 
                    Watsu is characterized by one-on-one sessions in which a practitioner or therapist gently cradles, 
                    moves, stretches, and massages a receiver in chest-deep warm water.
                    </p>
                    <p>Watsu is performed in one-on-one pool sessions in chest-deep warm water. During a session, a provider 
                        (practitioner or therapist) gently cradles, moves, stretches, and massages a receiver (client or patient). 
                        A typical session consists of a progression of breath coordination, movement patterns in different positions,
                        and massage. Movement patterns including gentle cradling and rocking, more dynamic stretching and mobilization,
                         stillness, and specific mobilization techniques focused on the needs or condition of the receiver. A session 
                         may last anywhere from a few minutes to longer than an hour. During a session, the provider continually 
                         monitors the state of the receiver, mindful of subtle changes in muscle tension and respiration, and responsive 
                         to adapt the treatment accordingly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </KalaripayattuView >
      </div >
    )
  }
}
