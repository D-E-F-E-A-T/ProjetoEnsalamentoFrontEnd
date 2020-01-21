import {
  makeStyles,
  SwipeableDrawer,
  Typography,
  withWidth
} from "@material-ui/core";
import { isWidthUp } from "@material-ui/core/withWidth";
import React, { useEffect } from "react";
import PropTypes from "prop-types";

const drawerWidth = 240;

const Sidebar = ({
  width,
  closeSidebar,
  openSidebar,
  sidebarIsOpen,
  children
}) => {
  // eslint-disable-next-line no-use-before-define
  const classes = useStyles();

  const iOS =
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    if (!isWidthUp("xs", width)) closeSidebar();
  }, [width, closeSidebar]);

  return (
    <SwipeableDrawer
      className={classes.drawer}
      variant={isWidthUp("sm", width) ? "persistent" : "temporary"}
      anchor="left"
      open={sidebarIsOpen}
      color="secondary"
      onOpen={openSidebar}
      onClose={closeSidebar}
      classes={{
        paper: classes.drawerPaper
      }}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <div className={classes.drawerHeader} />
      <Typography variant="h6" className={classes.title}>
        Cadastros
      </Typography>
      {children}
    </SwipeableDrawer>
  );
};

Sidebar.propTypes = {
  // eslint-disable-next-line react/require-default-props
  width: PropTypes.string,
  closeSidebar: PropTypes.func.isRequired,
  openSidebar: PropTypes.func.isRequired,
  sidebarIsOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: 10,
    textAlign: "center"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    border: 0
  },
  drawerPaper: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "240px 100%",
    background: "linear-gradient(-206deg, #00B4DB 35%, #0083B0)",
    width: drawerWidth,
    color: "white",
    bottom: 0
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

export default withWidth()(Sidebar);
