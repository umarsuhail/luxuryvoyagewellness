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
import anandspa from "../../images/ananda/anandspa1.png";
import anandspa2 from "../../images/ananda/anandspa2.jpg";
import anandspa3 from "../../images/ananda/anandspa3.jpg";
import hotel1 from "../../images/ananda/hotel1.jpg";
import hotel2 from "../../images/ananda/hotel2.jpg";

import HotelDetails from "./Components/HotelDetails";

const NavData1 = ["Wellness Programmes", "Spa at Ananda"];
const NavItem = ["Deluxe Palace/Garden View Room", "Deluxe Valley View Rooms"];


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
              NavData={NavData1}
              tab1Content={
                <div>
                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                      <h3 className="text-center">ACTIV-FITNESS</h3>
                      <p>
                        The Active Programme integrates the best of indoor
                        fitness workouts along with outdoor activities such as
                        personal fitness training, guided outdoor treks, yoga,
                        aqua fitness and therapeutic spa experiences to enhance
                        muscle tone and cardiovascular fitness.
                        The&nbsp;comprehensive programme of 7 and 14 nights work
                        on intensive core fitness in addition to treks and full
                        body therapeutic massages. In partnership with Sumaya, a
                        pioneer in the fitness industry, the programmes are
                        individualized, consultative and follow a goal
                        orientated fitness approach.
                      </p>
                    </div>
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={tabimage1}
                    ></img>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-left"
                      src={tabimage2}
                    ></img>
                    <div className="col-lg-6 col-md-6 col-sm-12 float-right">
                      <h3>AYURVEDIC REJUVENATION</h3>
                      <p>
                        Ananda’s Ayurvedic Rejuvenation Programme is designed to
                        suit every individual’s personal needs. The programme
                        aims at improving vitality of one’s body through
                        Panchakarma treatments along with complementing
                        Ayurvedic treatments, controlled diet and yoga. The
                        programme results in improved immunity and energy,
                        better metabolism and healthy, glowing refreshed skin.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={tabimage3}
                    ></img>
                    <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                      <h3 className="text-center">DETOX</h3>
                      <p>
                        Ananda’s Detox Starter for 5 nights is a perfect
                        introduction to those who have not experienced an Ananda
                        Detox before. Ananda’s comprehensive Detox Programmes
                        for 7, 14 &amp; 21 nights rest the digestive system
                        through controlled eating of whole organic foods,
                        improves the circulation of the blood and lymphatic
                        systems, filters toxins from the body and finally
                        nourishes it with essential nutrients.
                      </p>
                      <p>
                        <strong>Detox Starter</strong>: 5 Nights
                      </p>
                      <p>
                        <strong>Holistic Detox:</strong>&nbsp;7, 14, 21 Nights
                      </p>
                    </div>
                  </div>
                </div>
              }
              tab2Content={
                <div>
                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                      <h3 className="text-center">Ayurvedic Experiences</h3>
                      <p>
                        At Ananda, Ayurveda forms an intrinsic part of the
                        wellness regime for the guests. From massages and
                        specialized diet programme to fulfill personal goals to
                        the more rigorous transformations in lifestyle, the
                        Ayurveda experience has been designed keeping in mind
                        the individual’s desire to heal, cleanse, relax and
                        revitalize. With qualified Ayurveda doctors and
                        therapists to administer treatments ranging from
                        therapeutic massages to more rigorous modes of toxic
                        elimination, the Ayurvedic therapies at Ananda are
                        strongly rooted in ancient traditions, while keeping in
                        mind contemporary preferences and comforts.
                      </p>
                      <p>
                        The authenticity and our commitment to this ancient life
                        system are evident in the use of age-old powders; oils,
                        vessels, wooden beds, treatment rituals and qualified
                        therapists trained in traditional Ayurvedic schools.
                        Ananda Ayurvedic Therapy programmes are prescribed by
                        the resident physician after a detailed consultation,
                        which specifies daily routines, diet and wellness
                        activities.
                      </p>
                    </div>
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={anandspa}
                    ></img>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-left"
                      src={anandspa2}
                    ></img>
                    <div className="col-lg-6 col-md-6 col-sm-12 float-right">
                      <h3>Yoga & Meditation Retreats</h3>
                      <p>
                        Yoga at Ananda is completely pure and traditional in
                        form, stemming from the roots of Hatha yoga and adapting
                        it to suit individual needs. It is a disciplined science
                        teaching the techniques of the renowned Bihar School of
                        Yoga encompassing all aspects of life in different ways
                        and levels to balance the mind, body and
                        spirit.&nbsp;Our experienced Yoga teachers are trained
                        to understand your personal objectives and goals during
                        your stay at Ananda and beyond. They will then design a
                        specific yoga and meditation program for you to assist
                        you through your journey of life, balancing your being
                        and assisting you to achieve health and well being.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 text-left">
                    <div className="col-lg-6 col-md-6 col-sm-12 float-left">
                      <h3 className="text-center">Healing Experiences</h3>
                      <p>
                        Himalayan Crystals cleansed at the source of the Ganges,
                        bring their healing powers balancing the chakras and
                        cleansing the being of negative thoughts and energy.
                        Crystals can increase vibrations to assist in the
                        release of blockages. Since its beginning in Japan,
                        Reiki has been adapted across varying cultural
                        traditions. It uses a technique commonly called palm
                        healing or hands-on-healing. Through the use of this
                        technique, practitioners believe that they are
                        transferring “universal energy” through the palms of the
                        practitioner, which they believe encourages healing
                      </p>
                    </div>
                    <img
                      className="col-lg-6 col-md-6 col-sm-12 float-right"
                      src={anandspa3}
                    ></img>
                  </div>
                </div>
              }
            ></Programs>
          }
          Hotels={
            <HotelDetails
             NavItems={NavItem}
              tab1Content={
                <div>
                  <img src={hotel1} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>
                        The newly renovated pailace or the lush garden views
                        rooms are simply luxurous.
                      </strong>
                    </h4>
                  </div>
                  <h6>
                    The newly renovated palace or the lush garden views rooms
                    are simply luxurious 45 sqm in size, they feature walk-in
                    closets and perfectly appointed bathrooms with windows
                    overlooking panoramic views of the Golf course and the
                    Palace, with life sizemirrors and a luxurious bathtub with
                    an LCD TV. Each room opens onto large porches or balconies
                    with picture-perfect views, ideal for a private meal. All
                    rooms are equipped with a comfortable Settee with a footrest
                    facing the balcony, a 42’ LCD TV, elegant writing and
                    bedside tables, tea coffee maker, well stocked mini bar,
                    electronic safe and complimentary Wi-Fi High speed internet
                    access.
                  </h6>
                </div>
              }
              tab2Content={
                <div>
                  <img src={hotel2} className="image-of-hotels"></img>
                  <div className="wrapper mr-auto">
                    <h4 className="text-center">
                      <strong>One of the most exclusive rooms of SHA</strong>
                    </h4>
                  </div>
                  <h6>
                    Each room is equipped with a luxurious King size bed, a
                    comfortable Settee with a footrest facing the balcony, a 42’
                    LCD TV, elegant writing and bedside tables. The large
                    private balcony has a chaise-lounge for complete relaxation
                    and a tea table. Each room features spacious walk-in closets
                    and perfectly appointed bathrooms with life size mirrors and
                    a luxurious bathtub with an LCD TV and windows overlooking
                    views of the valley. All rooms are equipped with DVD player,
                    tea coffee maker, well stocked mini bar with healthy
                    options, electronic safe and complimentary high speed Wi-Fi
                    internet access.
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
