import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";

import reducers from "./ducks";
import Sagas from "./sagas";
import history from "./history";

const persistConfig = {
  key: "root",
  storage,
  whitelist: []
};

const sagaMiddleware = createSagaMiddleware();

const storeEnhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

const persistedReducer = persistReducer(persistConfig, reducers(history));

const store = createStore(persistedReducer, storeEnhancer);

sagaMiddleware.run(Sagas);

const persistor = persistStore(store);

export { store, persistor };
