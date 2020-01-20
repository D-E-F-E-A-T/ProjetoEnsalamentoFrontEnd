import React from "react";
import { makeStyles } from "@material-ui/core";

import Navbar from "../components/Navigation/Dashboard";

const IndexView = () => {
  // eslint-disable-next-line no-use-before-define
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  }
}));

export default IndexView;
