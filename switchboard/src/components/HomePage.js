import React, { Component } from "react";
import Banner from "./Banner";
import Features from "./Features";
import Spinner from "./Spinner";

import {getFeature, isActivatedFeature} from "../ab_testing";



export default class HomePage extends Component {
  render() {
    const {busy, country, features, fingerprint} = this.props;
    if (busy) {
      return <Spinner />;
    }
    const feature = getFeature('french-banner', features.data);
    const bannerActive = isActivatedFeature(feature,
                                            fingerprint,
                                            navigator.userAgent,
                                            navigator.languages,
                                            country);
    return (
      <div className="container">
        <div className="page-header">
          <Banner banner={bannerActive} />
          <p className="lead">Demo of how things A/B testing can work with Kinto.</p>
        </div>
        <Features
                  country={country}
                  features={features}
                  fingerprint={fingerprint} />
      </div>
    );
  }
}
