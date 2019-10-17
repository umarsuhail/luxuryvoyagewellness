import React from "react";
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

export default class Programs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }
  settings = props => {
    props.NoOfTabs = 3;
  };
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="mt-5">
        <h1>Know more about Ayurveda</h1>
        <Nav tabs className="mt-5">
          <NavItem>
            <NavLink
              className="mt-5"
              className={classnames(
                { active: this.state.activeTab === "1" },
                "nav-tab-link"
              )}
              onClick={() => {
                this.toggle("1");
              }}
            >
              {this.props.tab1}
            </NavLink>
          </NavItem>

        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">{this.props.tab1Content}</Col>
            </Row>
          </TabPane>
         
        </TabContent>
      </div>
    );
  }
}
