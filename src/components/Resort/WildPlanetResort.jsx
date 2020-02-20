import React, { Component } from 'react'
import View from './Components/View'
import background from '../../images/resorts/wildbck.jpg'
import YouTube from "react-youtube";
import ProgramContentsLeft from '../Medicalspa/Components/ProgramContentsLeft'
import ProgramContentsRight from '../Medicalspa/Components/ProgramContentsRight'
import contentImage from '../../images/resorts/wildplanet2.jpg'
import contentImage2 from '../../images/resorts/wildplanet3.jpeg'
import contentImage3 from '../../images/resorts/wildplanet4.jpeg'
import contentImage4 from '../../images/resorts/wildplanet5.jpg'
import contentImage5 from '../../images/resorts/wildplanet6.jpg'
import luxury from '../../images/resorts/luxury.jpeg'
import jungle from '../../images/resorts/jungle.jpeg'
import hilltop1 from '../../images/resorts/hilltop1.jpeg'
import valley from '../../images/resorts/valley.jpeg'
import Programs from "../Medicalspa/Components/Programs";
import ProgramContentLeft from "../Medicalspa/Components/ProgramContentsLeft";
import palace from "../../images/palace/palace.jpg";

const NavData1 = ["Hill Top Cottages", "Luxury Pavilions","Jungle Wood Houses","Valley View Cabins"];

export default class WildPlanetResort extends Component {
    render() {
        const opts = {
            height: "320",
            width: "525",
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (
            <div>
                <View BackgroundImage={background} heading="WildPlanet Resorts" content={
                    <div>
                        <div className="vythri-heading">
                            <h4> Wild Planet-A fairy tale Luxury Jungle Resort, on the edge of the world</h4>
                        </div>
                        <YouTube
                            className="col-lg-12 col-md-12 col-sm-12"
                            videoId='rdQfeH8Ikso'
                            opts={opts}
                            onReady={this._onReady}
                            onEnd={this.endedVideo}
                        />
                        <div className="col-md-12 col-sm-12">
                            <div className="container">
                                <ProgramContentsLeft image={contentImage} content={<div>
                                    <span>
                                        Wild planet offers a rich array of experiences, activities & amenities.
                                        Memories here last  a life time. It is a place where people come for a once in a
                                        lifetime adventure, unforgettable weekends, romance, relaxation, corporate retreats
                                        and for reconnecting with family.
                    </span>

                                </div>} />
                                <ProgramContentsRight image={contentImage2}
                                    content={
                                        <div className="text-left">
                                            <h4>Wild planet Resort offers the following experiences:</h4>
                                            <ul>
                                                <li className="list-item">TREKKING </li>
                                                <li className="list-item"> FLOATING BRIDGE </li>
                                                <li className="list-item"> PLANTATION WALK</li>
                                                <li className="list-item"> INDOOR GAMES</li>
                                                <li className="list-item">  ZIP LINE</li>
                                                <li className="list-item"> FISHING </li>
                                                <li className="list-item"> HORSE RIDING </li>
                                                <li className="list-item"> KAYAKKING </li>
                                                <li className="list-item"> JUNGLE WALK </li>
                                            </ul>
                                        </div>}>

                                </ProgramContentsRight>
                                <ProgramContentsLeft image={contentImage3} />
                                <ProgramContentsRight image={contentImage4} />
                                <ProgramContentsLeft image={contentImage5} />

                            </div>
                        </div>

            
            <Programs
              NavData={NavData1}
              tab1Content={
                <ProgramContentLeft
                  heading="Hill Top Cottages"
                  image={hilltop1}
                  content="Our Hill Top Cottages are spacious (650 sq. each) and luxuriously done accommodations. The cottages are atop a hillock in the middle of a tea plantation providing a green blanket on the slopes. The balcony overlooks the surrounding rain forest and the Niligiri mountain range, as far as the eye can see."
                />
              }

              tab2Content={
                <ProgramContentLeft
                heading="Luxury Pavilions"
                image={luxury}
                content="Luxury Pavilions are luxuriously done Cottages, themed after Kenyan Safari Suites (504 sq. ft), built on stilts with all modern amenities and have a breathtaking view of the Nilgiri Mountain range, our Swimming pool and offers the chance to connect with nature and delight your senses."
              />
              }
              tab3Content={
                <ProgramContentLeft
                heading="Jungle Wood Houses"
                image={jungle}
                content="Our Jungle Wood Houses are inside 10 acres of private forest land that we have maintained inside the property. These cozy cabins (350 sq.ft) in the middle of the forest are best suited for adventurous couples who enjoy being right in the heart of nature and wish to witness the denizens of the forest up-close.Please note that jungle log house is in a secluded location 750 meters away from the main resort area."
              />
              }
              tab4Content={
                <ProgramContentLeft
                heading="Valley View Cabins"
                image={valley}
                content="Valley View Cabins [425 Sq.Ft] are situated on the slopes of a hillock, closer to our lake and swimming pool. The balcony offers a view of the nearby water body in the day time and the heavy mist surrounding these cottages make you feel like you are among clouds while on the balcony at night. These cottages offer the best chances of seeing herds of elephants on the opposite hill just outside the perimeter of our property."
              />
              }
            ></Programs>
          
                    </div>
                } />
            </div>
        )
    }
}
