import React from "react";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

import Navbar from "../containers/Navigation/Navbar";
import Sidebar from "../containers/Navigation/Sidebar";
import Content from "../containers/Navigation/Content";

const IndexView = () => {
  // eslint-disable-next-line no-use-before-define
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Content />
      </BrowserRouter>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  }
}));

export default IndexView;
