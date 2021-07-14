//import
import React from "react";
//style

//components

//node

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const Story = ({ story: { id, by, title, kids, time, url } }) => {
  return (
    <div className="story">
      <div className="story-box">
        <div className="story-title">
          <Link url={url} title={title} />
        </div>
        <ul className="story-info">
          <li className="comments">
            <Link
              url={`https://news.ycombinator.com/item?id=${id}`}
              title={` ${kids && kids.length > 0 ? kids.length : 0}  comments`}
            />
          </li>
          <li className="spacer">
            <span>|</span>
          </li>
          <li className="by">
            By.
            <Link
              url={`https://news.ycombinator.com/user?id=${by}`}
              title={by}
            />
          </li>
          <li className="spacer">
            <span>|</span>
          </li>

          <li className="time">
            {new Date(time * 1000).toLocaleTimeString("tr-TR", {
              hour: "numeric",
              minute: "numeric"
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Story;
