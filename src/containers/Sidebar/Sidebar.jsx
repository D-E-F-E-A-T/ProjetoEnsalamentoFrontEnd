/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Drawer, IconButton } from "@material-ui/core";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import classNames from "classnames";

// styles
import useStyles from "./styles";

import { Types as MenuTypes } from "../../store/ducks/Navigation";
import { selectShowMenu } from "../../store/selectors/NavigationSelector";

const Sidebar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const [isPermanent, setPermanent] = useState(true);

  const sidebarIsOpen = useSelector(selectShowMenu);

  function toogleMenu() {
    dispatch({ type: MenuTypes.TOOGLE_MENU });
  }

  const handleWindowWidthChange = () => {
    const windowWidth = window.innerWidth;
    const breakpointWidth = theme.breakpoints.values.md;
    const isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: sidebarIsOpen,
        [classes.drawerClose]: !sidebarIsOpen
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: sidebarIsOpen,
          [classes.drawerClose]: !sidebarIsOpen
        })
      }}
      open={sidebarIsOpen}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={toogleMenu}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse)
            }}
          />
        </IconButton>
      </div>
    </Drawer>
  );
};

export default Sidebar;
