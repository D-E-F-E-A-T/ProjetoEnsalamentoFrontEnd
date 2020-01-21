import React from "react";
import { Provider } from "react-redux";
import ViewIndex from "./views/Index";

import store from "./store";

const App = () => (
  <Provider store={store}>
    <ViewIndex />
  </Provider>
);

export default App;
