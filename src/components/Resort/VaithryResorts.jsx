import React, { Component } from 'react'
import View from './Components/View'
import background from '../../images/vaithri/vaithri.jpg'
import YouTube from "react-youtube";
import ProgramContentsLeft from '../Medicalspa/Components/ProgramContentsLeft'
import ProgramContentsRight from '../Medicalspa/Components/ProgramContentsRight'
import contentImage from '../../images/vaithri/vaithri-2.jpg'
import rainForest from '../../images/vaithri/rain-forest.jpg'
export default class VaithryResorts extends Component {
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
                <View BackgroundImage={background} heading="Vythri Resorts" content={
                    <div>
                        <div className="vythri-heading">
                            <h4> A rain forest nature experience resort  in Wayanad – North Kerala</h4>
                        </div>
                        <YouTube
                            className="col-lg-12 col-md-12 col-sm-12"
                             videoId='fQfLRTJSoPc'
                            opts={opts}
                            onReady={this._onReady}
                            onEnd={this.endedVideo}
                        />
                        <div className="col-md-12 col-sm-12">
                            <div className="container">
                                <ProgramContentsLeft image={contentImage} content={<div>
                                    <span>
                                        Located in the Western Ghats in Wayanad
                district, Vythiri Resort offers an <strong>Original Rainforest Experience</strong>. The Resort is Surrounded
                                        by Natural Streams and located almost 3.5Kms inside the 150 acres of plantation and
                adjoining the rain forests. Rustic Themed Accommodations,<strong>Tree Houses</strong>  and Independent Cottages
                including <strong>Pool Villas</strong> are located amidst the jungle offers great opportunity to experience
                                        nature at its best.
                    </span>

                                </div>} />
                                <ProgramContentsRight image={rainForest}
                                    content={
                                        <div className="text-left">
                                    <h4>Vythiri Resort offers the following experiences:</h4>
                                    <ul>
                                        <li className="list-item">
                                            Rain forest
                                         </li>
                                        <li className="list-item">
                                            Birding and Butterfly Watching
                        
                                        </li>
                                        <li className="list-item">
                                            Wellness (Yoga & Meditation, Traditional Kerala Ayurveda and Aroma Spa Options)                    </li>
                                        <li className="list-item">
                                            Plantation</li>
                                        <li className="list-item">
                                            Romantic Experiences for Honeymooners.                     </li>
                                    </ul>
                                    </div>}>

                                </ProgramContentsRight>
                            </div>

                        </div>
                    </div>
                } />
            </div>
        )
    }
}
