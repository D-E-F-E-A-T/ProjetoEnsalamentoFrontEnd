import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./ducks";
import Sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(sagaMiddleware)(createStore)(reducers, devTools);

sagaMiddleware.run(Sagas);

export default store;
