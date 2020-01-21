import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

const Content = ({ sidebarIsOpen, children }) => {
  // eslint-disable-next-line no-use-before-define
  const classes = useStyles();

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: sidebarIsOpen
      })}
    >
      {children}
    </main>
  );
};

Content.propTypes = {
  sidebarIsOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Content;

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  content: {
    marginBottom: 20,
    minHeight: "calc(100vh - 20px)",
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up("sm")]: {
      marginLeft: -drawerWidth
    },
    paddingTop: 80,
    background: "rgb(249, 249, 252)"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: "0px !important"
  }
}));
