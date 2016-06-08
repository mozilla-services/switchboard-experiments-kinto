import {
  FEATURES_BUSY,
  FEATURES_LOAD_SUCCESS,
} from "../constants";

const INITIAL_STATE = {
  data: []
};

export function features(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FEATURES_BUSY: {
      return {...state, busy: action.busy};
    }
    case FEATURES_LOAD_SUCCESS: {
      return {
        ...state,
        data: action.data
      };
    }
    default: {
      return state;
    }
  }
}

export default features;
