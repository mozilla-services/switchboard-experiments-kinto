import {
  FEATURES_BUSY,
  FEATURES_LOAD_SUCCESS
} from "../constants";

export function featuresBusy(busy) {
  return {type: FEATURES_BUSY, busy};
}

export function featuresSetup(data) {
  return {type: FEATURES_LOAD_SUCCESS, data};
}
