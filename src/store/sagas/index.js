import { all } from "redux-saga/effects";
import BuildingSaga from "./Building";

export default function* root() {
  yield all([...BuildingSaga]);
}
