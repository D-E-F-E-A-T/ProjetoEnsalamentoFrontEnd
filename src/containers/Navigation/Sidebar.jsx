import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "@material-ui/core";
import { Apartment } from "@material-ui/icons";

import SidebarComponent from "../../components/Navigation/Sibebar";
import { Types as MenuTypes } from "../../store/ducks/Navigation";
import SidebarItem from "../../components/Navigation/SideBarItem";
import { selectShowMenu } from "../../store/selectors/NavigationSelector";

const Dashboard = () => {
  const dispatch = useDispatch();

  const showMenu = useSelector(selectShowMenu);

  function openMenu() {
    dispatch({ type: MenuTypes.OPEN_MENU });
  }

  function closeMenu() {
    dispatch({ type: MenuTypes.CLOSE_MENU });
  }

  return (
    <SidebarComponent
      sidebarIsOpen={showMenu}
      openSidebar={openMenu}
      closeSidebar={closeMenu}
    >
      <List>
        <SidebarItem path="/predios" label="Prédios" icon={<Apartment />} />
      </List>
    </SidebarComponent>
  );
};

export default Dashboard;
