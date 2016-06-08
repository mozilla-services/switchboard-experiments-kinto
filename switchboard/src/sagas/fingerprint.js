import { call, put } from "redux-saga/effects";

import * as fingerprintActions from "../actions/fingerprint";
import Fingerprint2 from "fingerprintjs2";

function grabFingerprint() {
  return new Promise((resolve, reject) => {
    new Fingerprint2().get(function(result) {
      resolve(result);
    });
  });
}

export function* loadFingerprint() {
  try {
    yield put(fingerprintActions.fingerprintBusy(true))
    let deviceID = yield call(grabFingerprint);
    yield put(fingerprintActions.fingerprintSetup(deviceID));
  } catch(error) {
    console.error(error);
  } finally {
    yield put(fingerprintActions.fingerprintBusy(false));
  }
}
