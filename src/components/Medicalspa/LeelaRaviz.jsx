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
import HotelDetails from "./Components/HotelDetails";
import leelabeach from "../../images/leela/leelabeach.jpg";
import leelagarden from "../../images/leela/leelagarden.jpg";
import leelaclub from "../../images/leela/leelaclub.jpg";
import leeladuplex from "../../images/leela/leeladuplex.jpg";
import leelapresidential from "../../images/leela/leelapresidential.jpg";





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

          Hotels={
            <HotelDetails
              Tab1="Beach View"
              Tab2="Garden View"
              Tab3="Club Room"
              Tab4="Club Duplex Suite"
              Tab5="Presidential Suite"
              tab1Content={
                <div>
                  <img src={leelabeach} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>
                      These cliff-top rooms come to almost 500 sq ft in size.
                      Beach View
                          </strong>
                    </h4>
                  </div>
                  <h6>
                    <p>
                    These cliff-top rooms come to almost 500 sq ft in size. Located 
                  in the main block of the hotel, the Beach View Superior Rooms have 
                  private sundecks attached, which look out into spectacular views 
                  of the Kovalam shoreline. Sublime sunrises and resplendent sunsets 
                  are now just a short walk away.
                    </p>
                  
                  <p>
                  Adorned with the traditional Kerala décor, and leaning towards the 
                  architectural style of the land, these rooms are fitted with modern 
                  amenities like mini bar, posturepedic beds and walk-in wardrobe.
                  </p>
                  <p>
                  Responsive climate control, high-speed internet access/Wi-Fi internet 
                  connectivity, an HD TV and in-room electronic safes, in-room dining, 
                  laundry, concierge services and doctor-on-call are other amenities 
                  you can look forward to in these rooms.
                  </p>
                      </h6>
                </div>
              }
              tab2Content={
                <div>
                  <img src={leelagarden} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>You could check into these rooms if privacy is one of your primary requirements.
                      Garden View </strong>
                    </h4>
                  </div>
                  <h6>
                    <p>
                    You could check into these rooms if privacy is one of your primary 
                  requirements. Secluded from the main block of the hotel, these 475 
                  sq ft rooms are located on the beach level. Private sundecks attached 
                  to these rooms open out to the well-manicured lawns in the hotel. 
                  Put on your sandals and step out into the sand—the beach is just a short walk away.
                    </p>
                 
                  <p>
                  The Garden View Pavilion rooms come with their own secluded pool 
                  and lawns and look out at the verdant coconut groves around.
                  </p>
                  <p>
                  The rooms have a traditional Kerala décor, understated and neutral, 
                  which tastefully combines with the modern amenities like mini bar, 
                  a walk-in closet and posturepedic beds. Walk into this heaven and 
                  cut out the crowd of the world behind. Book that ideal holiday you 
                  have waited for all along.
                    </p>
                      </h6>
                </div>
              }

              tab3Content={
                <div>
                  <img src={leelaclub} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>Almost double the size of the Club Room
                      Club Suite</strong>
                    </h4>
                  </div>
                  <h6>
                    <p>
                    Almost double the size of the Club Room, the Club Suites offer 
                  all the advantages of the Club and some more. The décor of the 
                  room comprises linear, minimalistic designs blended with a mix 
                  of contemporary chic and old-world charm. Each room features an 
                  extended work desk that looks out at the ocean ahead, a state-
                  of-the-art LCD flat screen TV and DVD player with a choice of 
                  movies and music, wireless internet access and an electronic safe.
                    </p>
                  
                  <p>
                  To ensure a relaxed slumber experience, we have provided down 
                  feather pillows and duvets, as also a pillow-menu option, luxury 
                  posture supporting mattress and plush linen.
                  </p>
                  <p>
                  With a five-feature bathroom that lets daylight stream in and 
                  twin-head massage showerheads, private sundeck that comes with 
                  its own sun bed, we assume the hardest part would be to step 
                  back into reality when you check out of these suites.
                  </p>
                      </h6>
                </div>
              }

              tab4Content={
                <div>
                  <img src={leeladuplex} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>Enter our Duplex Suite and be mesmerised by the essence of its unhurried luxury
                      Club Duplex Suite</strong>
                    </h4>
                  </div>
                  <h6>
                    <p>    Enter our Duplex Suite and be mesmerised by the essence of its unhurried luxury. 
                  This two-level suite features a living room and private balcony on one level, 
                  and an opulent bedroom on the next, looking out into the Arabian Sea.</p>
              
                  <p>Wake up to the wafts of breeze blowing in from the Arabian Sea and head to 
                    the Club Café for breakfast. You may even choose to have breakfast in bed. 
                    While away time watching movies from a selection of DVDs, on request, and 
                    spend a languid evening enjoying hi-tea with your dear ones at the Living Room.
                  </p>
                  <p>
                  Besides pick up and drop in our luxury sedan, guests in the suite have exclusive 
                  access to fine dining, spa and fitness centre, the ocean-rim infinity pool and 
                  library with cigar room. The stay in this 1291 sq ft suite comes with complimentary 
                  use of the clothes-pressing services as well as the gym and infinity pool.
                  </p>
                      </h6>
                </div>
              }

              tab5Content={
                <div>
                  <img src={leelapresidential} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>The Presidential Suites comprise a two-bedroom suite with king-size beds, and a separate living and dining areas. Presidential Suite</strong>
                    </h4>
                  </div>
                  <h6>
                    <p> The Presidential Suites comprise a two-bedroom suite with king-size beds, and a 
                  separate living and dining areas. The décor in the suites combine local tropical 
                  architecture and contemporary swank. The spaces are fitted with modern amenities 
                  like TV and DVD, coffee and tea maker, a well-stocked mini bar and a 24-hour 
                  personal butler for comfort.</p>
                 
                  <p>
                  Dramatically perched on a rocky ledge, with private sun decks, 
                  these 1506 sq ft suites are a short walk from the beach. Strap 
                  on your sandals and head out to catch the most captivating sunsets. 
                  The beaches are relatively safe, and the waters, reassuringly warm.
                  </p>
                  <p>
                  Guests can choose to have breakfast at the Club Café or opt for 
                  in-room dining. Evening high tea, complementary use of clothes-
                  pressing services and the gym and ocean-rimmed infinity pool add 
                  to the living experience.
                  </p>
                      </h6>
                </div>
              }
            />
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
