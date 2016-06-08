import { call, put } from "redux-saga/effects";
import * as featuresActions from "../actions/features";

const FEATURES_ENDPOINT = "https://kinto-ota.dev.mozaws.net/v1/buckets/switchboard/collections/features/records";

function grabFeatures() {
  return fetch(FEATURES_ENDPOINT, {method: "GET"}).then(res => {
    return res.json();
  });
}

export function* loadFeatures() {
  try {
    yield put(featuresActions.featuresBusy(true))
    let body = yield call(grabFeatures);
    yield put(featuresActions.featuresSetup(body.data));
  } catch(error) {
    console.error(error);
  } finally {
    yield put(featuresActions.featuresBusy(false));
  }
}
