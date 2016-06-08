import {
  COUNTRY_BUSY,
  COUNTRY_LOAD_SUCCESS,
} from "../constants";

const INITIAL_STATE = {
  country_code: "US",
  country_name: "USA"
};

export function country(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COUNTRY_BUSY: {
      return {...state, busy: action.busy};
    }
    case COUNTRY_LOAD_SUCCESS: {
      let {country_code, country_name} = action.data;
      return {
        ...state,
        country_code,
        country_name
      };
    }
    default: {
      return state;
    }
  }
}

export default country;
