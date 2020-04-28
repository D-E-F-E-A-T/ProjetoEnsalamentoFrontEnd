import React from "react";
import {
  Ballot as BallotIcon,
  Apartment as ApartmentIcon
} from "@material-ui/icons";

const Items = [
  { id: 0, label: "Dashboard", link: "/", icon: <BallotIcon /> },
  { id: 1, label: "Predios", link: "/predios", icon: <ApartmentIcon /> }
];

export default Items;
