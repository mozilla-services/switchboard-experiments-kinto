import React, { Component } from "react";
import Features from "./Features";

export default class HomePage extends Component {
  render() {
    const {country, features, fingerprint} = this.props;
    console.log(this.props);
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
