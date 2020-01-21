import React from "react";
import { useDispatch } from "react-redux";

import DashboarComponent from "../../components/Navigation/Dashboard";
import { Creators as MenuActions } from "../../store/ducks/Navigation";

const Dashboard = () => {
  const dispatch = useDispatch();

  function toogleMenu() {
    dispatch(MenuActions.toogleMenu());
  }

  return <DashboarComponent ToogleMenu={toogleMenu} />;
};

export default Dashboard;
