import React, { Component } from "react";
import View from "./Components/View";
import ProgramContentLeft from "../Medicalspa/Components/ProgramContentsLeft";
import PalaceExterior from "../../images/palace/PalaceExeterior.jpg";
import palace from "../../images/palace/palace.jpg";
import KovalamPalace from "../../images/palace/kovalamPalace.jpg";
import BacgroundImage from "../../images/sha-wellness.jpg";

import Programs from "../Medicalspa/Components/Programs";

const NavData1 = ["Accommodation", "Aminities"];

export default class PalaceResorts extends Component {
  render() {
    return (
      <div>
        <View
          heading="Palace Resorts"
          BacgroundImage={BacgroundImage}
          programs={
            
            <Programs
              NavData={NavData1}
              tab1Content={
                <ProgramContentLeft
                  heading="Angle Oceanfront One Bedroom Condo"
                  image={palace}
                  content="Bedroom featuring 1 Queen Bed and Balcony Access. Separate Living Room with Large Picture Window, Flat Screen TV, Queen Sleeper Sofa, Additional Seating and Angle Oceanfront Balcony. Fully-Equipped Kitchen with Stove/Oven, Microwave, Refrigerator, Dishwasher, Coffee Maker and Basic Utensils. Includes Electronic Safe, Iron and Board, Hairdryer, Wi-Fi, and Bathroom. Approximately 539 square-feet. Maximum Occupancy is 4 (up to 2 Adults and 2 Children). *All units individually owned. Decor in units may vary."
                />
              
              }

              tab2Content={
                <div>

                  <h3>Palace Resort features a host of amenities:</h3>
                  <br />
                  <div className="text-left">
                    <h4> Dining:</h4>
                    <div className="container">
                      <strong>The Palace Lounge -</strong> Have a cocktail at
                      our lounge while enjoying spectacular ocean views.
                      (seasonal)
                      <br />
                      <br />
                      <strong> The Palace Restaurant -</strong> – Enjoy seasonal
                      breakfast or lunch at our oceanfront restaurant. Breakfast
                      can be purchased in advance or at the door. (seasonal)
                      <br />
                      <br />
                      <strong> Castle Meeting Room - </strong>The Castle Meeting
                      Room can host approximately 65 people for your next group
                      or meeting event.
                      <br />
                      <br />
                    </div>
                  </div>
                  <div className="text-left">
                    <h4> Water Features:</h4>
                    <div className="container">
                      <strong>2 Oceanfront Pools –</strong> Take a dip in one of
                      the oceanfront outdoor pools and beat the heat!
                      <br />
                      <br />
                      <strong> Indoor and Outdoor Whirlpools – </strong>Relax
                      your worries away in our indoor or outdoor whirlpool.
                      <br />
                      <br />
                    </div>
                  </div>
                  <div className="text-left">
                    <h4> Entertainment & Recreation:</h4>
                    <div className="container">
                      <strong>Salty the Shark –</strong>
                      Salty the Shark is a friendly shark mascot that visits
                      Palace Resort on a seasonal basis. Kids love meeting Salty
                      the Shark and getting their photo taken with him!
                      <br />
                      <br />
                      <strong>Putting Green – </strong>Practice your game at our
                      on-site putting green, open to all guests! (seasonal)
                      <br />
                      <br />
                      <strong>Exercise Room – </strong>For those who want to
                      stay on their fitness plan during their vacation, we have
                      an exercise room for guest use.
                      <br />
                      <br />
                      <strong>Sauna – </strong>Relax in our sauna after a dip in
                      the pool.
                      <br />
                      <br />
                      <strong>Steam Room –</strong> Enjoy a refreshing visit to
                      our steam room.
                      <br />
                      <br />
                      <strong>Arcade – </strong>Get out of the summer heat and
                      pop into the arcade for some fun with your kids!
                      <br />
                      <br />
                    </div>
                  </div>
                  <div className="text-left">
                    <h4> Additional Guest Amenities:</h4>
                    <div className="container">
                      <strong> Free Wireless Internet – </strong>
                      Palace Resort offers free Wi-Fi so you can stay connected
                      while on the go.
                      <br />
                      <br />
                      <strong>Guest Laundry Facilities –</strong> Guest laundry
                      facilities are provided for those who wish to do a quick
                      load of laundry while on vacation.
                      <br />
                      <br />
                      <strong>Free Attached Parking Garage –</strong> Parking is
                      provided at no charge for guests.
                      <br />
                      <br />
                      <strong>Free Local and 800 Calls – </strong> Local Myrtle
                      Beach calls as well as toll-free calls are available via
                      room phones for guests.
                      <br />
                      <br />
                      <strong>Convenient Vending – </strong>Vending machines are
                      located throughout the resort for guest use.
                      <br />
                      <br />
                      <strong>24 Hour Front Desk – </strong>Our front desk is
                      open 24-hours a day for guest assistance.
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              }
            ></Programs>
          }
          content={
            <ProgramContentLeft
              heading=""
              image={PalaceExterior}
              content={
                <div>
                  <p>
                    The Palace Resort’s oceanfront, all-suite layout offers you
                    and your family plenty of room to stretch out and relax, and
                    plenty of opportunities to take in the spectacular views of
                    the warm sands and gentle waters of Myrtle Beach, SC. We
                    offer well-appointed and spacious Myrtle Beach
                    accommodations, like our sun suites and one and two-bedroom
                    condos. Whether you are planning a Myrtle Beach family
                    vacation, weekend getaway, or a romantic escape, Palace
                    Resort has the relaxation you are looking for.
                  </p>
                  <br />
                  <p>
                    Our onsite amenities include indoor and outdoor whirlpools,
                    a large oceanfront outdoor pool, exercise room, sauna,
                    seasonal lounge, and much, much more. Our convenient
                    location along the oceanfront of Myrtle Beach, South
                    Carolina, gives you and your family quick and easy access to
                    all the fun and excitement Myrtle Beach and the Grand Strand
                    have to offer, like water parks, amusement parks, delectable
                    dining, endless shopping, mini golf, and of course, the
                    competitive play of over 80 area golf courses. Book your
                    fun-filled Myrtle Beach oceanfront vacation today at the
                    Palace Resort.
                  </p>
                </div>
              }
            ></ProgramContentLeft>
          }
          lastContent={
            <div className="container">
              <ProgramContentLeft
                image={KovalamPalace}
                style={{ margin: 10 }}
                heading="Kovalam Palace"
              />
            </div>
          }
        ></View>
      </div>
    );
  }
}
