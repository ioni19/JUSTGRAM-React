import React, { Fragment, useState, useEffect } from "react";
import Feed from "./Feed/Feed";
import Nav from "./Nav/Nav";
import "../Main/Main.scss";
import "../Main/common.scss";

const Main = () => {
  const [feedArr, setFeedArr] = useState([]);
  useEffect(() => {fetch("http://localhost:3001/data/feedData.json")
    .then((res) => res.json())
    .then((data) => {
      setFeedArr(data);
    })}, []);
  console.log(feedArr)
  return (
    <>
      <Nav />
      {feedArr.map((feed) => {
        return <Feed key={feed.id} feed={feed} />;
      })}
    </>
  );
};

export default Main;
