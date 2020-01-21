import React from "react";
import { useSelector } from "react-redux";

import ContentComponent from "../../components/Navigation/Content";
import Routes from "../../routes";

const Content = () => {
  const showMenu = useSelector(state => state.navigation.showMenu);

  return (
    <ContentComponent sidebarIsOpen={showMenu}>
      <Routes />
    </ContentComponent>
  );
};

export default Content;
