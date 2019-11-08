import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

class HotelDetails extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
  }

  toggle(tab) {
    console.log(tab);
    
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const NavItems = this.props.NavItems;
    console.log(this.state.activeTab);
    
    return (
      <Row>
        <Col xs="6" sm="4" md="4">
          <Nav tabs vertical pills>
            {NavItems.map((item, index) => {
              console.log('map items');
              
              return (
                <NavItem  key={index}>
                  <NavLink
                 
                    className={classnames({
                      active: this.state.activeTab === index
                    })}
                    onClick={() => {
                      this.toggle(index);
                      console.log(index);
                      
                    }}
                  >
                    {item}
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Col>
        <Col xs="6" sm="6" md="6" style={{ margin: "0 auto" }}>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId={0}>
              <h4>{this.props.tab1Content}</h4>
            </TabPane>
            <TabPane tabId={1}>
              <h4>{this.props.tab2Content}</h4>
            </TabPane>
            <TabPane tabId={2}>
              <h4>{this.props.tab3Content}</h4>
            </TabPane>
            <TabPane tabId={3}>
              <h4>{this.props.tab4Content}</h4>
            </TabPane>
            <TabPane tabId={4}>
              <h4>{this.props.tab5Content}</h4>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    );
  }
}
HotelDetails.defaultProps = {
  NavItems: [],
};
export default  HotelDetails