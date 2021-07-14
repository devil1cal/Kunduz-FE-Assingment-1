//import
import React, { Component } from "react";
import { Link } from "react-router-dom";

//style

//components

//node

class PageNotFound extends Component {
  render() {
    return (
      <p>
        {" "}
        Page Not found. Go to <Link to="/">Home</Link>
      </p>
    );
  }
}
export default PageNotFound;
