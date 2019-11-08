import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

class GuestRoom extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    console.log(this.props);

    return (
      <div className="mt-5">
        <Nav tabs className="row mt-5" style={{
          fontSize:12
        }}>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === 0
              })}
              onClick={() => {
                this.toggle(0);
                console.log();
              }}
            >
              Deluxe Palace / Garden View rooms
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === 1
              })}
              onClick={() => {
                this.toggle(1);
                console.log();
              }}
            >
              Deluxe Valley View Rooms
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === 2
              })}
              onClick={() => {
                this.toggle(2);
              }}
            >
              Deluxe Valley View Rooms (Premium Floors)
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId={0}>
            <Row>
              <Col sm="12">
                <span style={{fontSize:12}}>
                  The newly renovated palace or the lush garden views rooms are
                  simply luxurious. 45 sqm in size, they feature walk-in closets
                  and perfectly appointed bathrooms with windows overlooking
                  panoramic views of the Golf course and the Palace, with life
                  size mirrors and a luxurious bathtub with an LCD TV. Each room
                  opens onto large porches or balconies with picture-perfect
                  views, ideal for a private meal. All rooms are equipped with a
                  comfortable Settee with a footrest facing the balcony, a 42’
                  LCD TV, elegant writing and bedside tables, tea coffee maker,
                  well stocked mini bar, electronic safe and complimentary Wi-Fi
                  High speed internet access.
                </span>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId={1}>
            <Row>
              <Col sm="12">
                <span style={{fontSize:12}}>
                  Newly renovated, these 45 sqm. deluxe rooms with a private
                  balcony has views of the Rishikesh valley. Each room is
                  equipped with a luxurious King size bed, a comfortable Settee
                  with a footrest facing the balcony, a 42’ LCD TV, elegant
                  writing and bedside tables. The large private balcony has a
                  chaise-lounge for complete relaxation and a tea table. Each
                  room features spacious walk-in closets and perfectly appointed
                  bathrooms with life size mirrors and a luxurious bathtub with
                  an LCD TV and windows overlooking views of the valley. All
                  rooms are equipped with DVD player, tea coffee maker, well
                  stocked mini bar with healthy options, electronic safe and
                  complimentary high speed Wi-Fi internet access.
                </span>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId={2}>
            <Row>
              <Col sm="12">
                <span style={{fontSize:12}}>
                  Newly renovated, these 45 sqm. deluxe rooms are located on the
                  top floors, with a private balcony and panoramic views of the
                  Rishikesh valley. These select rooms on the 4th, 5th and 6th
                  floors are equipped with a luxurious King size bed, a
                  comfortable Settee with a footrest facing the balcony, a 42’
                  LCD TV, elegant writing and bedside tables. The large private
                  balcony has a chaise-lounge for complete relaxation and a tea
                  table. Each room features spacious walk-in closets and
                  perfectly appointed bathrooms with life size mirrors and a
                  luxurious bathtub with an LCD TV and windows overlooking
                  panoramic views of the valley. All rooms are equipped with DVD
                  player, tea coffee maker, well stocked mini bar with healthy
                  options, electronic safe and complimentary high speed Wi-Fi
                  internet access.
                </span>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default GuestRoom;
