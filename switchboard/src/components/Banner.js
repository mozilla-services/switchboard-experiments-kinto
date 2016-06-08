import React, { Component } from "react";

export default class Feature extends Component {
  render() {
    if (this.props.banner) {
      return <h1>Bannière en Français <small>because the french-banner feature is activated for me.</small></h1>;
    } else {
      return <h1>Banner in English <small>because the french-banner feature is not activated for me.</small></h1>;
    }
  }
}
