import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import classnames from "classnames";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Routes from "../routes";

// styles
import useStyles from "./styles";

import { selectShowMenu } from "../store/selectors/NavigationSelector";

const Index = () => {
  const classes = useStyles();
  const sidebarIsOpen = useSelector(selectShowMenu);
  return (
    <div className={classes.root}>
      <>
        <Header />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: sidebarIsOpen
          })}
        >
          <div className={classes.fakeToolbar} />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </div>
      </>
    </div>
  );
};
export default Index;
