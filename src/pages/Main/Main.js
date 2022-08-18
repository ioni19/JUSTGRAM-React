import React, { Fragment } from "react";
import Feed from "./Feed/Feed";
import Nav from "./Nav/Nav";
import "../Main/Main.scss";
import "../Main/common.scss";

const Main = () => {
  return (
    <>
      <Nav />
      <Feed />
      <Feed />
      <Feed />
    </>
  );
};

export default Main;
