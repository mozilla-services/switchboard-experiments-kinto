import { call, put } from "redux-saga/effects";
import * as countryActions from "../actions/country";

const COUNTRY_LOCATION_ENDPOINT = "https://location.services.mozilla.com/v1/country";

function grabCountry() {
  return fetch(COUNTRY_LOCATION_ENDPOINT, {method: "POST"}).then(res => {
    return res.json();
  });
}

export function* loadCountry() {
  try {
    yield put(countryActions.countryBusy(true))
    let data = yield call(grabCountry);
    console.log("User Agent is:", navigator.userAgent);
    console.log("User Languages are:", navigator.languages);
    console.log("User Country is:", data.country_code);
    yield put(countryActions.countrySetup(data));
  } catch(error) {
    console.error(error);
  } finally {
    yield put(countryActions.countryBusy(false));
  }
}
