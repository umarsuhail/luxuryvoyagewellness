import React, { Component } from "react";
import View from "./Components/View";
import image1 from "../../images/ananda/ananda1.jpg";
import image2 from "../../images/ananda/ananda2.jpg";
import image3 from "../../images/ananda/ananda3.jpg";
import image4 from "../../images/ananda/ananda4.jpg";
import Programs from "./Components/Programs";
import rajah1 from "../../images/rajah/rajah1.jpg";

import rajahealth from "../../images/rajah/rajahealth.jpg";
import rajahisland from "../../images/rajah/rajahisland.jpg";
import rajahbeach from "../../images/rajah/rajahbeach.jpg";
import rajahecobeach from "../../images/rajah/rajahecobeach.jpg";




import HotelDetails from "./Components/HotelDetails";




export default class Rajah extends Component {
    render() {
        return (
            <div>
                <View
                    heading="RAJAH HOSPITAL"
                    videoID="cxYqY4_cgwM"
                    image1={image1}

                    programs={
                        <Programs
                            tab1="What is Ayurveda?"

                            tab1Content={

                                <div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                                        <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                                            <h3 className="text-center">ACTIV-FITNESS</h3>
                                            <p>
                                                Sprouted in the pristine land of India some 5000 years ago,Ayurveda,
                                                the science of life and longevity, is the oldest healthcare system
                                                in the world and it combines the profound thoughts of medicine and philosophy.
                                                Since then Ayurveda has stood for the wholesome physical mental and spiritual
                                                growth of humanity around the world.
                                            </p>
                                            <p>Kerala possesses an unbroken tradition of Ayurveda that has surpassed the many invasions and intrusions
                                              both foreign and native. For hundreds of years the Ayurveda Vaidyas (traditional practitioners of Ayurveda)
                                        were almost the only access for People seeking healing from every kind of disease in Kerala.</p>
                                            <p>Unlike the other Indian states, the status of Ayurveda in Kerala is not alternative but mainstream.
                                            In fact today Kerala is the only state in India which practices Ayurveda in an authentic way with absolute dedication.</p>
                                            <p>The word “Ayurveda” is a Sanskrit term derived from two words “ayu”-life and “veda”-knowldege or science.Thus Ayurveda
                                               means knowledge of life or the science of life. According to ancient Ayurvedic scholar Charaka, Ayu comprises of the mind, body and soul.</p>
                                            <p>Ayurveda can be defined as a system which uses the inherent principles of nature to maintain health in a person by keeping the individual’s body,
                                     mind and soul in perfect equilibrium with nature.</p>
                                        </div>

                                    </div>

                                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={rajah1}
                    ></img>



                                </div>
                            }


                        ></Programs >
                    }

                    Hotels={
                        <HotelDetails
                            Tab1="Rajah Healthy Acres"
                            Tab2="Rajah Island"
                            Tab3="Rajah Beach"
                            Tab4="Rajah Eco Beach"



                            tab1Content={
                                <div>
                                    <img src={rajahealth} className="image-of-hotels"></img>
                                    <div className="wrapper mr-auto">
                                        <h4 className="text-center">
                                            <strong>
                                            A Green Leaf certified Ayurvedic hospital Rajah Healthy Acres </strong>
                                        </h4>
                                    </div>
                                    <h6>
                                    A Green Leaf certified Ayurvedic hospital, situated in a 200 acre rubber plantation located at Koottanad in Palakkad, Kerala. </h6>
                                    <h6>Our medical team consists of 10 Physicians and 60 therapists. For ensuring round the clock care, 
                                        our medical team resides in the same premises. We also have a GMP certified manufacturing unit. 
                                        With the plantation as a backdrop, you can come across, peacocks, cranes, sparrows and many other 
                                        small tropical animals while you wander along the trails inside the resort.</h6>
                                </div>
                            }
                            tab2Content={
                                <div>
                                    <img src={rajahisland} className="image-of-hotels"></img>
                                    <div className="wrapper mr-auto">
                                        <h4 className="text-center">
                                            <strong>The 20 Acre Rajah Island is situated on the famed backwaters of Kerala.
                                              Rajah Island</strong>
                                        </h4>
                                    </div>
                                    <h6>
                                    The 20 Acre Rajah Island is situated on the famed backwaters of Kerala. A full fledged Ayurvedic 
                                    center in the midst of the island provides the perfect ambience for treatment and rejuvenation.
                                   </h6>
                                </div>
                            }
                            tab3Content={
                                <div>
                                    <img src={rajahbeach} className="image-of-hotels"></img>
                                    <div className="wrapper mr-auto">
                                        <h4 className="text-center">
                                            <strong>Kerala’s first & India’s third NABH accredited Ayurvedic hospital, Rajah Beach is situated by the seaside at Akalad, Kerala
                                        Rajah Beach</strong>
                                        </h4>
                                    </div>
                                    <h6>
                                    Kerala’s first & India’s third NABH accredited Ayurvedic hospital, Rajah Beach is situated by the seaside at, Kerala, India, offering Ayurveda treatments and rejuvenation packages. Spacious air conditioned rooms and cottages make your stay comfortable. 
                                    The beach lies across the road from the resort and is away from the hustle and bustle of the nearby town.
                                   </h6>
                                </div>
                            }
                            tab4Content={
                                <div>
                                    <img src={rajahecobeach} className="image-of-hotels"></img>
                                    <div className="wrapper mr-auto">
                                        <h4 className="text-center">
                                            <strong>Rajah Eco Beach: where our purest expression naturally flows forth.
                                        Rajah Eco Beach</strong>
                                        </h4>
                                    </div>
                                    <h6>
                                    Rajah Eco Beach: where our purest expression naturally flows forth.A healing shore of vibrance, 
                                    clarity, health and well being. Aligning the body, mind, emotions and energies; It is the getaway 
                                    to calm your senses. The focus is on overall healing and rejuvenation.
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
                                            The 20 acre island is situated on the famed backwaters of Kerala.
                                            A full fledged Ayurvedic center in the midst of the island provides
                                            the perfect ambience for treatment and rejuvenation.
                    </p>
                                        <p>
                                            Ayurveda is not a medical system that addresses only diseases.
                                            The first and foremost aim is to preserve the health of the healthy.
                                            The three humours function as pillars supporting the body. The derangement
                                            in the humours causes illness. The natural constitution (Prakrithi) of
                                            an individual and deranged state of the body in an illness (Vikrithi)
                                            are expressed with respect to Vatha, Pitha and Kapha. Medicines and
                                            herbs are grouped based on its effects on the humours.
                    </p>
                                        <p>
                                            The “RAJAH CHARITABLE MEDICAL TRUST” was set up in December,1982. There was
                                            total absence of charitable hospitals then and also as of today almost in 20
                                            km radius. Philanthropic interest of settlers and trustees led then to make
                                            humble beginning in this direction and in 1982 the Trust started an out patient
                                            medicine clinic and a Pharmacy with one MD Doctor and two nurses. The patients
                                            registered with the trust were extended facility of free cards which enabled
                                            them to receive treatment free of cost. Thus an era of free treatment to needy
                                            and poor people in the region started as back as in the year 1982. With this
                                            humble beginning the trust developed a hospital with 150 beds, with department
                                            like Medical, Surgical, Orthopedic, Opthalmology,ENT, Gynecology, Paediatrics,
                                            Psychiatry, Pulmonology, Diabatology, Demotology, Physiotheraphy, Radiology,
                                            Cardiology and part time super specially divisions like Gastroenterology, Urology,
                                            Neurology, Neurosurgery and Nursing School. Apart from this hospital department of
                                            Cardiology with cath lab has facilities like Coronary angiogram, Primary Coronary
                                            Angioplasty, Peripheral Angiogram and Angioplasty, Renal Angioplasty and Temporary
                                            & permanent pacemaker implantation.
                    </p>
                                        <p>Besides this the hospital has a day care and vocational rehabilitation centre
                                            for mentally retarded and neurologically ailing persons. Main moto is caring
                                            and enabling socially rejected mentally and neurologically ailing persons,
                                            who cannot look after themselves and integrating them into the main stream
                                            of society by providing humanitarian rehabilitation facility through public acceptance.

</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </View >
            </div >
        );
    }
}
