import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";
import { Inbox as InboxIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Dot from "./Dot";

export default function SidebarLink({
  link,
  icon,
  label,
  children,
  isSidebarOpened,
  nested,
  type
}) {
  const classes = useStyles();

  // local
  const [isOpen, setIsOpen] = useState(false);

  const routeLocation = useSelector(state => state.router.location.pathname);
  const isLinkActive = routeLocation === link;

  if (type === "title")
    return (
      <Typography
        className={classnames(classes.linkText, classes.sectionTitle, {
          [classes.linkTextHidden]: !isSidebarOpened
        })}
      >
        {label}
      </Typography>
    );

  if (type === "divider") return <Divider className={classes.divider} />;

  if (!children)
    return (
      <ListItem
        button
        component={link && Link}
        to={link}
        className={classes.link}
        classes={{
          root: classnames(classes.linkRoot, {
            [classes.linkActive]: isLinkActive && !nested,
            [classes.linkNested]: nested
          })
        }}
        disableRipple
      >
        <ListItemIcon
          className={classnames(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive
          })}
        >
          {nested ? <Dot color={isLinkActive && "primary"} /> : icon}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpened
            })
          }}
          primary={label}
        />
      </ListItem>
    );

  const toggleCollapse = e => {
    if (isSidebarOpened) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <ListItem
        button
        component={link && Link}
        onClick={toggleCollapse}
        className={classes.link}
        to={link}
        disableRipple
      >
        <ListItemIcon
          className={classnames(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive
          })}
        >
          {icon || <InboxIcon />}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpened
            })
          }}
          primary={label}
        />
      </ListItem>
      {children && (
        <Collapse
          in={isOpen && isSidebarOpened}
          timeout="auto"
          unmountOnExit
          className={classes.nestedList}
        >
          <List component="div" disablePadding>
            {children.map(childrenLink => {
              return (
                <SidebarLink
                  key={childrenLink && childrenLink.link}
                  isSidebarOpened={isSidebarOpened}
                  classes={classes}
                  nested
                  {...childrenLink}
                />
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
}

SidebarLink.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.element,
    PropTypes.node
  ]).isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.element,
    PropTypes.node
  ]),
  isSidebarOpened: PropTypes.bool.isRequired,
  nested: PropTypes.bool,
  type: PropTypes.string
};

SidebarLink.defaultProps = {
  children: null,
  nested: false,
  type: ""
};
