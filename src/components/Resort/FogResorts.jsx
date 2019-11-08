import React, { Component } from 'react'
import View from './Components/View'
import BackgroundImage from '../../images/resorts/FOG.jpg'
import Villa from '../../images/resorts/FOG-villa.jpg'
import ProgramContents from '../Medicalspa/Components/ProgramContentsLeft'
import HotelDetails from '../Medicalspa/Components/HotelDetails'
import VillaImage1 from '../../images/resorts/villas/1.jpg'
import VillaImage2 from '../../images/resorts/villas/2.jpg'
import VillaImage3 from '../../images/resorts/villas/3.jpg'
import VillaImage4 from '../../images/resorts/villas/4.jpg'
import bedroom1 from '../../images/resorts/Two-bedroom/1.jpg'
import bedroom2 from '../../images/resorts/Two-bedroom/2.jpg'
import bedroom3 from '../../images/resorts/Two-bedroom/3.jpg'
import honeymoon1 from '../../images/resorts/honeymoon/1.jpg'
import honeymoon2 from '../../images/resorts/honeymoon/2.jpg'
import honeymoon3 from '../../images/resorts/honeymoon/4.jpg'
import honeymoon4 from '../../images/resorts/honeymoon/7.jpg'

import Carousal from '../Learning Program/Components/Carousal'

const NavItem = [
    "Fog Villas",
    "Two Bedroom Villa Suites",
    "Honey-Moon Romantica",
    "Premium Valley View Rooms",
    "Presidential Suite"
  ];
export default class FogResorts extends Component {
    render() {
        return (
            <div>
            <View BackgroundImage={BackgroundImage} heading="Fog Resorts" content={
                <div>
                    <div className="vythri-heading">
                            <h4> Welcome to the Fog Resorts & Spa</h4>
                        </div>
                        <ProgramContents image={Villa} heading="" content={`Ever imagined how a blend of Nature and
                         Luxury Resort could create wonder? As we pop into the Western Ghats range of mountains,
                          we feel lighter with the most refreshing air, scenic flora and fauna and the sensual
                           mountains. Just like the heavens and the earth blend in perfect unison.
                            Tourist flock to Munnar for this. In such a journey, The Fog Munnar is the best synonym 
                            for hosting. So, Stretch a little from Munnar and you will witness the perfect and a 
                            charming tryst, The Fog Munnar Resorts and Spa. Experience a separate world! Nestled 
                            among the running hill slopes and the cuddling Fog, The fog Munnar attracts the visitors 
                            as it is set aloof from the hustle bustle life.`}/>
                            <HotelDetails   NavItems={NavItem} tab1Content={
                             <div className="container mt-5">
                                 <Carousal key="1" image1={VillaImage1} image2={VillaImage2} image3={VillaImage3} image4={VillaImage4}/>
                                <p style={{
                                    fontSize:12,marginTop:10,padding:10,lineHeight:1.5
                                }}>
                                    <strong>Individual</strong> luxury two bedroom villas to keep your private moments special with living room + dining room, 
                                    individual balcony, private garden with lawn, mini bar, tea/ coffee maker and king size bed.
                                </p>
                             </div>
                            }
                            tab2Content={
                                <div className="container mt-5">
                                <Carousal key="2"  image1={bedroom1} image2={bedroom2} image3={bedroom3} image4={bedroom3} />
                               <p style={{
                                   fontSize:12,marginTop:10,padding:10,lineHeight:1.5
                               }}>
                                   Two <strong>bedroomed</strong> suite with a cozy living area attached
                               </p>
                            </div>
                            }
                            tab3Content={
                                <div className="container mt-5">
                                <Carousal key="3"  image1={honeymoon1} image2={honeymoon2} image3={honeymoon3} image4={honeymoon4} />
                               <p style={{
                                   fontSize:12,marginTop:10,padding:10,lineHeight:1.5
                               }}>
                                   Make the <strong>sweet minutes</strong> of your life more dulcify 
                                   with the stay in our honeymoon cottages, ) Honey-moon Romantica with lay-on-the-bed view of tea
                                    plantations and base amenities like mini bar,
                                    tea / coffee maker and king size bed. Your cherished moments will be in private!
                               </p>
                            </div>
                            }
                            />
                </div>
            }/>
            </div>
        )
    }
}
