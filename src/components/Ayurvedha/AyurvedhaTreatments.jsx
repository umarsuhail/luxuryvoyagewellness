import React, { Component } from "react";
import CommonLayout from "../CommonLayout";
import treatment1 from "../../images/treatment1.png";
import treatment2 from "../../images/treatment5.jpg";
import treatment3 from "../../images/treatment3.jpg";
import background from "../../images/treatment-background.jpg";
export default class AyurvedhaTreatments extends Component {
  render() {
    return (
      <div>
        <CommonLayout
          headerImage={background}
          heading="Ayurveda Treatments"
          title="Ayurveda Treatments"
          image1={treatment1}
          image2={treatment2}
          image3={treatment3}
          contentTitle="Ayurveda"
          content="Ayurveda has been carefully nurtured in Kerala for more than a thousand years. From specialised treatments to prescribed diets, it is an integral part of our culture. Ayurveda is a way of life to us and not simply a method to cure ailments. Our land is blessed with several herbal medicines and these have played a crucial role in ensuring the growth of Ayurveda on our shores. "
          content2="Among Ayurveda's most significant achievements is making the body strong and preventing the contraction of diseases. This process is done via rejuvenation therapy. Here the body is flushed clean of toxins using special herbs. This has proven to strengthen the immune system immensely and drastically improve the overall condition of the patient. " 
          contentTitle2="Rejuvenation Therapy"
          contentTitle3="Process of Treatment"
          content3="Ayurveda prescribes a certain rest period at the end of the treatment. Your body needs a certain amount of time to get used to the changes it has gone through. Most practitioners will provide a certain fixed diet that is streamlined to help with the recovery process. There are many Ayurvedic hospitals in the State alongside hotels and resorts that offer Ayurvedic treatment throughout the year. "
       />
      </div>
    );
  }
}
