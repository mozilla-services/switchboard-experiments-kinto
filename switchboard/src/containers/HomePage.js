import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// import * as FeaturesActions from "../actions/features";

import HomePage from "../components/HomePage";


function mapStateToProps(state) {
  return {
    busy: state.features.busy || state.fingerprint.busy || state.country.busy,
    features: state.features,
    fingerprint: state.fingerprint,
    country: state.country.country_code,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    // ...FeaturesActions,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
