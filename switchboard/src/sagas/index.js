import { fork } from "redux-saga/effects";

import * as countrySagas from "./country";
import * as featuresSagas from "./features";
import * as fingerprintSagas from "./fingerprint";


export default function* rootSaga() {
  yield [
    fork(countrySagas.loadCountry),
    fork(featuresSagas.loadFeatures),
    fork(fingerprintSagas.loadFingerprint),
  ];
}
