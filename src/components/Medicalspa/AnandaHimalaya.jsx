import React, { Component } from "react";
import View from "./Components/View";
import image1 from "../../images/ananda/ananda1.jpg";
import image2 from "../../images/ananda/ananda2.jpg";
import image3 from "../../images/ananda/ananda3.jpg";
import image4 from "../../images/ananda/ananda4.jpg";
import Programs from "./Components/Programs";
import tabimage1 from "../../images/ananda/ananda-tab-img1.jpg";
import tabimage2 from "../../images/ananda/ananda-tab-img2.jpg";
import tabimage3 from "../../images/ananda/ananda-tab-img3.jpg";

export default class AnandaHimalaya extends Component {
  render() {
    return (
      <div>
        <View
          heading="ANANDA HIMALAYA"
          videoID="Pb9CxO9niP0"
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          programs={
            <Programs
              tab1=" Wellness Programmes"
              tab2="Spa at Ananda"
              tab3="Other Services"
              tab1Content={
                // <div class="vc_tta-panel-body text-left">
                //   <div class="vc_empty_space">
                //     <span class="vc_empty_space_inner"></span>
                //   </div>
                //   <div class="vc_row wpb_row vc_inner vc_row-fluid">
                //     <div class="wpb_column vc_column_container col-sm-6 float-left">
                //       <div class="vc_column-inner ">
                //         <div class="wpb_wrapper">
                //           <div class="wpb_text_column wpb_content_element ">
                //             <div class="wpb_wrapper">
                //               <h3>ACTIV-FITNESS</h3>
                //               <p>
                //                 The Active Programme integrates the best of
                //                 indoor fitness workouts along with outdoor
                //                 activities such as personal fitness training,
                //                 guided outdoor treks, yoga, aqua fitness and
                //                 therapeutic spa experiences to enhance muscle
                //                 tone and cardiovascular fitness.
                //                 The&nbsp;comprehensive programme of 7 and 14
                //                 nights work on intensive core fitness in
                //                 addition to treks and full body therapeutic
                //                 massages. In partnership with Sumaya, a pioneer
                //                 in the fitness industry, the programmes are
                //                 individualized, consultative and follow a goal
                //                 orientated fitness approach.
                //               </p>
                //               <p>
                //                 <strong>Starts from</strong>: 3, 5, 7, 14, 21
                //                 Nights
                //               </p>
                //             </div>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //     <div class="wpb_column vc_column_container vc_col-sm-6">
                //       <div class="vc_column-inner ">
                //         <div class="wpb_wrapper">
                //           <div class="wpb_single_image wpb_content_element vc_align_right">
                //             <figure class="wpb_wrapper vc_figure">
                //               <div class="vc_single_image-wrapper   vc_box_border_grey">
                //                 <img src={tabimage1}></img>
                //               </div>
                //             </figure>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                //   <div class="vc_empty_space">
                //     <span class="vc_empty_space_inner"></span>
                //   </div>
                //   <div class="vc_row wpb_row vc_inner vc_row-fluid">
                //     <div class="wpb_column vc_column_container col-sm-6 float-left" >
                //       <div class="vc_column-inner ">
                //         <div class="wpb_wrapper">
                //           <div class="wpb_single_image wpb_content_element vc_align_left">
                //             <figure class="wpb_wrapper vc_figure">
                //               <div class="vc_single_image-wrapper   vc_box_border_grey">
                //                 <img src={tabimage2}></img>
                //               </div>
                //             </figure>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //     <div class="wpb_column vc_column_container col-sm-6 float-left">
                //       <div class="vc_column-inner ">
                //         <div class="wpb_wrapper">
                //           <div class="wpb_text_column wpb_content_element ">
                //             <div class="wpb_wrapper">
                //               <h3>AYURVEDIC REJUVENATION</h3>
                //               <p>
                //                 Ananda’s Ayurvedic Rejuvenation Programme is
                //                 designed to suit every individual’s personal
                //                 needs. The programme aims at improving vitality
                //                 of one’s body through Panchakarma treatments
                //                 along with complementing Ayurvedic treatments,
                //                 controlled diet and yoga. The programme results
                //                 in improved immunity and energy, better
                //                 metabolism and healthy, glowing refreshed skin.
                //               </p>
                //             </div>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                //   <div class="vc_empty_space">
                //     <span class="vc_empty_space_inner"></span>
                //   </div>
                //   <div class="vc_row wpb_row vc_inner vc_row-fluid col-12">
                //     <div class="wpb_column vc_column_container float-left col-sm-6">
                //       <div class="vc_column-inner ">
                //         <div class="wpb_wrapper">
                //           <div class="wpb_text_column wpb_content_element ">
                //             <div class="wpb_wrapper">
                //               <h3>DETOX</h3>
                //               <p>
                //                 Ananda’s Detox Starter for 5 nights is a perfect
                //                 introduction to those who have not experienced
                //                 an Ananda Detox before. Ananda’s comprehensive
                //                 Detox Programmes for 7, 14 &amp; 21 nights rest
                //                 the digestive system through controlled eating
                //                 of whole organic foods, improves the circulation
                //                 of the blood and lymphatic systems, filters
                //                 toxins from the body and finally nourishes it
                //                 with essential nutrients.
                //               </p>
                //               <p>
                //                 <strong>Detox Starter</strong>: 5 Nights
                //               </p>
                //               <p>
                //                 <strong>Holistic Detox:</strong>&nbsp;7, 14, 21
                //                 Nights
                //               </p>
                //             </div>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //     <div class="wpb_column vc_column_container col-sm-6">
                //       <div class="vc_column-inner ">
                //         <div class="wpb_wrapper">
                //           <div class="wpb_single_image wpb_content_element vc_align_right">
                //             <figure class="wpb_wrapper vc_figure">
                //               <div class="vc_single_image-wrapper   vc_box_border_grey">
                //                 <img src={tabimage3}></img>
                //               </div>
                //             </figure>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                //   <div class="vc_empty_space">
                //     <span class="vc_empty_space_inner"></span>
                //   </div>
                // </div>
                <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                  <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                    <h3 className="text-center">ACTIV-FITNESS</h3>
                    <p>
                      The Active Programme integrates the best of indoor fitness
                      workouts along with outdoor activities such as personal
                      fitness training, guided outdoor treks, yoga, aqua fitness
                      and therapeutic spa experiences to enhance muscle tone and
                      cardiovascular fitness. The&nbsp;comprehensive programme
                      of 7 and 14 nights work on intensive core fitness in
                      addition to treks and full body therapeutic massages. In
                      partnership with Sumaya, a pioneer in the fitness
                      industry, the programmes are individualized, consultative
                      and follow a goal orientated fitness approach.
                    </p>
                  </div>
                  <img
                    className="col-lg-6 col-md-6 col-sm-12 float-right"
                    src={tabimage1}
                  ></img>
                </div>
                
                
              }
            ></Programs>
          }
        >
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <p>
                      Ananda is an award-winning luxury destination spa resort
                      in India situated at the Himalayan foothills in Northern
                      India. Located on a 100 acre Maharaja’s Palace Estate,
                      Ananda is surrounded by graceful Sal forests and overlooks
                      the spiritual town of Rishikesh and the Ganges river
                      valley. Ananda, one of the best luxury wellness retreats
                      in India, integrates traditional Ayurveda, Yoga and
                      Vedanta with international wellness experiences, fitness
                      and healthy organic cuisine to restore balance and
                      harmonize energy.
                    </p>
                    <p>
                      Located in the tranquil Himalayan foothills, close to the
                      mythological cities of Haridwar and Rishikesh, surrounded
                      by graceful Sal forests, overlooking the peaceful Ganga as
                      it meanders into the distance. Ananda is the spiritual
                      pathway to the ultimate, discovered through the union of
                      body, mind and soul.
                    </p>
                    <p>
                      It is not just a retreat that will leave you breathless
                      with the enchantment of its surroundings, but assists in
                      redefining lifestyles to include the well-known
                      traditional Indian wellness regimes of Ayurveda, Yoga and
                      Vedanta combined with best of International Wellness
                      Experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </View>
      </div>
    );
  }
}
