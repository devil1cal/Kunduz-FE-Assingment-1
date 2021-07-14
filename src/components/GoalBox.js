//import
import React, { Component } from "react";

//style

//components
import Beaver from "../assets/bevis.png";
import TickBox from "./goalticks.js";

//node

class GoalBox extends Component {
  render() {
    return (
      <div className="mainbox">
        <div className="goalheader">
          <span>Goal achieved</span>
          <div className="tickboxs_mainbox">
            <div className="tickbox">
              <TickBox />
            </div>
          </div>
        </div>
        <a href="https://ny8r6.csb.app/top" alt="home">
          <img className="box-beaver" src={Beaver} alt="cute beaver boxer" />
        </a>
      </div>
    );
  }
}
export default GoalBox;
