import React from "react";
import { Route } from "react-router-dom";

import Building from "../../views/Building/index";

export default () => <Route exact path="/predios" component={Building} />;
