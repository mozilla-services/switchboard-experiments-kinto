import {
  FINGERPRINT_BUSY,
  FINGERPRINT_LOAD_SUCCESS
} from "../constants";

export function fingerprintBusy(busy) {
  return {type: FINGERPRINT_BUSY, busy};
}

export function fingerprintSetup(deviceID) {
  return {type: FINGERPRINT_LOAD_SUCCESS, deviceID};
}
