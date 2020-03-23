/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import {
  Menu as MenuIcon,
  ArrowBack as ArrowBackIcon
} from "@material-ui/icons";
import classNames from "classnames";

// styles
import useStyles from "./styles";
import { Types as MenuTypes } from "../../store/ducks/Navigation";
import { selectShowMenu } from "../../store/selectors/NavigationSelector";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const sidebarIsOpen = useSelector(selectShowMenu);

  const toogleMenu = () => {
    dispatch({ type: MenuTypes.TOOGLE_MENU });
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={toogleMenu}
          className={classNames(
            classes.headerMenuButton,
            classes.headerMenuButtonCollapse
          )}
        >
          {sidebarIsOpen ? (
            <ArrowBackIcon
              classes={{
                root: classNames(classes.headerIcon, classes.headerIconCollapse)
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: classNames(classes.headerIcon, classes.headerIconCollapse)
              }}
            />
          )}
        </IconButton>
        <Typography variant="h6" weight="medium" className={classes.logotype}>
          React Material Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
