import React from "react";
import { Route, Switch } from "react-router-dom";

import BuildingView from "../views/Building/Index";

export default () => (
  <Switch>
    <Route path="/" component={BuildingView} />
  </Switch>
);
