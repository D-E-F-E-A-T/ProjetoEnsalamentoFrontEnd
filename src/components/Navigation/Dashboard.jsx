import {
  makeStyles,
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";
import PropTypes from "prop-types";

const Dashboard = ({ ToogleMenu }) => {
  // eslint-disable-next-line no-use-before-define
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.container}>
            <IconButton
              aria-label="Open drawer"
              edge="start"
              onClick={ToogleMenu}
              className={classes.hamburger}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" noWrap>
              Ensalamento
            </Typography>
            <div className={classes.grow} />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

Dashboard.propTypes = {
  ToogleMenu: PropTypes.func.isRequired
};

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 9999,
    border: 0,
    [theme.breakpoints.up("xs")]: {
      background: "linear-gradient(-206deg, #2b70e0 35%, #1863db)"
    },
    [theme.breakpoints.down("xs")]: {
      background: "#2b70e0"
    }
  },
  hamburger: {
    marginRight: theme.spacing(2),
    color: "inherit"
  },
  grow: {
    flexGrow: 1
  },
  link: {
    color: "white",
    textDecoration: "none",
    cursor: "pointer"
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  userIcon: {
    marginLeft: 10
  },
  button: {
    padding: "0 15px !important",
    background: "transparent",
    color: "white",
    boxShadow: "none",
    border: "1px solid white",
    "&:hover": {
      background: "rgba(255, 255, 255, .1)"
    }
  }
}));

export default Dashboard;
