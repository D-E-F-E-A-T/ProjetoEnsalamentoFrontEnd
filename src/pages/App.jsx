import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { useSelector } from "react-redux";

import classnames from "classnames";

import history from "../store/history";
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
        <ConnectedRouter history={history}>
          <Header />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: sidebarIsOpen
            })}
          >
            <div className={classes.fakeToolbar} />

            <Routes />
          </div>
        </ConnectedRouter>
      </>
    </div>
  );
};
export default Index;
