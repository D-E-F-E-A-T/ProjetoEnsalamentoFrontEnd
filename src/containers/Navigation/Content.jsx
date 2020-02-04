import React from "react";
import { useSelector } from "react-redux";

import ContentComponent from "../../components/Navigation/Content";
import Routes from "../../routes";
import { selectShowMenu } from "../../store/selectors/NavigationSelector";

const Content = () => {
  const showMenu = useSelector(selectShowMenu);

  return (
    <ContentComponent sidebarIsOpen={showMenu}>
      <Routes />
    </ContentComponent>
  );
};

export default Content;
