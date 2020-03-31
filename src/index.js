import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Index from "./containers/App";
import Themes from "./themes";
import { store, persistor } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <Index />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
