import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Divider } from "@material-ui/core";
import { Apartment } from "@material-ui/icons";

import SidebarComponent from "../../components/Navigation/Sibebar";
import { Creators as MenuActions } from "../../store/ducks/Navigation";
import SidebarItem from "../../components/Navigation/SideBarItem";

const Dashboard = () => {
  const dispatch = useDispatch();

  const showMenu = useSelector(state => state.navigation.showMenu);

  function openMenu() {
    dispatch(MenuActions.openMenu());
  }

  function closeMenu() {
    dispatch(MenuActions.closeMenu());
  }

  return (
    <SidebarComponent
      sidebarIsOpen={showMenu}
      openSidebar={openMenu}
      closeSidebar={closeMenu}
    >
      <List>
        <SidebarItem path="/" label="Prédios" icon={<Apartment />} />
      </List>
    </SidebarComponent>
  );
};

export default Dashboard;
