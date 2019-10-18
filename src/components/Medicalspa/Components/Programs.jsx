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

class Programs extends React.Component {
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
    const NavData = this.props.NavData;
    console.log(this.props);
    
    return (
      <div className="mt-5 program-wrapper">
        <h1>Programs</h1>
        <Nav tabs className="mt-5">
          {NavData.map((element, index) => {
            
            return (
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === index
                  })}
                  onClick={() => {
                    this.toggle(index);
                    console.log(index);
                    
                  }}
                >
                  {element}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId={0}>
            <Row>
              <Col sm="12">{this.props.tab1Content}</Col>
            </Row>
          </TabPane>
          <TabPane tabId={1}>
            <Row>
              <Col sm="12">{this.props.tab2Content}</Col>
            </Row>
          </TabPane>
          <TabPane tabId={2}>
            <Row>
              <Col sm="12">{this.props.tab3Content}</Col>
            </Row>
          </TabPane>
          <TabPane tabId={3}>
            <Row>
              <Col sm="12">{this.props.tab4Content}</Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

Programs.defaultProps = {
  NavData: [],
};
export default Programs;
