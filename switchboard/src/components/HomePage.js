import React, { Component } from "react";
import Features from "./Features";
import Spinner from "./Spinner";

export default class HomePage extends Component {
  render() {
    const {busy, country, features, fingerprint} = this.props;
    if (busy) {
      return <Spinner />;
    }
    return (
      <div className="container">
        <div className="page-header">
          <h1>Switchboard</h1>
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
