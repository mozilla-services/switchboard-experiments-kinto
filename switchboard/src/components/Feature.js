import React, { Component } from "react";

import * as ABTesting from "../ab_testing";

export default class Feature extends Component {
  render() {
    const {feature, fingerprint, country} = this.props;
    const matches = ABTesting.matches(feature,
                                      navigator.userAgent,
                                      navigator.languages,
                                      country);

    const inBucket = matches && ABTesting.isActive(feature,
                                                   fingerprint);

    let inBucketComponent = null;

    if (ABTesting.isEnabled(feature)) {
      inBucketComponent = (
          <span className={"glyphicon " + (inBucket ? "glyphicon-ok" : "glyphicon-remove") }
                aria-hidden="true"></span>
      );
    }


    return (
      <div className="row">
        <div className="col-md-4"><strong>{ feature.name }</strong></div>
        <div className="col-md-4">
            <span className={ "glyphicon " + (matches ? "glyphicon-ok" : "glyphicon-remove" ) }
                  aria-hidden="true">
            </span>
        </div>
        <div className="col-md-4">{ inBucketComponent }</div>
      </div>
    );
  }
}
