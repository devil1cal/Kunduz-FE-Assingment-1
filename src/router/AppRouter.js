//import
import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
//style

//components
//import HomePage from "../components/HomePage";
//import PageNotFound from "../components/PageNotFound";
import Header from "../components/Header";
import ShowStories from "../components/ShowStories";
import Footer from "../components/Footer";

//node

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="bodyrouter">
          <header>
            <Header />
          </header>
          <div className="newsfeed">
            <Switch>
              <span className="mainpage">
                <Route
                  path="/"
                  render={() => <Redirect to="/top" />}
                  exact={true}
                />
                <Route
                  path="/:type"
                  render={({ match }) => {
                    const { type } = match.params;
                    if (!["top", "new", "best"].includes(type)) {
                      return <Redirect to="/" />;
                    }
                    return <ShowStories type={type} />;
                  }}
                />
              </span>
            </Switch>
            <span className="right_footer">
              <Footer />
            </span>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
