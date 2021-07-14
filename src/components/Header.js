//import
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//style

//components

//node

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="headerspot">
          <div className="mainheader">
            <h1 className="mainh1">Hacker News</h1>
          </div>
          <div className="header-inner-box">
            <div className="navlink">
              <ul className="navlist">
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
        </div>
      </React.Fragment>
    );
  }
}
export default Header;
