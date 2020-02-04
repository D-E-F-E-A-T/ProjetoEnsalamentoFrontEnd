import React from "react";
import { useDispatch } from "react-redux";

import DashboarComponent from "../../components/Navigation/Navbar";
import { Types as MenuTypes } from "../../store/ducks/Navigation";

const Dashboard = () => {
  const dispatch = useDispatch();

  function toogleMenu() {
    dispatch({ type: MenuTypes.TOOGLE_MENU });
  }

  return <DashboarComponent ToogleMenu={toogleMenu} />;
};

export default Dashboard;
