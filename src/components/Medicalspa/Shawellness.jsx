import React, { Component } from "react";
import View from "./Components/View";
import image1 from "../../images/sha-wellness/sha1.jpg";
import image2 from "../../images/sha-wellness/sha2.jpg";
import image3 from "../../images/sha-wellness/sha3.jpg";
import image4 from "../../images/sha-wellness/sha4.jpg";
export default class Shawellness extends Component {
  render() {

    return (
      <div>
        <View
          heading="SHA WELLNESS"
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          videoID="E9vCw_Y0bRw"
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
