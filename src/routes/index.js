import React from "react";
import { Route, Switch } from "react-router-dom";

import IndexView from "../views/Index";

export default () => (
  <Switch>
    <Route path="/" component={IndexView} />
  </Switch>
);
