import React, { Component } from "react";

import { CompA, CompB } from "hello-react-library";

export default class App extends Component {
  render() {
    return (
      <div>
        <CompA />
        <CompB value="xyz" />
      </div>
    );
  }
}
