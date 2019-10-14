import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class HotelDetails extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
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
        return (
          <Row>
            <Col xs="6" sm="4" md="4">
              <Nav tabs vertical pills>
                <NavItem>
                  <NavLink
                    className={classnames({active: this.state.activeTab === '1'})}
                    onClick={() => {
                      this.toggle('1');
                    }}
                  >
                    {this.props.Tab1}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({active: this.state.activeTab === '2'})}
                    onClick={() => {
                      this.toggle('2');
                    }}
                  >
                    {this.props.Tab2}

                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({active: this.state.activeTab === '3'})}
                    onClick={() => {
                      this.toggle('3');
                    }}
                  >
                    {this.props.Tab3}

                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({active: this.state.activeTab === '4'})}
                    onClick={() => {
                      this.toggle('4');
                    }}
                  >
                    {this.props.Tab4}

                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({active: this.state.activeTab === '5'})}
                    onClick={() => {
                      this.toggle('5');
                    }}
                  >
                    {this.props.Tab5}

                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col xs="6" sm="6" md="6" style={{margin:'0 auto'}} >
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <h4>{this.props.tab1Content}</h4>
                </TabPane>
                <TabPane tabId="2">
                  <h4>{this.props.tab2Content}</h4>
                </TabPane>
                <TabPane tabId="3">
                  <h4>{this.props.tab3Content}</h4>
                </TabPane>
                <TabPane tabId="4">
                  <h4>{this.props.tab4Content}</h4>
                </TabPane>
                <TabPane tabId="5">
                  <h4>{this.props.tab5Content}</h4>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        )
      }
}