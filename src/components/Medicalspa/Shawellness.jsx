import React, { Component } from "react";
import View from "./Components/View";
import image1 from "../../images/sha-wellness/sha1.jpg";
import image2 from "../../images/sha-wellness/sha2.jpg";
import image3 from "../../images/sha-wellness/sha3.jpg";
import image4 from "../../images/sha-wellness/sha4.jpg";
import Programs from "./Components/Programs";
export default class Shawellness extends Component {
  render() {
      console.log(this.props);
      
    return (
      <div>
        <View
          heading="SHA WELLNESS"
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          videoID="E9vCw_Y0bRw"
          programs={
            <Programs
              tab1=" Sha Wellness Programmes"
              tab2="Treatments and Services"
              tab3=" Accommodation Rates"
              tab1Content={
                <div class="wpb_wrapper text-left">
                  <h4>SHA Essence</h4>
                  <p>
                    The&nbsp;<strong>wellness program</strong>&nbsp;SHA Essence
                    gives you the opportunity to discover a healthy lifestyle
                    focused on improving your wellbeing through a series of
                    natural therapies, healthy nutrition and personalised
                    fitness plan.
                  </p>
                  <p>
                    <strong>DURATION</strong>
                  </p>
                  <ul>
                    <li>Minimum 7 days</li>
                    <li>Recommended stay: 14 days</li>
                  </ul>
                  <p>
                    <strong>&nbsp;GOALS</strong>
                  </p>
                  <ul>
                    <li>Improve your overall health and wellbeing</li>
                    <li>
                      Rebalancing your body by activating your physical, mental
                      and energetic health.
                    </li>
                  </ul>
                  <p>
                    <strong>Clinical Area</strong>
                  </p>
                  <ul>
                    <li>
                      <a href="https://shawellnessclinic.com/en/healthy-life-programme/#tab-clinic-area-1">
                        4 days
                      </a>
                    </li>
                    <li>General medical examination</li>
                    <li>Medical Consultation</li>
                    <li>
                      Consultation with an expert on nutrition and natural
                      therapies
                    </li>
                    <li>SHA diet according to the prescription</li>
                    <li>
                      Natural therapeutic drinks, according to the prescription
                    </li>
                    <li>
                      1 traditional Chinese medicine treatment session,
                      according to the prescription (acupuncture or moxibustion)
                    </li>
                    <li>
                      1x high-tech treatment session, adapted to individual
                      needs: Detox massage using cupping therapy, Physia,
                      Icoone, Indiba, or DLE
                    </li>
                  </ul>
                </div>
              }
              tab2Content={
                <div class="wpb_wrapper text-left">
                  <p>
                    <strong>Traditional Massages</strong>
                  </p>
                  <ol>
                    <li>Relaxing Massage</li>
                    <li>
                      <div>Deep Tissue Massage</div>
                    </li>
                    <li>
                      <div>Relieving Massage</div>
                    </li>
                    <li>
                      <div>Craniocervical Massage</div>
                    </li>
                    <li>
                      <div>Lymphatic Drainage Massage</div>
                    </li>
                    <li>
                      <div>Circulatory Massage</div>
                    </li>
                    <li>
                      <div>Anti-cellulite Massage</div>
                    </li>
                  </ol>
                  <div>
                    <strong>Signature Massages</strong>
                  </div>
                  <ol>
                    <li>SHA Detox Massage</li>
                    <li>SHA Sport Massage</li>
                  </ol>
                  <p>
                    <strong>Oriental Therapies</strong>
                  </p>
                  <ol>
                    <li>Thai Massage</li>
                    <li>Abhyanga Fusion Massage</li>
                    <li>Hot Stones Massage</li>
                    <li>Shiatsu</li>
                    <li>Reflexology</li>
                    <li>Ginger Therapeutic Compresses</li>
                  </ol>
                  <p>
                    <strong>Water therapies</strong>
                  </p>
                  <p>
                    <strong>Hydromassage Baths</strong>
                  </p>
                  <p>
                    <strong>Hairdressing Services</strong>
                  </p>
                  <p>
                    <strong>Manicure &amp; Pedicure Services</strong>
                  </p>
                  <p>
                    <strong>Blue Gold Taninoplasty Services</strong>
                  </p>
                </div>
              }
              tab3Content={
                <div class="wpb_wrapper text-left">
                  <p>
                    A unique and exclusive residential destination featuring 11
                    residences within SHA Wellness Clinic, whereby guests are
                    able to enjoy the Clinic’s lifestyle, the caliber of
                    services and optimum state of health &amp; wellbeing, all
                    within the privacy of SHA Residences. The perfect luxury
                    wellness destination for those seeking a modern and
                    exclusive healthy travel lifestyle experience.
                  </p>
                  <p>You Can Download the accommodation rates here :</p>
                </div>
              }
            />
          }
        >
          <span>
            Our mission at SHA, is that you enjoy and have an unforgettable
            stay, as well as to produce a positive, substantial and lasting
            change in your health and wellness, so that you feel a state of
            complete balance. Healthy nutrition, the most effective and proven
            natural therapies and the latest advances in scientific medicine,
            are our most valuable tools to achieve the best results in the
            shortest possible time.
            <br />
            <br />
            In SHA we have over 250 professionals from 35 different
            nationalities, including more than thirty doctors and
            internationally renowned experts with a common goal to help you
            achieve the best version of yourself. The healthy food we offer in
            SHA is fully balanced. It is primarily based on cereals and pasta,
            seeds, legumes, vegetables and seasonal fruits, always using organic
            and ecological products. We do serve fresh fish but no meat, eggs or
            dairy products (we do serve substitutes of milk such as almond or
            rice milk, much more digestive and healthy for our body). We do not
            serve coffee (is replaced by cereal coffee or natural teas) or
            sugary drinks, not recommended for our health.
            <br />
            <br />
            Discover our new Chef’s studio: the perfect place to share the
            healthy gastronomic secrets of SHA Wellness Clinic. In a pleasant,
            professional and interactive setting you will learn deliciously
            simple recipes, and find out everything you need to know about
            healthy eating so that you can use it afterwards on a daily basis
            and make a substantial and significant change to your health and
            lifestyle.
          </span>
        </View>
      </div>
    );
  }
}
