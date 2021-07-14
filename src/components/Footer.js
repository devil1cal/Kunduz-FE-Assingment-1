//import
import React, { Component } from "react";
import GoalBox from "./GoalBox";
import FooterLinks from "./navlinks";

//style
//components
//import GitHupCard from "./GitHubCard";

//node

class Footer extends Component {
  render() {
    return (
      <div className="footer-outer">
        <React.Fragment>
          <div className="footer-inner">
            <div>
              <FooterLinks />
            </div>

            <div>
              <GoalBox />
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
export default Footer;
