import React, { Component } from "react";
import Shawellness from "../components/Medicalspa/Shawellness";
export default class MedicalSpa extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="shawellness">
            <Shawellness />{" "}
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}
