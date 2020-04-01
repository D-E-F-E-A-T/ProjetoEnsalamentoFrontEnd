import React from "react";
import { Route, Switch } from "react-router-dom";

import EnsalamentView from "../views/Ensalament/Ensalament";
import BuildingView from "../views/Building/Index";

export default () => (
  <Switch>
    <Route exact path="/" component={EnsalamentView} />
    <Route exact path="/predios" component={BuildingView} />
  </Switch>
);
