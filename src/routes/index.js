import React from "react";
import { Route, Switch } from "react-router-dom";

import EnsalamentView from "../pages/Ensalament/Ensalament";
import BuildingView from "../pages/Building/Building";

export default () => (
  <Switch>
    <Route exact path="/" component={EnsalamentView} />
    <Route exact path="/predios" component={BuildingView} />
  </Switch>
);
