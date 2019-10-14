import React, { Component } from 'react'
import View from "./Components/View";
import image1 from "../../images/leela/leela1.jpg";
import image2 from "../../images/leela/leela2.jpg";
import image3 from "../../images/leela/leela3.jpg";
import image4 from "../../images/leela/leela4.jpg";
import Programs from "./Components/Programs";
import leelalife1 from "../../images/leela/leelalife1.jpg";
import leelalife2 from "../../images/leela/leelalife2.jpg";
import leelalife3 from "../../images/leela/leelalife3.jpg";
import leelawellness from "../../images/leela/leelawellness.jpg";
import leelastress from "../../images/leela/leelastress.jpg";




export default class LeelaRaviz extends Component {
    render() {
        return (
            <div>
            <View
              heading="LEELA RAVIZ"
              videoID="e4jqMgG7rXA"
              image1={image1}
              image2={image2}
              image3={image3}
              image4={image4}
              programs={
                <Programs
                  tab1=" Lifestyle Package"
                  tab2="Wellness Packages"
                  tab3="Therapeutic Packages"
                  tab4="Essence of Wellness"
                  tab1Content={
                  
                    <div>
                      <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                        <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                          <h3 className="text-center">SKIN CARE-BEAUTY THERAPY
                                              DURATION: 7 -14 DAYS</h3>
                          <p>
                          A relaxation and rejuvenation plan for the Skin, 
                          using herbal oils and medicines, which nourishes 
                          and tones the skin, underlying structures and body
                           tissues. Treatments provide release of day-to-day 
                           stress and calm the mind and relax the body.
                            Also included are massages and treatments that
                             encourage purgation and purify the blood which
                              is very important in maintaining a healthy skin. 
                              Due to the intricacy of the program a detoxification 
                              diet is recommended for success.
                        </p>
                        <h3 className="text-center">TREATMENT INCLUSIONS</h3>
                        <li>Mukhalepam with varnya herbs</li>
                        <li> Ksheeradhara</li>
                        <li> Kashayadhara</li>
                        <li> Anjanam</li>
                        <li> Udhwarthanam</li>
                        <li> Ksheeradhoomam</li>
                        <li> Alepam-Whole body pack</li>
                        <li> Dinacharya</li>
                        <li> Thanusree</li>
                        <li>  Nasyam</li>
                        <li>  Virechanam-Induced purgation</li>
                        <li>  Vasthi- Oil enema</li>
                        <li>   Rakthamoksham-Blood Letting</li>
                        <li>  Njavara Pinda Swedam</li>
                        <li>   Therapeutic Yoga for skin health</li>
                        </div>
                        <img
                          className="col-lg-6 col-md-6 col-sm-12 float-right"
                          src={leelalife1}
                        ></img>
                      </div>
    
    
    
                      <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                        <img
                          className="col-lg-6 col-md-6 col-sm-12 float-left"
                          src={leelalife2}
                        ></img>
                        <div className="col-lg-6 col-md-6 col-sm-12 float-right">
                          <h3>REJUVENATE DURATION: 7 DAYS</h3>
                          <p>
                          One whose dosha (3 bio-energies), Agni (metabolic fire), 
                          Dhathu (tissues), mala (waste products), are in equilibrium
                           and who has cheerful Atma (Soul), Indriya (sense organs) 
                           and manas (mind) is considered as healthy. This package 
                           focuses on the preventive aspect of the body from illness 
                           and a relaxation and rejuvenation plan for the body and mind
                            using medicated oils and medicines which nourishes the body 
                            tissues. Treatments provide release of day-to-day stress and 
                            calm the mind and relax the body. Also included are massages 
                            and treatments that encourage purgation and purify the blood.
                             Due to the intricacy of the program a detoxification diet
                              based on the individual body constitution is recommended 
                              for success. Rasayana Chikitsa (Rejuvenation therapy) comes
                               under the “Swastha Vritha” or preventive program in Ayurveda.
                                This treatment program helps to rejuvenate, recharge and revitalize your body and mind.
                                   </p>
                                   <h3 className="text-center">TREATMENT INCLUSIONS</h3>
                                  <li> Abhyanga Snana</li>
                              <li>    Shirodhara</li>
                              <li>Choorna Pindasweda</li>
                              <li>Pathra Pindasweda</li>
                              <li>Ksheeradhara</li>
                              <li>Njavara Pindasweda</li>
                              <li>Chavuttithirummu</li>
                              <li>Kalari</li>
                              <li>Dinacharya</li>
                              <li>Thanusree</li>
                              <li>Virechanam – Induced purgation</li>
                              <li>Vasthi – Oil enema</li>
                              <li>Therapeutic Yoga and Meditation for rejuvenation</li>
                        </div>
                      </div>
    
    
    
    
                      <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                        <img
                          className="col-lg-6 col-md-6 col-sm-12 float-right"
                          src={leelalife3}
                        ></img>
                        <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                          <h3 className="text-center">DE-STRESS DURATION: 7 DAYS</h3>
                          <p>
                          This package focuses on the preventive aspect of the body from
                           illness and a relaxation and rejuvenation plan for the body 
                           and mind using medicated oils and medicines which nourishes 
                           the body tissues. Treatments provide release of day-to-day stress
                            and calm the mind and relax the body. Also included are massages
                             and treatments that encourage purgation and purify the blood. A
                              body and mind balancing diet based on the individual body
                               constitution is recommended for better results.
                        </p>
                        <h3 className="text-center">TREATMENT INCLUSIONS</h3>
                       <li> Abhyanga Snana</li>
                       <li>Shirodhara</li>
                       <li>Ksheeradhara</li>
                       <li>Thakradhara</li>
                       <li>Njavara Pindasweda</li>
                       <li>Thalapothichil</li>
                       <li>Chavuttithirummu</li>
                       <li>Kalari</li>
                       <li>Virechanam</li>
                       <li>Therapeutic Yoga and Meditation for de stress</li>
                        </div>
    
                      </div>
                    </div >

                  }

                  tab2Content={
                    <div>
                      <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                        <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                          <h3 className="text-center">WEIGHT LOSS DURATION: 14 – 21 DAYS</h3>
                          <p>
                          The program includes weight management treatments based on the principle 
                          that losing weight is not about starvation but balancing the fat metabolism. 
                          Our weight reduction programme is designed to stimulate weight loss and 
                          recalibrate your body. Slimming therapy is specifically designed to reduce 
                          body weight and give good shape to body. Therapies for this are tailor made 
                          to suit the body’s constitution based on tridosha theory. Body massages using 
                          natural herbal powders and prescribed Ayurvedic medicines are intended for 
                          detoxification also. A strict special slimming diet is also advised along with 
                          few exercises. For optimum results a special weight loss diet is advised which 
                          is to be strictly followed.
                                </p>
                                <h3 className="text-center">TREATMENT INCLUSIONS</h3>
                              <li>  Udhwarthanam</li>
                              <li> Dhanyamladhara</li>
                              <li> Choorna Pindaswedam</li>
                              <li> Kalari</li>
                              <li> Virechanam – Medicated Purgation</li>
                              <li> Vasthi – Specific Weight loss Kashaya (Decoction) Enema</li>
                              <li> Special cardio work outs by trained Gym Instructors</li>
                              <li> Therapeutic Weight Loss Yoga               </li>      
                        </div>
                        <img
                          className="col-lg-6 col-md-6 col-sm-12 float-right"
                          src={leelawellness}
                        ></img>
                      </div>
                      </div>


                      }

                      tab3Content={
                        <div>
                          <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                            <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                              <h3 className="text-center">SPINE CARE DURATION: 14 – 21 DAYS</h3>
                              <p>
                              This package is to prevent spinal disorders and to cure low back ache, 
                              inter vertebral disc prolapse, Sciatica, Cervical Spondylosis, 
                              Brachial neuralgia and other associated ailments.
                                    </p>
                                    <p>
                                    Special Package for IT Professionals Pain Management| 
                                    De-stress |Management for WRULD – Special Package for IT Professionals.

                                    </p>
                                    <p>
                                    Work-related neck and upper limb disorders (WRULDs) are impairments of 
                                    bodily structures such as to a tendon, nerve, muscle, joint, bursa or 
                                    the localized blood circulation system. Principally, they are caused 
                                    by the performance of work and by the effects of the immediate environment 
                                    where that work is carried out. Symptoms include pain and/or reduced ability 
                                    to function normally. As the term WRULDs suggests, any region of the neck, 
                                    shoulders, upper arms, elbows, forearms, wrists and hand can be affected. 
                                    We have excellent package for IT professionals/businessmen to relive from 
                                    their tensions, stress and strain. We are doing the therapies as neural 
                                    stimulant and stress relief. Be stress free with our procedures and increase your working potential.
                                    </p>
                                    <h3 className="text-center">TREATMENT INCLUSIONS</h3>
                                  <li>  Abhyanga Snana</li>
                                  <li> Shirodhara</li>
                                  <li>  Udhwarthanam</li>
                                  <li> Njavara Pindaswedam</li>
                                  <li> Ksheeradhara</li>
                                  <li> Kashayadhara</li>
                                  <li> Nasyam-Nasal Medication</li>
                                  <li> Virechanam-Induced purgation               </li>      
                                 <li> Vasthi-Both Oil and Decoction enema</li>
                                 <li>Daily a session of Therapeutic Marma along with the usual treatment time.</li>
                                 <li>Therapeutic Yoga and Meditation</li>



                            </div>
                            <img
                              className="col-lg-6 col-md-6 col-sm-12 float-right"
                              src={leelastress}
                            ></img>
                          </div>
                          </div>
    
    
                          }


    
                 
                ></Programs >
              }
            >
              <div className="wpb_column vc_column_container vc_col-sm-6">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element ">
                      <div className="wpb_wrapper">
                        <p>
                        Guided by the philosophy of our Chairman and CEO, the Raviz 
                        Group has set out on a course to present the traditions,
                        culture and hospitality of Kerala to the visiting traveler on a platter.
                        </p>
                        <p>
                        Having set out on this endeavor, we aspire to bring alive our philosophy 
                        of Celebrating India that will reflect through all our products and 
                        services that defines the fabric of the Raviz across the board.
                        </p>
                        <p>
                        While you enjoy the traditional and authentic Kerala warmth that 
                        undoubtedly engulfs you as you walk into any property, a contemporary 
                        presentation will place it in perspective for you every step of this 
                        journey with us. And we see this across properties already such as 
                        the Raviz Resort & Spa Ashtamudi, a labour of love 12 years in the making, 
                        the Raviz Resort & Spa Kadavu and the Leela Raviz Kovalam–that hold the ethos 
                        in its very fabric.
                        </p>
                        <p>Our properties are built with a focus on sustainable models of products 
                            and services our services will be nothing short of the best in class and comfort.</p>
                            <p>
                            So sit back, relax, and enjoy the heavenly facilities unrolled exclusively for you – 
                            here is the place where the sky meets the water, as the horizon melts.
                            </p>
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
