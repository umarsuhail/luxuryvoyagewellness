import React, { Component } from 'react'
import View from "./Components/View";
import image1 from "../../images/LearningProgram/kizhi.jpg";
import Programs from "./Components/Programs";
import aytreatment from "../../images/LearningProgram/aytreatment.png";
import aytreatment2 from "../../images/LearningProgram/aytreatment2.jpg";
import aytreatment3 from "../../images/LearningProgram/aytreatment3.jpg";
import HotelDetails from "./Components/HotelDetails";
import gams from "../../images/LearningProgram/gams.jpg";
import galc from "../../images/LearningProgram/galc.jpg";
import gkprm from "../../images/LearningProgram/gkprm.jpg";
import ganc from "../../images/LearningProgram/ganc.jpg";
import gamc from "../../images/LearningProgram/gamc.jpg";
import gabp from "../../images/LearningProgram/gabp.jpg";
import gacy from "../../images/LearningProgram/gacy.jpg";
import gapp from "../../images/LearningProgram/gapp.png";
import ABHYANGAM from "../../images/LearningProgram/ABHYANGAM.jpg";
import Steambath from "../../images/LearningProgram/Steambath.jpg";
import yoga from "../../images/LearningProgram/yoga.jpg";
export default class AyurvedhaLearning extends Component {
  render() {
    return (
      <div>
        <View
          heading="AYURVEDA LEARNING PROGRAM"
   
          image1={image1}
          image2={image1}
          image3={image1}
          image4={image1}
          programs={
            <Programs
              tab1=" AYURVEDA TREATMENTS KERALA"
              tab2="GREENS KERALA AYURVEDIC MASSAGES"
              tab3="CHAKRA MARMA MASSAGE"
              tab4="YOGA THERAPY & TREATMENT"
              tab1Content={

                <div>
                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                      {/* <h3 className="text-center">SKIN CARE-BEAUTY THERAPY
                                              DURATION: 7 -14 DAYS</h3> */}
                      <p>
                        The Ayurvedic philosophy of achieving “prefect health”
                        has been an inspiration in developing a unique and well-
                        devised system at Greensayurveda. Ayurveda treatments Kerala
                        gives equal importance to the body, mind and soul, offering
                        holistic treatments based on bodily constitution, mental makeup,
                        diet pattern and work schedule.
                        </p>
                      <p>Here at Greens Ayurveda ashram, Kerala, it is not only important
                        to attain a state of “perfect health” but to “protect the health of a healthy person”.
                        </p>
                      <p>
                        Ayurveda is a lifestyle- And to achieve perfect health, Panchakarma-Purifying Process,
                        Rejuvenation Treatments, Ayurvedic Herbal Preparations, Lifestyle Modification and Yoga;
                        all are used to treat the roots of diseases. We accommodate the needs of a diverse client
                        specializing in the curative, preventive, and promotive aspects of Ayurveda as opposed to
                        the simple “masking of the symptoms” as demonstrated in many Western Medicines. Rejuvenation
                        Therapies are offered with the goal of maintaining normal physical, mental and social wellbeing.
                        </p>

                      <h3 className="text-center">AYURVEDIC DOCTORS</h3>
                      <p>Ayurvedic Treatments in Kerala will be scheduled after the detailed consultation and discussion
                       made by panel of Ayurvedic Doctors under the guidance of Chief physician Dr. C.P. Asghar.</p>
                      <h3 className="text-center">RESIDENT MEDICAL OFFICER:</h3>
                      <p>In-house doctors available 24 x 7 round the clock</p>
                      <h3 className="text-center">PANCHAKARMA THERAPISTS</h3>
                      <p>Our panchakarma therapists are masters in all panchakarma treatment procedure – each ranging
                        from 3 to 20 years experience in conducting and managing all panchakarma and Kerala special
                        rejuvenative therapies. They have incredible knowledge in preparation of Ayurvedic classical
                        medicine manufacturing.</p>
                      <h3 className="text-center">OUT PATIENTS DEPARTMENT (OPD):</h3>
                      <p>Average number of patients: 30- 35 per day</p>
                      <h3 className="text-center">IN PATIENTS DEPARTMENT (IPD):</h3>
                      <p>30 bed hospital</p>
                      <h3 className="text-center">PANCHAKARMA TREATMENT:</h3>
                      <p>Average Kerala treatments – daily 50 procedures with 9 state of arts- treatment rooms</p>
                      <h3 className="text-center">YOGA DEPARTMENT:</h3>
                      <p>Yoga course is taught by the widely appreciated yogic master Atma Ram, Dr. Padmanaban
                          and Miss. Deepthi – Individual and group classes are available.</p>
                      <h3 className="text-center">AYUR PHARMACY:</h3>
                      <p>24 hours in house pharmacy is fully stocked with medicine which is prepared by Karuna
                        Vaidya according to ancient classical methods with the addition of self experienced knowledge
                        from our professional greensayurveda staffs.
                       </p>
                      <h3 className="text-center">AYURVEDIC KITCHEN:</h3>
                      <p>Ayurvedic meals are prepared by experienced cooks under the advice of Doctors.</p>



                    </div>
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={aytreatment}
                    ></img>
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={aytreatment2}
                    ></img>
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={aytreatment3}
                    ></img>
                  </div>


                </div>
              }

              tab2Content={
                <div>
                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                      <h3 className="text-center">Top 11 Ayurveda Massages In Kerala</h3>
                      <p>
                      There are several concepts and procedure for performing Kerala Ayurvedic 
                      Massages which are implemented depending upon the type of the massage.
                                </p>
                      <h3 className="text-center">ABHYANGA</h3>
                      <p>Abhyanga is an individually prepared herbal-oil Ayurveda body massage 
                        designed to penetrate oil deeply into the skin, relax the mind-body, breaks up 
                        impurities, enhances the ability of nutrients to reach cells and allow for the 
                        removal of stagnant waste, and also it is a technical adaptation of touch, 
                        which is an absolutely primal and a basic instinctive need for the living being. 
                        It relies upon the power and magic of touch for efficacy. It heals, it comforts 
                        and it brings a warm glow of security that encircles both the giver and receiver 
                        in a peculiar kind of bonding. It is beneficial for stress, muscular tension, 
                        stiffness, pain and swelling, excessive scar tissue formation, muscular spasm, 
                        tension headache and eye strain.</p>
                      <h3 className="text-center">SWEDANA</h3>
                      <p>Swedana is an individually herbalized fomentation in different methods. 
                        Medicated steam bath, in a steam box is the common procedure. Sudation 
                        therapy is beneficial in dyspnoea, cough, hiccup, heaviness, stiffness 
                        and rigidity of body parts, headache, ear ache, pain on neck, Bell’s palsy, 
                        paralysis, loss of sensation and sciatica.</p>
                        <h3 className="text-center">SHIRODHARA</h3>
                        <p>Shirodhara is administered by mildly and methodically pouring warm medicated 
                          oil over the forehead, synchronizing brain waves and profoundly coordinating 
                          and calming the mind, body and the spirit. Every human being is considered to 
                          be like a tree with inverted position. Roots of tree carry all mineral substances 
                          and water for nourishment. Like wise, all ayurvedic treatments done on head like 
                          shirodhara, shirovasti etc relaxes and revitalizes all sensory organs including 
                          Central Nervous System, regulates hormonal balance and improves mental alertness. 
                          Shirodhara is good for stress and strain, insomnia, chronic headache, anxiety, 
                          paralysis, depression, Alzheimer’s disorder and in various diseases related to 
                          central nervous system.</p>

                      
                    </div>
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={ABHYANGAM}
                    ></img>
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={Steambath}
                    ></img>
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={aytreatment}
                    ></img>
                    
                  </div>
                </div>


              }

              tab3Content={
                <div>
                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                   
                      <p>
                      GAMC is designed for Doctors, Health practitioners, Kiro practitioners,
                       Yoga person, Aroma Therapist, Massage therapist or who want to deepen 
                       their knowledge into Marma (Vital points) and be able to provide their 
                       clients for treating various ailments with healing touch, a wider range 
                       of therapeutical application to calm his or her body & soul. And also it 
                       helps to balance electrochemical balance in the body and awakening Chakras. 
                       Marma massage with the magic marma stick, age old scientific interpretations & 
                       with its practical knowledge will gain ultimate approach to heal the pain and 
                       give relaxation at the best. Marmas are like small “windows” on the skin surface 
                       and subcutaneous layers, acting as mystical junction points between body, mind, 
                       and spirit. They are the spaces in-between the relative world and the unified 
                       field of all possibilities. Activating marma points allows light and prana into 
                       the body, transforming the biochemistry of the physiology. Here you can experience 
                       why marma points enliven our innate intelligence, how Marma therapy can be both 
                       remedial and diagnostic, uncover the cause of pain and how to alleviate it, 
                       develop a set of tools and knowledge for working with the marmas, learn how 
                       to add marma therapy to your massage routine, become familiar with the precautionary 
                       guidelines, discover your own marma points, understand how marmas are doorways and 
                       junctions, learn how to recognize the points on your clients, demonstrate how to 
                       relieve pain by using marma, describe the marma bands that exist around each joint, 
                       learn the how the marmas are connected to organs, facilitate more flow of prana in 
                       your client and yourself, measure the size of each marma and how to palpate them. 
                       Through Chakra massage, you can provide deep relaxation and relief from negative emotions. 
                       And deeper awareness of Self that you can let go into.
                 
                                    </p>
                      <p>
                      Duration: 2 Weeks
                                    </p>
                    
                    </div>
                  
                  </div>
                </div>


              }


              tab4Content={
                <div>
                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                      <h3 className="text-center">YOGA Therapy & Treatment</h3>
                      <p>
                      According to medical scientists, yoga therapy is successful because of the balance 
                      created in the nervous and endocrine systems which directly influences all the other 
                      systems and organs of the body. Yoga acts both as a curative and preventive therapy. 
                      The very essence of yoga lies in attaining mental peace, improved concentration powers, 
                      a relaxed state of living and harmony in relationships. Through the practice of yoga, 
                      we become aware of the interconnectedness between our emotional, mental and physical levels. 
                      Gradually this awareness leads to an understanding of the more subtle areas of existence. 
                      The ultimate goal of yoga is to make it possible for you to be able to fuse together 
                      the gross material physical mental, intellectual and spiritual levels within your being. 
                      Yoga is beneficial in anxiety and depression, fatigue, insomnia, obesity, diabetes, mental 
                      disorders, nervous disorders and even combating diseases such as cancer, arthritis, menstrual 
                      disorders, constipation, spondylosis, hernia, hypertension, heart disease and sexual dysfunction.
                                </p>
                      <h3 className="text-center">YOGA DEPARTMENT:</h3>
                      <p>Yoga is taught by the widely appreciated yogic master, Atma Ram, Dr. Padmanaban, Dr Sandeep 
                        Purushothaman and Miss. Deepthi – Individual and group classes are available.</p>
                      

                      
                    </div>
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={gacy}
                    ></img>
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={yoga}
                    ></img>
                   
                  </div>
                </div>


              }



            ></Programs >
          }

          Hotels={
            <HotelDetails
              Tab1="GAMS:"
              Tab2="GALC:"
              Tab3="GKPRM:"
              Tab4="GANC:"
              Tab5="GAMC:"
              Tab6="GABP:"
              Tab7="GACY:"
              Tab8="GAPP:"

              tab1Content={
                <div>
                  <img src={gams} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>
                        Ayurveda Massage & Shirodhara
                          </strong>
                    </h4>
                  </div>
                  <h6>
                    <p>
                      Duration: 2 Weeks
                     GAMS is designed with Basics of Kerala Special Ayurvedic Massage & Shirodhara
                     Commencement Day: Every Monday
                    </p>

                    <p>
                      The 2 weeks course on ayurvedic massage & shirodhara would enlighten you
                      with knowledge of body massage,head massage & foot massage and the benefits
                      on body. Training of shirodhara help you to realise its benefits on body.In
                      present scenario, shirodhara /pouring warm medicated oil over head is useful
                      in many diseases like sleeplessness,stress & headache & dosha imbalance.It
                      relaxes you and increases blood circullation & nourishes your brain. Training
                      on massage includes whole body massage, foot massage, head massage and shoulder
                      massage . Detail on benefits of abhyanga /massage are dealt in theory class.
                      The course too includes training on basics of ayurveda , benefits of abhyanga,
                      & takradhara preparation & demo.
                  </p>

                  </h6>
                </div>
              }
              tab2Content={
                <div>
                  <img src={galc} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>Ayurveda Lifestyle Consultant</strong>
                    </h4>
                  </div>
                  <h6>
                    <p>
                      Duration: 12 Weeks
                        Day to day routine lifestyle, physiology of yoga, meditation, healthy life style
                       & Ayurvedic nutrition & cookery, detailed Marma, Panchakarma, Ayurvedic beauty,
                       Patient consultation & Visit
                    </p>

                    <p>
                      Commencement Day: Every Monday
                  </p>
                    <p>GALC – Lifestyle Consultant program</p>
                    <p>
                      The course is designed for Fresher’s as well as Health practitioners,
                      Kiro practitioners, Yoga person, Aroma therapist, Nurses, Psychiatrist,
                      Fitness instructors or those who want to deepen their knowledge into
                      Ayurvedic medicine for practicing / to endeavour as a professional
                      Ayurvedic lifestyle consultant. You can take charge of your clients
                      with healing touch, a wider range of curative, preventive and promotive
                      health guidelines, anti stress, anti aging and therapeutical applications,
                      Lifestyle management aim at to scheduling Ayurvedic protocol to heal his or
                      her body & soul. Our Ayurvedic consultant program is an integrated approach
                      in preventing and treating illness through lifestyle interventions and natural
                      therapies. Here the learning modules that will give you deep understanding of
                      basic principles of Ayurveda, day to day routine life style, seasonal, personal,
                      social protocol, physiology of yoga, medication, healthy life food style & Ayurvedic
                      nutrition, cooking, rejuvenation therapies and panchakarma as per classical direction
                      which is worthwhile in this technical era.
                    </p>
                    <p>In detail</p>
                    <p>
                      Marma massage with the magic marma stick, age old scientific interpretations & with its
                      practical knowledge will gain ultimate approach to heal the pain and give relaxation at the best.
                      Different kizhis and Kerala rejuvenation therapies will help you to treat variety of diseases.
                      Preparation of different unique Kerala herbal medicines: Oils, Lehyas, Gudikas and Decoctions,
                      under old aged Vaidya who dedicated his whole life for this divine science is a very rare opportunity
                      for an ayurvedic aspirant. Here you feel a Gurukula traditions followed under this eminent Vaidya.
                      This is an entity admired by all; we give you intense study to enhance your knowledge as well as the
                      professional life the healing touch and proper facade.
                    </p>
                  </h6>
                </div>
              }

              tab3Content={
                <div>
                  <img src={gkprm} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>Panchakarma Rejuvination and Massage</strong>
                    </h4>
                  </div>
                  <h6>
                    <p>
                      Duration: 4 Weeks
                    </p>

                    <p>
                      Basic study of Ayurveda, management of diseases by massage and other panchakarma approaches.
                  </p>
                    <p>
                      Commencement Day: Every Monday
                  </p>
                  </h6>
                </div>
              }

              tab4Content={
                <div>
                  <img src={ganc} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>Ayurveda Nutrition and Cookery
                      </strong>
                    </h4>
                  </div>
                  <h6>
                    <p>   Duration: 2 weeks & 4 weeks
                     Includes both theoretical and practical aspects of Ayurvedic Nutrition and immunity,
                     Diet for three constitutions, Food Allergy & Dietary Management, Baby & Mother Nutrition etc.</p>

                    <p>Commencement Day: Every Monday
                  </p>
                    <p>Ayurveda Nutrition & Cookery Course – GANC</p>
                    <p>
                      You are what you eat for centuries this has been the basis of most cuisines across the world.
                      But it was Ayurveda, the 5,000 year-plus-holistic Indian health science, which first introduced
                      the art of ‘personalised cooking’ or cooking based on the individual body and mental constitution.
                      Cooking an Ayurvedic meal is a challenge in itself. Ayurveda does not view the process of cooking as
                      separate from that of digestion and nutrition. The focus is on easier digestion and the body’s capability
                      of extracting the nutritional essence of the consumed food.
                  </p>
                  </h6>
                </div>
              }

              tab5Content={
                <div>
                  <img src={gamc} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>Ayurveda Marma Chakra And Massage</strong>
                    </h4>
                  </div>
                  <h6>
                    <p>Duration: 2 Weeks
                       GAMC is designed for Doctors, Health/Kiro practitioners, Yoga person, Aroma/Massage therapist who wants to deepen their knowledge into Marma.</p>

                    <p>
                    Commencement Day: Every Monday
                  </p>
                    <p>
                    GAMC – Ayurveda Marma Chakra Massage
                  </p>
                  <p>GAMC is designed for Doctors, Health practitioners, Kiro practitioners, 
                    Yoga person, Aroma therapist, Massage therapist or who want to deepen 
                    their knowledge into Marma (Vital points) and be able to provide their 
                    clients for treating various ailments with healing touch, a wider range 
                    of therapeutical application to calm his or her body & soul. And also it 
                    helps to balance electro-chemical balance in the body and awakening Chakras. 
                    Marma massage with the magic marma stick, age old scientific interpretations & 
                    with its practical knowledge will gain ultimate approach to heal the pain and 
                    give relaxation at the best. Marmas are like small “windows” on the skin surface 
                    and subcutaneous layers, acting as mystical junction points between body, mind, 
                    and spirit. They are the spaces in-between the relative world and the unified field 
                    of all possibilities. Activating marma points allows light and prana into the body, 
                    transforming the biochemistry of the physiology.</p>
                  </h6>
                </div>
              }
 
              tab6Content={
                <div>
                  <img src={gabp} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>Ayurveda Beauty Program</strong>
                    </h4>
                  </div>
                  <h6>
                    <p>Duration: 10 days</p>
                    <p>
                    Basic aspects, fundamentals of Yoga, Yoga philosophy, anatomy, physiology of Yoga, Different schools of Yoga, Asanas etc
                  </p>
                    <p>
                    Commencement Day: Every Monday
                  </p>
                  
                  </h6>
                </div>
              }


              tab7Content={
                <div>
                  <img src={gacy} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>Yoga Clinical and Teachers</strong>
                    </h4>
                  </div>
                  <h6>
                    <p>Duration: 2 weeks</p>

                    <p>
                    Basic aspects, fundamentals of Yoga, Yoga philosophy, anatomy, physiology of Yoga, Different schools of Yoga, Asanas etc
                  </p>
                    <p>
                    Commencement Day: Every Monday
                  </p>
                  <p>GACY – Yoga Clinical and Teachers training</p>
                  <p>The Yoga curriculum here at Greensayurveda, which includes Basic aspects, fundamentals of Yoga, 
                    Yoga philosophy, anatomy, physiology of Yoga, Different schools of Yoga, Asanas, Different 
                    meditation methods, Clinical yoga, Yoga therapy to prevent various ailments, Hatayoga, Chakras, 
                    Mudras, Bhandas, Adharas, Bhedas, Pranayama, Yoga Psychology, Transcendental meditation and much 
                    more. No matter what your age, is after the study you will attain the power to change many of the 
                    variables, the yogic influences in physical, mental health, how to attain a higher level of health 
                    and its consciousness. It matter how long you live, and how active and vital you feel in your later 
                    years by the routine practice of yoga. Physical and mental therapy is yoga’s most important achievement. 
                    Yoga has succeeded as an alternative form of therapy in various diseases.</p>
                  </h6>
                </div>
              }


              tab8Content={
                <div>
                  <img src={gapp} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>Ayurveda Pharmacy</strong>
                    </h4>
                  </div>
                  <h6>
                    <p>Duration: 2 weeks and 4 weeks
                   Herbs, Herbal preparations, Indications of different herbs, home remedies, Medicated oil, ghee preparations, rasayana medicines

                    </p>

                    <p>
                    Commencement Day: Every Monday
                  </p>
                  
                  <p>Program in brief: This course introduces pharmacy practice .The course is planned in such 
                    a manner that personnel completing it is made capable of meeting different requirements of 
                    both manufacturing and consuming sector for (ayurvedic drugs, to differentiate the drugs, 
                    identification of the ayurvedic herbs, raw drugs, and important home remedies as well as the detailed 
                    study of the important herbs which is commonly use.) Ayurveda medicines are explained under different
                     methodology. The syllabus of this course is synchronised in such a way that thorough knowledge about 
                     all medications are provided. Study of drugs is to better understand about the herbs used to pacify 
                     disease in traditional ways. The different classical preparations and its usage and its contents, 
                     how to prepare and its dosage for adults and children – all included in the study syllabus</p>
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
                      Welcome to a place where we strive towards the Ayurvedic
                      Philosophy of achieving “perfect health”. Greens Ayurveda
                      is situated in Azhiyur, a charming village where myth and
                      history are interwoven in its culture and healing science,
                      Ayurveda. This village is located in the regal state of
                      Kerala- “God’s Own Country”. It contribute to an unforgettable
                      experience in authentic, attentive, and professional care-
                      well-trained doctors and staff who abide by the words, “Atithi
                      devo Bhavah”, meaning, “We feel God through our guest”.
                      “Swasthasya swasthya rakshnamaturasya roga nivaranam.” “To
                      rejuvenate and preserve the health of the healthy and alleviate
                      the diseases of the sick.”
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
