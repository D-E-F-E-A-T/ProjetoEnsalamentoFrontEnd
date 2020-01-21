import { call, put, all, takeLatest } from "redux-saga/effects";

import api from "../../services/api";
import { Creators as BuldingActions } from "../ducks/Building";

function* load() {
  try {
    const response = yield call(api.get, "/building");

    yield put(BuldingActions.loadSuccess(response.data));
  } catch (err) {
    put(BuldingActions.loadFailure());
  }
}

export function* rootSaga() {
  return yield all([takeLatest(BuldingActions.loadRequest, load)]);
}
