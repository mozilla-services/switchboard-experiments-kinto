import React, { Component } from "react";

import * as ABTesting from "../ab_testing";
import Feature from "./Feature";

export default class Features extends Component {
  render() {
    const {features, fingerprint, country} = this.props;
    if (!features.data) {
      return <h4>No features</h4>;
    }

    return (
      <div>
        <h3>Features</h3>
        <div className="row">
          <div className="col-md-4"><h4>Name</h4></div>
          <div className="col-md-4"><h4>Matches?</h4></div>
          <div className="col-md-4"><h4>In buckets?</h4></div>
        </div>
        {
          features.data
            .filter(ABTesting.isEnabled)
            .sort((a, b) => {
              return a.name > b.name;
            })
            .map((feature, key) => {
              return <Feature key={key}
                              feature={feature}
                              fingerprint={fingerprint}
                              country={country} />;
            })
        }

        <h3>Deactivated Features</h3>
        <div className="row">
          <div className="col-md-4"><h4>Name</h4></div>
          <div className="col-md-4"><h4>Matches?</h4></div>
        </div>
        {
          features.data
            .filter(ABTesting.isDisabled)
            .sort((a, b) => {
              return a.name > b.name;
            })
            .map((feature, key) => {
              return <Feature key={key}
                              feature={feature}
                              fingerprint={fingerprint}
                              country={country} />
            })
        }
      </div>
    );
  }
}
