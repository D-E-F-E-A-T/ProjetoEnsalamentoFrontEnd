import {
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarItem = ({ path, nested, icon, label }) => {
  // eslint-disable-next-line no-use-before-define
  const classes = useStyles(0);
  return (
    <Link to={path} className={classes.link}>
      <ListItem button className={!!nested ? classes.nested : ""}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    </Link>
  );
};

SidebarItem.propTypes = {
  path: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  nested: PropTypes.string,
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired
};

export default SidebarItem;
const useStyles = makeStyles(theme => ({
  link: {
    color: "white",
    textDecoration: "none"
  },
  nested: {
    paddingLeft: theme.spacing(4),
    background: "rgba(0, 0, 0, 0.04)"
  }
}));
