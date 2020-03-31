import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import navigation from "./Navigation";
import building from "./Building";

export default history =>
  combineReducers({
    router: connectRouter(history),
    navigation,
    building
  });
