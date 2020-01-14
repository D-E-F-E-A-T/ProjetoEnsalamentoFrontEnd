import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ApartmentIcon from '@material-ui/icons/Apartment';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import GroupIcon from '@material-ui/icons/Group';
import ClassIcon from '@material-ui/icons/Class';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SchoolIcon from '@material-ui/icons/School';
import { Link } from "react-router-dom";
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';

export const mainListItems = (
  <List>
    <Link style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }} to="/teams">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }} to="/loadHourlies">
      <ListItem button>
        <ListItemIcon>
          <AccessTimeIcon />
        </ListItemIcon>
        <ListItemText primary="Carga Horaria" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }} to="/courses">
      <ListItem button>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Cursos" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }} to="/disciplines">
      <ListItem button>
        <ListItemIcon>
          <ClassIcon />
        </ListItemIcon>
        <ListItemText primary="Disciplinas" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }} to="/buildings">
      <ListItem button>
        <ListItemIcon>
          <ApartmentIcon />
        </ListItemIcon>
        <ListItemText primary="Prédios" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }} to="/rooms">
      <ListItem button>
        <ListItemIcon>
          <MeetingRoomIcon />
        </ListItemIcon>
        <ListItemText primary="Salas" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }} to="/teams">
      <ListItem button>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Turmas" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }} to="/ensalament">
      <ListItem button>
        <ListItemIcon>
          <AccessibleForwardIcon />
        </ListItemIcon>
        <ListItemText primary="Ensalamento" />
      </ListItem>
    </Link>
  </List>

);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);