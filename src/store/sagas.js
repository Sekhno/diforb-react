import { all, fork } from "redux-saga/effects"

//public
import DiforbSaga from "./diforb/saga"

export default function* rootSaga() {
  yield all([
    //public
    fork(DiforbSaga)
  ])
}