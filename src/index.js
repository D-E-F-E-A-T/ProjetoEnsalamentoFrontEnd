import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Index from "./containers/App";
import Themes from "./themes";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Themes.default}>
      <CssBaseline />
      <Index />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
