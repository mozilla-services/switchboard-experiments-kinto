import { combineReducers } from "redux";

import country from "./country";
import fingerprint from "./fingerprint";
import features from "./features";

const rootReducer = combineReducers({
  country,
  fingerprint,
  features,
});

export default rootReducer;
