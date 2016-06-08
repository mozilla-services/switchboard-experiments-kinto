import {
  FINGERPRINT_BUSY,
  FINGERPRINT_LOAD_SUCCESS,
} from "../constants";

const INITIAL_STATE = {
  data: []
};

export function fingerprint(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FINGERPRINT_BUSY: {
      return {...state, busy: action.busy};
    }
    case FINGERPRINT_LOAD_SUCCESS: {
      return {
        ...state,
        deviceID: action.deviceID
      };
    }
    default: {
      return state;
    }
  }
}

export default fingerprint;
