import React from "react";
import { Route } from "react-router-dom";

import Building from "../../views/Building";

export default () => <Route exact path="/predios" component={Building} />;
