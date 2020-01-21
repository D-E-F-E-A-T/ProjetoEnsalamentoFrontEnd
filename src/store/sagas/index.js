import { all, fork } from "redux-saga/effects";

import * as BuildingSaga from "./Building";

export default function* rootSaga() {
  yield all(
    [...Object.values(BuildingSaga)/*, ...Object.values(accountSagas)*/].map(fork)
  );
}
