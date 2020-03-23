import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import Index from "./containers/App";
import Theme from "./theme";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme.default}>
      <CssBaseline />
      <Index />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
