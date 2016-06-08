import {
  COUNTRY_BUSY,
  COUNTRY_LOAD_SUCCESS
} from "../constants";

export function countryBusy(busy) {
  return {type: COUNTRY_BUSY, busy};
}

export function countrySetup(data) {
  return {type: COUNTRY_LOAD_SUCCESS, data};
}
