import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../services/api";
import { Types as BuildingTypes } from "../ducks/Building";

function* loadRequest() {
  try {
    const response = yield call(api.get, "/building");

    yield put({
      type: BuildingTypes.LOAD_SUCCESS,
      buildings: response.data
    });
  } catch (err) {
    yield put({
      type: BuildingTypes.LOAD_FAILURE,
      errors: err
    });
  }
}

// function* login() {
//   // ...
//   yield put(BuildingActions.loginSuccess)

//   yield take(BuildingActions.logout)
//   // ..
//   yield put(BuildingActions.logoutSuccess)

// }

export default [takeLatest(BuildingTypes.LOAD_REQUEST, loadRequest)];
