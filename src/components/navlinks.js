//import
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

//style

//components

//node

class FooterLinks extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer-inner-box">
          <div className="footer-navlink">
            <ul className="footer-navlist">
              <li className="top">
                <NavLink to="/top" activeClassName="active">
                  Top Stories
                </NavLink>
              </li>

              <li className="new">
                <NavLink to="/new" activeClassName="active">
                  Latest Stories
                </NavLink>
              </li>

              <li className="best">
                <NavLink to="/best" activeClassName="active">
                  Best Stories
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default FooterLinks;
