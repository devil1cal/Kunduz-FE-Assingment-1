//import
import React from "react";
import { Dot } from "react-animated-dots";

//style

//components
import Story from "./Story";
import useDataFetcher from "../hooks/dataFetcher";
import Loader from "./Loader";

//node

const ShowStories = ({ type }) => {
  const { isLoading, stories } = useDataFetcher(type ? type : "top");

  return (
    <React.Fragment>
      <Loader show={isLoading}>
        <div className="loading">
          <span className="dots">
            <Dot>.</Dot>
          </span>
          <span className="dots">
            <Dot>.</Dot>
          </span>
          <span className="dots">
            <Dot>.</Dot>
          </span>
        </div>
      </Loader>
      <React.Fragment>
        {stories.map(({ data: story }) => (
          <Story key={story.id} story={story} />
        ))}
      </React.Fragment>
    </React.Fragment>
  );
};
export default ShowStories;
